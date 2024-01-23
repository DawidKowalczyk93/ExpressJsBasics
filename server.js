const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")
const app = express();

connectDb();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(3000);
