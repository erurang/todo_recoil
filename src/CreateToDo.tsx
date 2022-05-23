import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atom";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const setToDo = useSetRecoilState(toDoState);

  const onValid = ({ toDo }: IForm) => {
    console.log(toDo);
    setToDo((prev) => [
      { text: toDo, id: Date.now(), category: "TODO" },
      ...prev,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: true })}
        placeholder="write to do"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
