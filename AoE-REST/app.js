const express = require("express");

const unitRoutes = require("./routes/units");

const db = require("./util/database");

const app = express();

// GET /units
app.use("/units", unitRoutes);

app.listen(8080);
