import express from "express";
import { PORT, mongoDBURL } from "./config.js"; // it will contain the port number
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";
const app = express();
import cors from "cors";

app.use(cors(
  {
     origin:[""],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
  }
));

app.get('/favicon.ico', (req, res) => {
  // You can serve a favicon file or send an appropriate response
  // For example, you can send a 204 No Content response:
  res.status(200).res("a");
});

/* app.get("/", (request, response) => {
  return response.status(234).send("MERN stack developer");
}); */

app.use(express.json());

//middleware for handling cors

/* app.use(
  cors({
    origin: "http://localhost:5555",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);  */

app.use(bookRoutes);

/************************************ */

// first executed

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`App is running on the port ${PORT}`); // it will listen the port and runs if localhost:5555 is typed in browser
    });
  })
  .catch((err) => {
    console.log(err);
  });
