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
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
}

export default App;
