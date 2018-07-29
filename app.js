// =======================
//          SETUP
// =======================

var express = require("express"),
    mysql   = require("mysql"),
    bodyParser = require("body-parser"),
    faker   = require("faker"),
    app     = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Here we will be creating the connection of mySQL with
// the Node.js
var connection = mysql.createConnection({
    host : "localhost",
    user : "praveen__kumar__",
    database : "sprks"
});


// =======================
//        ROUTES
// =======================

app.get("/", function(req,res){
    var q = 'select first_name,last_name,posts from users inner join posts on users.id = posts.user_id;';
    connection.query(q, function (error, blog) {
    if (error) throw error;
    var userName = blog[0].first_name;
    var blogContent = blog[0].posts;
    console.log(userName);
    console.log(blogContent);
    res.render("landing.ejs",{blog: blogContent, user: userName});
    
    connection.end();
    });
    
    console.log(faker.name.firstName);
});


//getting the signup page route
app.get("/signup", function(req,res)
{
    res.render("signup");
});

// logic for handling the user Signup
app.post("/signup", function(req, res){
    console.log(req.body);
    console.log(md5(req.body.password));
    res.render("show");
});

// =======================
//     LOCAL HOST
// =======================

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("App listening ...");
});


// Uncomment the below code and comment the above to execute on the local computer
// app.listen(8080, function(){
//     console.log("App listening ...");
// });
