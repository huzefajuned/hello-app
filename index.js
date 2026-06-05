import express from "express";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use("/", (req, res) => {
  return res.json({ mess: "Hello from server V1" });
});


app.use("/test", (req, res) => {
  return res.json({ mess: "Hello from test route@V1" });
});


app.listen(PORT, () => {
  console.log(`Server is ruiing on ${PORT}`);
});
