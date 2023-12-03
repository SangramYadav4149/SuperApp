import React, { useEffect, useState } from "react";
import "./Notes.css";
const Notes = () => {
  const [notes, setNotes] = useState("");
  const handleChange = (e) => {
    if (e?.target?.value) {
      localStorage.setItem("userNotes", e.target.value);
    } else if (notes.length === 1) {
      localStorage.removeItem("userNotes");
      setNotes("");
    }
    let note = localStorage.getItem("userNotes");
    setNotes(note);
  };
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <section className="note-wrapper">
      <div className="note-container">
        <label>All notes</label>
        <textarea
          value={notes}
          onChange={(e) => handleChange(e)}
          id="w3review"
          name="w3review"
          rows="18"
          cols="36"
        />
      </div>
    </section>
  );
};

export default Notes;
