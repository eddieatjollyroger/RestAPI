import express from "express";
import bodyParser from "body-parser";

import propertyRoutes from "./routes/propertyRouter.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use('/properties', propertyRoutes);

app.get("/", (req, res) => res.send("Welcome to the properties API!"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));