const mongoose = require("mongoose");
const Element = require("./models/elements.js");

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

// const e = new Element({
//   name: "Q1",
//   question: `Can an anonymous function be assigned to a variable?`,
//   answer: `Yes, you can assign an anonymous function to a variable.`,
// });

// e.save()
//   .then((p) => console.log(p))
//   .catch((err) => console.log(err));

const seedElements = [
  {
    name: "Q2",
    question: `In JavaScript what is an argument object?`,
    answer: `The variables of JavaScript represent the arguments that are passed to a function.`,
  },
  {
    name: "Q3",
    question: `Define closure.`,
    answer: `In JavaScript, we need closures when a variable which is defined outside the scope in reference is accessed from some inner scope.`,
  },
  {
    name: "Q4",
    question: `What is DOM? What is the use of document object?`,
    answer: `DOM stands for Document Object Model. A document object represents the HTML document. It can be used to access and change the content of HTML.`,
  },
  {
    name: "Q5",
    question:
      "How can you check if the event.preventDefault() method was used in an element?",
    answer:
      "When we use the event.defaultPrevent() method in the event object returns a Boolean indicating that the event.preventDefault() was called in a particular element.",
  },
];

Element.insertMany(seedElements)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
