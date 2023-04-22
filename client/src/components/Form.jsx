import React, { useState } from "react";
import { useToDoContext } from "../context/ToDoProvider";
import { AiOutlinePlus } from "react-icons/ai";

export default function Form() {
    const [input, setInput] = useState("");
    const { addToDo } = useToDoContext();

    function handleChange(e) {
        setInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!input) return;
        await addToDo(input);
        setInput("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                type="text"
                placeholder="введите текст новой задачи"
                value={input}
                onChange={handleChange}
            />
            <button className="form__button">
                <AiOutlinePlus className="form__button-icon" />
            </button>
        </form>
    );
}
