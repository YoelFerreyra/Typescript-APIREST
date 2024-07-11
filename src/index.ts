import express from "express";
const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/health", (_req, res) => {
  res.send("Run successfully "+ new Date().toLocaleDateString());
});

app.listen(PORT, () => {
  console.log("Server running");
});
