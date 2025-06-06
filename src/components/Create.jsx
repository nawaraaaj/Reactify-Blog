import React, { useState } from "react";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    }

  return (
    <div className="create">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="none">Select an author</option>
          <option value="Alpha">Alpha</option>
          <option value="Beta">Beta</option>
          <option value="Charlie">Charlie</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
