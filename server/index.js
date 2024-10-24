require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const connectDB = require("./connectDB");
const Clientes = require("./models/Clientes");
const Posts = require('./models/PostWork');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Get all Clientes
app.get("/api/clientes", async (req, res) => {
    try {
        const data = await Clientes.find({});

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Create a Cliente
app.post("/api/clientes", async (req, res) => {
    try {
        const { email, nome, endereco, complemento, cidade, senha } = req.body;

        const data = await Clientes.create({ email, nome, endereco, complemento, cidade, senha });

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Delete a Cliente by Id
app.delete("/api/clientes/:id", async (req, res) => {
    try {
        const clienteId = req.params.id;

        const data = await Clientes.findByIdAndDelete(clienteId);

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Update a Cliente
app.put("/api/clientes/:id", async (req, res) => {
    try {
        const clienteId = req.params.id;

        const { email, nome, endereco, complemento, cidade, senha } = req.body;

        const data = await Clientes.findByIdAndUpdate(clienteId, { email, nome, endereco, complemento, cidade, senha });

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Login Cliente
app.post("/api/clientes/login", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const cliente = await Clientes.findOne({ email });

        if (!cliente) {
            return res.status(400).json({ message: "Email ou senha incorretos." });
        }

        const isMatch = await bcrypt.compare(senha, cliente.senha);

        if (!isMatch) {
            return res.status(400).json({ message: "Email ou senha incorretos." });
        }

        res.status(200).json({ message: "Login bem-sucedido." });
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor." });
    }
});

// Check if Email Exists
app.post("/api/clientes/check-email", async (req, res) => {
    const { email } = req.body;

    try {
        const cliente = await Clientes.findOne({ email });

        if (cliente) {
            return res.status(200).json({ exists: true });
        }

        res.status(200).json({ exists: false });
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor." });
    }
});

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});

const Afiliados = require('./models/Afiliados');

// Get all Afiliados
app.get("/api/afiliados", async (req, res) => {
    try {
        const data = await Afiliados.find({});

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Create an Afiliado
app.post("/api/afiliados", async (req, res) => {
    try {
        const { email, nome, endereco, complemento, cidade, especialidade, senha } = req.body;

        const data = await Afiliados.create({ email, nome, endereco, complemento, cidade, especialidade, senha });

        if (!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Login Afiliado
app.post("/api/afiliados/login", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const afiliado = await Afiliados.findOne({ email });

        if (!afiliado) {
            return res.status(400).json({ message: "Email ou senha incorretos." });
        }

        const isMatch = await bcrypt.compare(senha, afiliado.senha);

        if (!isMatch) {
            return res.status(400).json({ message: "Email ou senha incorretos." });
        }

        res.status(200).json({ message: "Login bem-sucedido." });
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor." });
    }
});

// Check if Email Exists
app.post("/api/afiliados/check-email", async (req, res) => {
    const { email } = req.body;

    try {
        const afiliado = await Afiliados.findOne({ email });

        if (afiliado) {
            return res.status(200).json({ exists: true });
        }

        res.status(200).json({ exists: false });
    } catch (error) {
        res.status(500).json({ message: "Erro no servidor." });
    }
});


//Posts

// Get all Posts
app.get("/api/posts", async (req, res) => {
    try {
        const data = await Posts.find({}).populate('afiliado', 'nome').populate('comentarios.clienteId', 'nome');

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


// Create a Post
app.post("/api/posts", async (req, res) => {
    try {
        const { afiliado, conteudo } = req.body;

        const post = await Posts.create({ afiliado, conteudo });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', error });
    }
});

// Update a Post
app.put("/api/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const { conteudo } = req.body;

        const post = await Posts.findByIdAndUpdate(postId, { conteudo }, { new: true });

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


// Delete a Post by Id
app.delete("/api/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Posts.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


// Create a Comment on a Post
app.post("/api/posts/:id/comentarios", async (req, res) => {
    try {
        const postId = req.params.id;
        const { clienteId, conteudo } = req.body;

        const post = await Posts.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        post.comentarios.push({ clienteId, conteudo });
        await post.save();

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred',details: error.mensage });
    }
});


// Like a Post
app.post("/api/posts/:id/curtir", async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Posts.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        post.likes_count += 1;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});