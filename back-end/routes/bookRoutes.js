import { Book } from "./../model/bookmodel.js";
import express from "express";

const router = express.Router();

//route to get all the books from the database

router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

//get a book by its id

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response
        .status(500)
        .send({ message: "enter all the details of the book" });
    }
    const book = await Book.create(request.body);
    return response.status(200).send(book);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

//update a book by its id

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response
        .status(500)
        .send({ message: "enter all the details for the book" });
    }
    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(500).send({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

//delete a book by its id

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(500).send({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
