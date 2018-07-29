// =======================
//          SETUP
// =======================

var express = require("express"),
    mysql   = require("mysql"),
    expressSession = require("express-session"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    faker   = require("faker"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    user = require("./public/databaseFiles/userauth"),
    app     = express();
    app.use(express.static("public"));
    mongoose.connect("mongodb://localhost/userauths");
    
    
//configuration for all the requires starts here
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(expressSession({
    secret: "his is an simple blog app",
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
    var q = 'select first_name,last_name,posts,blogHeading,imageUrl from users inner join posts on users.id = posts.user_id;';
    connection.query(q, function (error, blog) {
    if (error) console.log("there is some error");
    var userName = blog[0].first_name;
    var blogContent = blog[0].posts;
    var title = blog[0].blogHeading;
    console.log(blog[22]);
    console.log(userName);
    console.log(blogContent);
    console.log(title);
    res.render("landing.ejs",{blog: blogContent, user: userName, blogHeading: title });
    
    connection.end();
    });
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
            console.log(err);
            return res.redirect("/");
        }
        res.render("show");
    });
});
//logging in the user
app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login"
}),function(req,res){
    
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
