import { useState, useEffect, useContext, createContext } from "react";

const ToDoContext = createContext(null);

export function useToDoContext() {
    return useContext(ToDoContext);
}

export default function ToDoProvider({ children }) {
    const [toDos, setToDos] = useState([]);
    const [toDoCount, setToDoCount] = useState(0);

    useEffect(() => {
        const getToDos = async function () {
            const res = await fetch("api/todos");
            const data = await res.json();
            console.log(data);
            setToDos(data);
        };
        getToDos();
    }, []);

    async function addToDo(content) {
        const res = await fetch("api/todos", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
            }),
        });
        if (res.ok) {
            const newToDo = await res.json();
            setToDos((toDos) => [...toDos, newToDo]);
        }
    }

    async function updateToDo(id, updates) {
        const res = await fetch(`api/todos/${id}`, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...updates,
            }),
        });
        if (res.ok) {
            const updatedToDo = await res.json();
            setToDos((toDos) =>
                toDos.map((t) => (t.id === id ? updatedToDo : t))
            );
        }
    }

    const value = { toDos, addToDo, updateToDo, toDoCount, setToDoCount };

    return (
        <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>
    );
}
