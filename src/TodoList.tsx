import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDo = useRecoilValue(toDoState)
    
  const selectorOutPut = useRecoilValue(toDoSelector)

  return (
    <div>
        <CreateToDo />
        <h1>ToDo</h1>
        <ul>
            {selectorOutPut[0].map(todo => <ToDo key={todo.id} {...todo }/>)}
        </ul>
        <h1>DOING</h1>
        <ul>
            {selectorOutPut[1].map(todo => <ToDo key={todo.id} {...todo }/>)}
        </ul>
        <h1>DONE</h1>
        <ul>
            {selectorOutPut[2].map(todo => <ToDo key={todo.id} {...todo }/>)}
        </ul>
    </div>
  );
}
export default ToDoList;
