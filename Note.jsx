import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  function titleChange(event) {
    setTitle(event.target.value);
  }
  function textChange(event) {
    setText(event.target.value);
  }

  function handleAdd() {
    setNotes([
      ...notes,
      {
        title: title,
        text: text,
      },
    ]);
    (setTitle(""), setText(""));
  }
  return (
    <>
      <div id="block">
        <h1>Note App</h1>
        <br />
        <input name="title" value={title} onChange={titleChange} />
        <br />
        <textarea name="text" value={text} onChange={textChange}></textarea>
        <br />
        <button onClick={handleAdd}>Add</button>
      </div>

      <br />
      <hr />
      <br />

      <div id="allnotes">
        {notes.map((item, index) => {
          return (
            <div key={index} id="notes">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
