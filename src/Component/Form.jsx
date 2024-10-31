import { useState } from "react";
import TaskForm from "./Component/TaskForm";

function App() {
  // task array
  const [Tasks, setTasks] = useState([]);
  // edit open-close box
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Add new task Array
  const addTask = (newTask) => {
    setTasks((ts) => [...ts, newTask]);
  };

  // Remove Button
  const removeTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const startEditing = (id, currentText) => {
    setEditingTaskId(id);
    setEditedText(currentText);
  };

  // Save edited task
  const saveEdit = (id) => {
    setTasks(
      Tasks.map((task) =>
        task.id === id ? { ...task, text: editedText } : task
      )
    );
    setEditingTaskId(null);
    setEditedText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingTaskId(null);
    setEditedText("");
  };

  return (
    <>
      <section>
        <div className="container mx-auto w-1/4 rounded-xl flex flex-col justify-center items-center bg-gray-100 mt-6 p-6">
          <h1 className="text-center font-extrabold text-4xl mb-6">Task Tracker</h1>

          <TaskForm addTask={addTask} />
          <ul className="m-4 w-full">
            {Tasks.map((task) => (
              <li
                key={task.id}
                className="bg-white w-full my-4 flex justify-between items-center p-4 rounded-lg"
              >
                {editingTaskId === task.id ? (
                  // Render edit mode
                  <div className="flex w-full">
                    <input
                      type="text"
                      className="px-2 py-1 w-full mr-2 border"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button
                      onClick={() => saveEdit(task.id)}
                      className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded mr-1"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  // Render display mode
                  <>
                    <p className="text-lg">{task.text}</p>
                    <div>
                      <button
                        onClick={() => startEditing(task.id, task.text)}
                        className="bg-yellow-500 hover:bg-yellow-600 btn"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 btn"
                        onClick={() => removeTask(task.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
