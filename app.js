const api = "ac1bc9c8290880040f9fb8c3142d1aa2";
const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views" ));
app.use(express.static(path.join(__dirname,"/public")));

app.get("/weather", (req,res)=>{
    res.render("index.ejs");
})

app.listen("8080", () => {
    console.log("Server is listening on port 8080");
});


