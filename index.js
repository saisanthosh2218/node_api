const express = require("express");
const app = express();
const port = 3005;
const data = require("./api.json");

const allowedOrigins = [
  "http://localhost:3000", // Local development
  "https://food-delivery-gssk-2218.netlify.app", // Deployed frontend
];
const cors = require("cors");
app.use(cors({ origin: allowedOrigins }));

app.get("/api/foodItems", (req, res) => res.send(data));
app.listen(port, () => console.log(`listening on port ${port}!`));
