const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
app.use("/api", router);

const todos = [];

router.get("/todos", (_, res) => {
    res.json(todos);
});

router.post("/todos", (req, res) => {
    if (!req.body) return res.sendStatus(400);
    const { content } = req.body;
    const id = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const newToDo = {
        id,
        content,
        isImportant: false,
        isCompleted: false,
    };
    todos.push(newToDo);
    res.json(newToDo);
});

router.patch("/todos/:id", (req, res) => {
    const { id } = req.params;
    const toDo = todos.find((t) => t.id === parseInt(id, 10));
    if (!toDo) return res.sendStatus(404);
    if (!req.body) return res.sendStatus(400);
    const updatedData = req.body;
    const updatedToDo = { ...toDo, ...updatedData };
    todos.splice(todos.indexOf(toDo), 1, updatedToDo);
    res.json(updatedToDo);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
