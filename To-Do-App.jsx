import { useState } from "react";

import "./To-Do.css";

function ToDoApp() {
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
    <div className="container">
      <h1>Todo App</h1>

      <input
        className="input"
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter Task"
      />

      <button className="btn" onClick={addTask}>
        Add Task
      </button>

      {tasks.map((item, index) => {
        return (
          <div className="taskRow" key={index}>
            <h3>{item}</h3>
            <button
              className="dlt"
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

export default ToDoApp;

//execute in app.jsx

/*import ToDoApp from "./React-Projects/To-Do-App";

function App() {
  return <ToDoApp />;
}

export default App;*/
