import { useState } from "react";
import TaskForm from "./Component/TaskForm";

function App() {
  // task array
  const [Tasks, setTasks] = useState([]);

  //   edit open-close box
  const [editShow, setEditShow] = useState(false);

  // Save function in edit
  const [editText, setEditText] = useState("");

  //   Add new task Array
  const addTask = (newTask) => {
    setTasks((ts) => [...ts, newTask]);
  };

  // Remove Button
  const removeTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  //   Edit Show / hide
  function showEdit() {
    setEditShow(!editShow)
  }

  return (
    <>
      <section>
        <div className="container mx-auto w-1/4 rounded-xl flex flex-col justify-center items-center bg-gray-100 mt-6 p-6">
          <h1 className="text-center font-extrabold text-4xl mb-6">
            Task Tracker
          </h1>

          <TaskForm addTask={addTask} />
          <ul className="m-4 w-full">
            {Tasks.map((taskArr) => (
              <li
                key={taskArr.id}
                className="bg-white w-full my-4 flex justify-between items-center p-4 rounded-lg"
              >
                <p className="text-lg">{taskArr.text}</p>
                <div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 btn" onClick={showEdit}>
                 
                    Edit
                  </button>

                  <button
                    className="bg-red-600 hover:bg-red-700 btn"
                    onClick={() => removeTask(taskArr.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
