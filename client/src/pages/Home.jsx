import React, { useEffect } from "react";
import ToDoItem from "../components/ToDoItem";
import ToDoList from "../components/ToDoList";
import Message from "../components/Message";
import { useToDoContext } from "../context/ToDoProvider";

export default function Home() {
    const { toDos, setToDoCount } = useToDoContext();

    const activeToDos = toDos.filter((toDo) => !toDo.isCompleted);

    useEffect(() => {
        setToDoCount(activeToDos.length);
    }, [activeToDos]);

    return (
        <section>
            {activeToDos.length ? (
                <ToDoList>
                    {activeToDos.map((toDo) => (
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
                <Message text="Активных задач пока нет" />
            )}
        </section>
    );
}
