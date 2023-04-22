import React from "react";
import { AiOutlineThunderbolt, AiOutlineCheck } from "react-icons/ai";
import { useToDoContext } from "../context/ToDoProvider";

export default function ToDoItem({ id, content, isCompleted, isImportant }) {
    const { updateToDo } = useToDoContext();

    return (
        <li
            className={`to-do-item${
                isCompleted ? " to-do-item--completed" : ""
            }${isImportant ? " to-do-item--important" : ""}`}
        >
            <button
                type="checkbox"
                className="to-do-item__checkbox"
                onClick={() => updateToDo(id, { isCompleted: !isCompleted })}
            >
                {isCompleted && (
                    <AiOutlineCheck className="to-do-item__checkbox-icon" />
                )}
            </button>
            <p className="to-do-item__content">{content}</p>
            <button
                className="to-do-item__button"
                onClick={() => updateToDo(id, { isImportant: !isImportant })}
            >
                <AiOutlineThunderbolt className="to-do-item__button-icon" />
            </button>
        </li>
    );
}
