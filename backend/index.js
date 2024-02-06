import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json());

app.use(cors());
//app.use(
//  cors({
///   origin: "http://localhost:3000",
//    methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"],
//  })
//);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern stack tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connect to database");
    app.listen(PORT, () => {
      console.log(`APP is listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
