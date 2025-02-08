enum isCompleted {
    yes = 'yes',
    no = 'no'
}
export type Todo = {
    id?: number
    title: string
    description: string
    isCompleted: isCompleted
}
