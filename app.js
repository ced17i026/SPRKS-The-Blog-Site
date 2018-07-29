// =======================
//          SETUP
// =======================

var express = require("express"),
    mysql   = require("mysql"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    faker   = require("faker"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    user = require("./public/databaseFiles/userauth"),
    app     = express();
    app.use(express.static(__dirname + "/public"));
    mongoose.connect("mongodb://localhost/userauths");
//configuration for all the requires starts here
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(require("express-session")({
    secret: "This is an simple blog app",
    resave: false,
    saveUninitialized: false
}));
//configuring passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

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
    user.register(new user({username: req.body.email}),req.body.password,function(err,data){
        if(err)
        {
            res.redirect("/")
        }
        else
        res.render("show");
    });
});
//logging in the user


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
