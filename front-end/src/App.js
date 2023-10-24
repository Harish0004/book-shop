import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowBook from "./pages/ShowBook";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://book-shop-eta-pearl.vercel.app/books");
        const fetch_data = response.data.data;
        setBooks(fetch_data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home books={books} setBooks={setBooks} />}></Route>
        <Route path="/books/show/:id" element={<ShowBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
        <Route path="/books/create" element={<CreateBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
