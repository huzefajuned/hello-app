import express from "express";

const PORT = process.env.PORT ?? 8080;
const app = express();

/* home route */
app.use("/", (req, res) => {
  return res.json({ mess: "Hello from server Version@3" });
});

/* test route */
app.use("/test", (req, res) => {
  return res.json({ mess: "Hello from test route@V3" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
