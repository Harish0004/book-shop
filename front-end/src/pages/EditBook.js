import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publishYear, setPublishYear] = useState();

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:5555/books/${id}`).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      console.log(res.data);
    });
  }, []);

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="form">
      <h1>Edit book</h1>
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
      <button onClick={editBook}>edit Book </button>
    </div>
  );
};

export default EditBook;
