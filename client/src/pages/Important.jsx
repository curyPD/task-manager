import React, { useEffect } from "react";
import ToDoItem from "../components/ToDoItem";
import ToDoList from "../components/ToDoList";
import Message from "../components/Message";
import { useToDoContext } from "../context/ToDoProvider";

export default function Important() {
    const { toDos, setToDoCount } = useToDoContext();

    const importantToDos = toDos.filter(
        (toDo) => !toDo.isCompleted && toDo.isImportant
    );

    useEffect(() => {
        setToDoCount(importantToDos.length);
    }, [importantToDos]);

    return (
        <section>
            {importantToDos.length ? (
                <ToDoList>
                    {importantToDos.map((toDo) => (
                        <ToDoItem
                            key={toDo.id}
                            id={toDo.id}
                            content={toDo.content}
                            isImportant={toDo.isImportant}
                            isCompleted={toDo.isCompleted}
                        />
                    ))}
                </ToDoList>
            ) : (
                <Message text="Важных задач пока нет" />
            )}
        </section>
    );
}
