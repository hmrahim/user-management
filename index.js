const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes");

const user = "mvc";
const pass = "2YsQ6TiXhsx0jvaD";

app.use(cors());
app.use(express.json());
app.use("/user", router);

mongoose
  .connect(
    "mongodb+srv://mvc:2YsQ6TiXhsx0jvaD@cluster0.trq2z.mongodb.net/test",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("database connected");
    app.listen(port, () => {
      console.log("server is running on port 5000");
    });
  });
