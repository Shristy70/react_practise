import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  const [add, setAdd] = useState([{ task: "simple task", id: uuidv4() }]);
  const [newTodo, setNewtodo] = useState("");
  const button = () => {
    setAdd((prev) => {
      return [...prev, { task: newTodo, id: uuidv4() }];
    });
    setNewtodo("");
  };
  const update = (event) => {
    setNewtodo(event.target.value);
  };
  const del = (id) => {
    setAdd(
      add.filter((val) => {
        val.id != id;
      })
    );
  };

  const UpperCaseAll = () => {
    setAdd((previous) => (
      previous.map((val) => {
        return {
          ...val,
          task: val.task.toUpperCase(),
        };
      })
    ));
  };

  return (
    <>
      <h1> Next task :- Todo List</h1>
      <hr />
      <br />
      <input
        type="text"
        placeholder="add task"
        value={newTodo}
        onChange={update}
      />
      <br /> <button onClick={button}>add task</button>
      <br />
      <br />
      <hr />
      <ul>
        {add.map((val) => (
          <li key={val.id}>
            <span>{val.task}</span> &nbsp; &nbsp;
            <button onClick={() => del(val.id)}>Delete</button>
          </li>
        ))}

        <button onClick={UpperCaseAll}>uppercase</button>
      </ul>
    </>
  );
}
