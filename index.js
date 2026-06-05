import express from "express";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use("/", (req, res) => {
  console.log("Helloe testing api")
  return res.json({ mess: "Helloe from server" });
});

app.listen(PORT, () => {
  console.log(`Server is ruiing on ${PORT}`);
});
