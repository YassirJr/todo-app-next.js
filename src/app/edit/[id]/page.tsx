"use client"
import {useParams} from 'next/navigation'
import {todoApi} from "@/services/todoApi";
import {useEffect} from "react";

export default function EditTodo() {
    const {id} = useParams()

    const getTodo = async () => {
        const todo = await todoApi.findById(+id!)
        console.log(todo)
    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div>

        </div>
    )
}