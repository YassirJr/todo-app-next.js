import {todoApi} from "@/services/todoApi";
import {Todo} from "@/types";
import ListTodos from "@/components/list-todos";

export default async function Home() {
    const todos: Todo[] = await todoApi.findAll()
    return (
        <ListTodos todos={todos}/>
    )
}
