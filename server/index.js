require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Notes = require("./models/Notes");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

//Get all Notes
app.get("/api/notes", async (req, res) => {
    try{
        const data = await Notes.find({});

        if(!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occured' });
    }
});

//Get Note by ID
app.get("/api/notes/:id", async (req, res) => {
    try{
        const noteID = req.params.id;

        const data = await Notes.findById(noteID);

        if(!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occured' });
    }
});

//Create a Note
app.post("/api/notes", async (req, res) => {
    try{
        
        const { title, description } = req.body;

        const data = await Notes.create({title, description});

        if(!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occured' });
    }
});

//Update a Note
app.put("/api/notes/:id", async (req, res) => {
    try{
        const noteId = req.params.id;
        
        const { title, description } = req.body;

        const data = await Notes.findByIdAndUpdate(noteId, {title, description});

        if(!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occured' });
    }
});

//Delete a Note by Id
app.delete("/api/notes/:id", async (req, res) => {
    try{
        const noteId = req.params.id;
        

        const data = await Notes.findByIdAndDelete(noteId);

        if(!data) {
            throw new Error("No data found");
        }

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occured' });
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