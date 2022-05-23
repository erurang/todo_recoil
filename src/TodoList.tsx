import { useRecoilValue } from "recoil";
import { toDoState } from "./atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDo = useRecoilValue(toDoState)

  return (
    <div>
        <CreateToDo />
        <ul>
            {toDo.map(todo => <ToDo key={todo.id} {...todo }/>)}
        </ul>
    </div>
  );
}
export default ToDoList;
