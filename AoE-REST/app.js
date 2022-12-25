const express = require("express");

const mongoConnect = require("./util/database").mongoConnect;
const unitRoutes = require("./routes/units");

const app = express();

app.use((req, res, next) => {
  next();
});

// GET /units
app.use("/units", unitRoutes);

mongoConnect(() => {
  app.listen(3000);
});
