import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

    setTitle("");
    setText("");
  }

  function handleDelete(index) {
    const updatedNotes = notes.filter((item, i) => i !== index);
    setNotes(updatedNotes);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setTitle(notes[index].title);
    setText(notes[index].text);
  }

  function handleUpdate() {
    const updatedNotes = notes.map((item, index) => {
      if (index === editIndex) {
        return {
          title: title,
          text: text,
        };
      }

      return item;
    });

    setNotes(updatedNotes);
    setTitle("");
    setText("");
    setEditIndex(null);
  }

  return (
    <>
      <div id="block">
        <h1>Note App</h1>

        <br />

        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={titleChange}
        />

        <br />

        <textarea
          name="text"
          placeholder="Write your note..."
          value={text}
          onChange={textChange}
        ></textarea>

        <br />

        <button onClick={editIndex === null ? handleAdd : handleUpdate}>
          {editIndex === null ? "Add" : "Update"}
        </button>
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

              <button onClick={() => handleEdit(index)}>Edit</button>

              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
