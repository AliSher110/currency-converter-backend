const express = require("express");
const bodyParser = require("body-parser");
const currencyRoutes = require("./src/routes/currencyRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 4100;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Use currencyRoutes for handling routes
app.use("/", currencyRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
