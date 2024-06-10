const express = require("express");
const app = express();
const port = 3005;
const data = require("./api.json");
const cors = require("cors");
app.use(cors());

app.get("/api/foodItems", (req, res) => res.send(data));
app.listen(port, () => console.log(`listening on port ${port}!`));
