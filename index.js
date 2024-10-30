import express from "express";
const app = express();
const cors = require("cors");
let todo = [];

const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const id = Math.floor(Math.random() * 100);
    todo.push({id: id, title: title, description: description});
    res.status(200).json(todo);
})

app.get("/todo", (req, res) => {
    res.status(200).json(todo);
})

app.put("/edit/:id", (req, res) => {
    const {title, description} = req.body;
    const id = req.params.id;
    const todo = todo.forEach((item) => {
        if(item.id === id) {
            item.title = title;
            item.description = description;
        }
    });

    res.status(200).json(todo);
})


app.listen(3000, () => {
    console.log(`Port is running in port${port}`);
});