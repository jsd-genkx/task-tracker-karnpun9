import { useState } from "react";

function TaskForm({ addTask }) {
  // input task value
  const [inputTask, setinputTask] = useState("");

  //   keep value input
  const valueInput = (e) => {
    setinputTask(e.target.value);
  };

  //   value submit btn in form
  function inputForm(e) {
    e.preventDefault();
    if (inputTask.trim()) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: inputTask,
      };
      addTask(newTask);
      setinputTask("");
    }
  }
  return (
    <>
      <form onSubmit={inputForm} className="flex w-full">
        <input
          type="text"
          className="px-4 py-2 w-full"
          placeholder="Add a new task..."
          required
          value={inputTask}
          onChange={valueInput}
        />

        <button type="submit" className="bg-blue-400 hover:bg-blue-600 btn">
          Add
        </button>
      </form>
    </>
  );
}

export default TaskForm;
