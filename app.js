// =======================
//          SETUP
// =======================

var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// =======================
//        ROUTES
// =======================

app.get("/", function(req,res){
    res.render("landing");
});

// =======================
//     LOCAL HOST
// =======================

app.listen(8080, function(){
    console.log("App listening to localhost port: 8080");
});
