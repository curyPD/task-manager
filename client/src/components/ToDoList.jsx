import React from "react";

export default function ToDoList({ children }) {
    return <ol className="to-do-list">{children}</ol>;
}
