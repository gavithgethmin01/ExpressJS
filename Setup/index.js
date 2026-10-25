import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(200).send({ msg: "hellow" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, username: "ason", displayName: "Ason" },
    { id: 2, username: "kuvidi", displayName: "Kuvidi" },
    { id: 3, username: "isuru", displayName: "isuru" },
    { id: 4, username: "gethmin", displayName: "Gethmin" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
