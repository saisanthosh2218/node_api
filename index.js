const express = require("express");
const app = express();
const port = 3005;
const data = require("./api.json");
const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local development
      "https://jocular-fdapp-ss-3e82f9.netlify.app/Food_Products", // Deployed frontend
    ],
  })
);

app.get("/api/foodItems", (req, res) => res.send(data));
app.listen(port, () => console.log(`listening on port ${port}!`));
