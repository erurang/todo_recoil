import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atom";

function ToDo({ text, category,id }: IToDo) {
  const setTodo = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setTodo(prev => {

        return prev.map(todo => {
            if(todo.id === id) {
                return {...todo, category : name as IToDo["category"]}
            }
            return todo
        })

    })
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          TODO
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
