import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
    toDo : string
}

interface IToDo {
    text : string
    id : number
    category : "TODO" | "DOING" | "DONE"
}


const toDoState = atom<IToDo[]>({
    key :"toDo",
    default : []
})



function ToDoList() {
  const { register, handleSubmit } = useForm<IForm>();

  const [toDo, setToDo] = useRecoilState(toDoState)

  const onValid = ({toDo} : IForm) => {

    console.log(toDo)
      setToDo(prev => [{text : toDo, id: Date.now() ,category :"TODO"},...prev])
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo", {required : true})} placeholder="write to do" />
        <button>add</button>
        <ul>
            {toDo.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </form>
    </div>
  );
}
export default ToDoList;
