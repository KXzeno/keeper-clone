"use client";
import React, { useState } from "react";

function CreateArea(newNote) {
  const [note, setNote] = useState({});
  
  let handleChange = (event) => {
    let { name, value } = event.target;
    setNote(old => ({ ...old, [name]: value }));
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    newNote.onAdd(note);

    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
