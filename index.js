const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Element = require("./models/elements.js");
const methodOverride = require("method-override");

mongoose.set("strictQuery", true);

const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Anki");
    console.log("connection open");
  } catch (err) {
    console.log("Connection error");
    console.log(err);
  }
};

main();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("elements/home");
});

app.get("/elements", async (req, res) => {
  const elements = await Element.find({});
  res.render("elements/index", { elements });
});

app.get("/elements/new", (req, res) => {
  res.render("elements/new");
});
app.post("/elements", async (req, res) => {
  const newElement = new Element(req.body);
  await newElement.save();
  res.redirect(`/elements/${newElement._id}`);
});

app.get("/elements/:id", async (req, res) => {
  const { id } = req.params;
  const element = await Element.findById(id);
  res.render("elements/show", { element });
});
app.get("/elements/:id/edit", async (req, res) => {
  const { id } = req.params;
  const element = await Element.findById(id);
  res.render("elements/edit", { element });
});
app.put("/elements/:id", async (req, res) => {
  const { id } = req.params;
  const element = await Element.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/elements/${element._id}`);
});

app.delete("/elements/:id", async (req, res) => {
  const { id } = req.params;
  const DeleteElement = await Element.findByIdAndDelete(id);
  res.redirect("/elements");
});

app.listen(3000, () => {
  console.log("App is listening on port: 3000");
});

// const study = async () => {
//   const elements = await Element.find({});
//   const length = elements.length;
//   let numArr = [];
//   const randInt = () => Math.floor(Math.random() * length);
//   console.log(elements);
//   console.log(num);
//   elements.splice(num, 1);
//   console.log(elements);
//   for (let i = 0; i < length; i++) {
//     const num = randInt();
//     if (numArr.includes(num)){

//     }
//   }
// };
