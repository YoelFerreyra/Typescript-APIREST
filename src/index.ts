import express from "express";
import diaryRouter from './router/diaries'

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/health", (_req, res) => {
  res.send("Run successfully "+ new Date().toLocaleDateString());
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log("Server running");
});
