const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/catsController.js");

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

app.listen(PORT, () =>{
  console.log("App now listening at localhost:" + PORT);
});
