import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function addTask() {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteButton(index) {
    const newItem = tasks.filter((task, i) => {
      return i !== index;
    });

    setTasks(newItem);
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter Task"
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      {tasks.map((item, index) => {
        return (
          <div key={index}>
            <h3 key={index}>{item}</h3>
            <button
              onClick={() => {
                deleteButton(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
