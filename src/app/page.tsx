import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Edit3Icon, TrashIcon} from "lucide-react";
import {todoApi} from "@/services/todoApi";
import DeleteTodo from "@/components/delete-todo";

export type Todo = {
    id?: number
    title: string
    description: string
    isCompleted: boolean
}

export default async function Home() {
    const todos : Todo[] = await todoApi.findAll()
    return (
        <div className="container mx-auto p-4">
            <Link href="/new">
                <Button className="bg-sky-500 hover:bg-green-400 my-10">
                    Add todo
                </Button>
            </Link>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>IsCompleted</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        todos.map(todo => (
                            <TableRow key={todo.id}>
                                <TableCell>{todo.id}</TableCell>
                                <TableCell>{todo.title}</TableCell>
                                <TableCell>{todo.description}</TableCell>
                                <TableCell>{todo.isCompleted ? "Yes" : "No"}</TableCell>
                                <TableCell className="flex justify-center items-center gap-2">
                                    <Link href={`/edit/${todo.id}`}>
                                        <Button size="icon" className="bg-yellow-300 hover:bg-yellow-400">
                                            <Edit3Icon />
                                        </Button>
                                    </Link>
                                    <DeleteTodo id={todo.id!} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

            </Table>
        </div>
    )
}
