// IMPORTS -
import express from "express";

const app = express();

// MIDDLEWARES -
app.use(express.json());

// SEEDER -
let currentUser = {
  id: 0,
  name: "John Doe",
  age: 23,
  hairColor: "brown",
  hobbies: ["swimming"],
};

let users = [
  {
    id: 0,
    name: "John Doe",
    age: 23,
    hairColor: "brown",
    hobbies: ["swimming"],
  },

  {
    id: 1,
    name: "Alan Kale",
    age: 30,
    hairColor: "black",
    hobbies: ["coding", "reading"],
  },
];

let products = [
  {
    id: 0,
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal.",
    rating: 4.5,
  },

  {
    id: 1,
    name: "basketball",
    price: "$10",
    description: "Just like the pros use.",
    rating: 3.8,
  },
];

// RESOURCE POINTS -
app.get("/current-user", (_, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id)
  res.json(users.find((user) => user.id == id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id == id ? updatedUser : user));
  res.json(users.find((user) => user.id == id));
});

app.get("/users", (_, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id == id));
});

app.get("/products", (_, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
