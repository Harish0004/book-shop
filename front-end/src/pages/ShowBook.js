import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:5555/books/${id}`);
        await setBook(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, []);
  return (
    <div className="showBook">
      <h1>Book details</h1>
      <h2>Title: {book.title}</h2>
      <h2>Author: {book.author}</h2>
      <h2>publish Year: {book.publishYear}</h2>
      <h2>Created on: {book.createdAt}</h2>
      <h2>Last Updated on: {book.updatedAt}</h2>
    </div>
  );
};

export default ShowBook;
