import { atom, selector } from "recoil";

export interface IToDo {
    text : string
    id : number
    category : "TODO" | "DOING" | "DONE"
}


export const toDoState = atom<IToDo[]>({
    key :"toDo",
    default : []
})

export const toDoSelector = selector({
    key : "toDoSelector",
    get : ({get}) => {

        const todo = get(toDoState)
        
        return [
            todo.filter(t => t.category === 'TODO'),
            todo.filter(t => t.category === 'DOING'),
            todo.filter(t => t.category === 'DONE'),
        ]
    }
})