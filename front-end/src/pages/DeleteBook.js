import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const yes = () => {
    axios.delete(`http://localhost:5555/books/${id}`).then(navigate("/"));
  };

  const no = () => {
    NavigationPreloadManager("/");
  };

  return (
    <div className="delete">
      <h1>Sure, want to delete</h1>
      <button onClick={yes}>Yes</button>
      <button onClick={no}>No</button>
    </div>
  );
};

export default DeleteBook;
