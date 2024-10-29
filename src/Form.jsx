import { useState } from "react";

const Form = () => {
  const [Task, setTask] = useState([]);
  const [newTodo, setnewTodo] = useState("");

  const Addtodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      setnewTodo("");
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center">ToDo List</h1>

      <div className="flex justify-center mt-10">
        <form>
          <label>Create List </label>
          <input
            type="text"
            placeholder="Add task here"
            value={newTodo}
            onChange={(e) => setnewTodo(e.target.value)}
          />

          <ul className="">
            <li>
              <button className="bg-blue-500 btn" onClick={Addtodo}>
                Add
              </button>
              <button className="bg-yellow-500 btn">Edit</button>
              <button className="bg-red-600 btn">Remove</button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Form;
