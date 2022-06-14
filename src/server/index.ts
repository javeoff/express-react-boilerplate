import express from "express"

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
