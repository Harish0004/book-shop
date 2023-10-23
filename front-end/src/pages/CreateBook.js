import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="form">
      <h1>Add Book</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>publishYear</label>
      <input
        type="text"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <button onClick={saveBook}>Save Book </button>
    </div>
  );
};

export default CreateBook;
