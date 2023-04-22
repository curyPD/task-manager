import React from "react";
import { useToDoContext } from "../context/ToDoProvider";

export default function Header() {
    const { toDoCount } = useToDoContext();
    return (
        <header className="header">
            <div className="heading-box">
                <h1 className="heading-primary">Менеджер Задач</h1>
                <p className="author">by Роман Дружинин</p>
            </div>
            <p className="to-do-count">
                Задач: <span className="to-do-count__value">{toDoCount}</span>
            </p>
        </header>
    );
}
