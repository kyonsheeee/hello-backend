const express = require("express");
const app = express();
const port = 5000;

app.get("/api/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
