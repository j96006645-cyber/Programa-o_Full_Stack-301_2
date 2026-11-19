const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");
const http = require("http");

const app = express();

// CONFIGURACOES
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");

// BANCO DE DADOS
const url = "mongodb://127.0.0.1:27017";
const cliente = new MongoClient(url);

let banco;
let usuarios;

// PAGINA INICIAL
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// EXEMPLO GET
app.get("/receber", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    res.render("mensagem", {
        mensagem: "Nome: " + nome + " | Idade: " + idade
    });
});

// EXEMPLO POST
app.post("/receber", (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;

    res.render("mensagem", {
        mensagem: "Nome: " + nome + " | Idade: " + idade
    });
});

// CADASTRAR USUARIO
app.post("/cadastrar_usuario", async (req, res) => {
    const nome = req.body.nome;
    const login = req.body.login;
    const senha = req.body.senha;

    const existente = await usuarios.findOne({
        Login: login
    });

    if (existente) {
        return res.render("mensagem", {
            mensagem: "Login já cadastrado!"
        });
    }

    await usuarios.insertOne({
        Nome: nome,
        Login: login,
        Senha: senha
    });

    res.render("mensagem", {
        mensagem: "Cadastro realizado com sucesso!"
    });
});

// FAZER LOGIN
app.post("/login", async (req, res) => {
    const login = req.body.login;
    const senha = req.body.senha;

    const usuario = await usuarios.findOne({
        Login: login,
        Senha: senha
    });

    if (usuario) {
        res.render("mensagem", {
            mensagem: "Login correto! Acesso permitido."
        });
    } else {
        res.render("mensagem", {
            mensagem: "Login ou senha incorretos!"
        });
    }
});

// LISTAR USUARIOS
app.get("/usuarios", async (req, res) => {
    const lista = await usuarios.find().toArray();

    res.render("usuarios", {
        usuarios: lista
    });
});

// ATUALIZAR USUARIO
app.post("/atualizar_usuario", async (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const login = req.body.login;
    const senha = req.body.senha;

    await usuarios.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                Nome: nome,
                Login: login,
                Senha: senha
            }
        }
    );

    res.render("mensagem", {
        mensagem: "Usuario atualizado!"
    });
});

// EXCLUIR USUARIO
app.post("/excluir_usuario", async (req, res) => {
    const id = req.body.id;

    await usuarios.deleteOne({
        _id: new ObjectId(id)
    });

    res.render("mensagem", {
        mensagem: "Usuario excluido!"
    });
});

// INICIAR SERVIDOR
async function iniciarServidor() {
    try {
        await cliente.connect();

        banco = cliente.db("exemplo_bd");
        usuarios = banco.collection("Usuarios");

        http.createServer(app).listen(80, () => {
            console.log("Servidor rodando na porta 80");
        });

    } catch (erro) {
        console.log("Erro ao conectar:", erro);
    }
}

iniciarServidor();
