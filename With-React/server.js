import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to automatically parse incoming JSON payloads
app.use(express.json());

//Base Route (GET Request)
app.get("/", (req, res) => {
  res.send("Welcome to your Express backend!");
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "David" },
    { id: 3, name: "Katara" },
    { id: 4, name: "Wensday" },
    { id: 5, name: "Babo" },
    { id: 6, name: "Though" },
  ];
  res.json(users);
});

// sample POST Route to accept client data
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  // You would typically save newUser to a database here
  res.status(201).json({
    massage: "User created successfully",
    data: newUser,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is happly running on : http://localhost:${PORT}`);
});
