import express from "express";

const app = express();

const port = process.env.port || 3000;

app.get("/", (request, response) => {
  response.status(200).send({ msg: "hellow" });
});

app.get("/api/users", (request, response) => {
  response.send([
    { id: 1, username: "Ason", displayname: "Ason" },
    { id: 2, username: "Kuvidi", displayname: "Kuvidi" },
    { id: 3, username: "Isuru", displayname: "Isuru" },
    { id: 4, username: "Gethmin", displayname: "Gethmin" },
  ]);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
