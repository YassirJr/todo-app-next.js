import {Todo} from "@/app/page";

export const todoApi = {
    findAll: async () => (await fetch("http://localhost:5000/todos")).json(),
    findById: async (id: number) => (await fetch(`http://localhost:5000/todos/${id}`)).json(),
    save: async (todo: Todo) => (await fetch("http://localhost:5000/todos", {
        method: "POST",
        body: JSON.stringify(todo)
    })),
    update: async (todo: Todo) => (await fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo)
    })),
    delete: async (id: number) => (await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
    }))
}