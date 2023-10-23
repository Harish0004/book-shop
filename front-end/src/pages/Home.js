import React from "react";
import { Link } from "react-router-dom";

const Home = ({ books }) => {
  return (
    <div>
      <div className="bookList">
        <h1>Book List</h1>
        <table>
          <thead>
            <tr>
              <th>sno</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear}</td>
                <td>
                  <div className="op">
                    <Link to={`/books/show/${book._id}`}>
                      <span>show</span>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <span>edit</span>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <span>delete</span>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`/books/create`}>
          <button className="add">Add Book</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
