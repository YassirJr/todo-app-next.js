"use client"

import {Todo} from '@/types';
import {JSX} from "react";

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

const todoSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Description must be at least 2 characters.",
    }),
    isCompleted: z.enum(["yes", "no"], {
        required_error: "Please select a valid option.",
    }),
})

type CreateUpdateTodoProps = {
    todo?: Todo
}

export default function CreateUpdateTodo({todo}: CreateUpdateTodoProps): JSX.Element {

    const form  = useForm<z.infer<typeof todoSchema>>({
        resolver: zodResolver(todoSchema),
        defaultValues: todo || {
            title: "",
            description: "",
            isCompleted: "no"
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof todoSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="container mx-auto my-10 w-1/2 border p-4 rounded space-y-8">
                <h1 className="text-3xl underline">Create Todo :</h1>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="title" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the title of the todo.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="description" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the description of the todo.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="isCompleted"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>
                                Is the todo completed?
                            </FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="yes" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Yes
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            No
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )


}