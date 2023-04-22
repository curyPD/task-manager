import React, { useEffect } from "react";
import ToDoItem from "../components/ToDoItem";
import ToDoList from "../components/ToDoList";
import Message from "../components/Message";
import { useToDoContext } from "../context/ToDoProvider";

export default function Completed() {
    const { toDos, setToDoCount } = useToDoContext();

    const completedToDos = toDos.filter((toDo) => toDo.isCompleted);

    useEffect(() => {
        setToDoCount(completedToDos.length);
    }, [completedToDos]);

    return (
        <section>
            {completedToDos.length ? (
                <ToDoList>
                    {completedToDos.map((toDo) => (
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
                <Message text="Выполненных задач пока нет" />
            )}
        </section>
    );
}
