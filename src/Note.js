import React from "react";

const Note = (props) => {
  const updateTitle = (event) => {
    const updatedValue = event.target.value;
    const editNoteId = props.note.id;
    props.onType(editNoteId, "title", updatedValue);
  };

  const updateDescription = (event) => {
    const updatedValue = event.target.value;
    const editNoteId = props.note.id;
    props.onType(editNoteId, "description", updatedValue);
  };

  const deleteNote = () => {
    props.removeNote(props.note.id);
  };

  return (
    <li className="note">
      <input
        type="text"
        value={props.note.title}
        onChange={updateTitle}
        placeholder="Title"
        className="note__title"
      />
      <textarea
        value={props.note.description}
        onChange={updateDescription}
        placeholder="Description..."
        className="note__description"
      />
      <span className="note__delete" onClick={deleteNote}>
        X
      </span>
    </li>
  );
};
export default Note;
