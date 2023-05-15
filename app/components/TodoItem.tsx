"use client";
import React from "react";
import { Task } from "../page";
import { deleteTask } from "@/lib/prisma/task";

function TodoItem({ todo }: { todo: Task }) {
    return (
        <div
            className="p-4 w-96 bg-primary flex flex-row justify-between shadow-md text-primary-content rounded-md mb-4"
            key={todo.id}
        >
            <span>{todo.title}</span>
            <button onClick={() => deleteTask(todo.id)}>Xoá</button>
        </div>
    );
}

export default TodoItem;
