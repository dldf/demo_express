const express = require("express");
const app = express();

// Serve static files from the public dir
app.use(express.static("public"));

// Start the web server
app.listen(3099, function() {
   console.log("Listening on port 3099...");
});
