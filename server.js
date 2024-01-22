const express = require("express");
const app = express();

const port = 5000;

app.use("/api/contacts", require("./routes/contactRoutes.js"));

app.listen(3000);
