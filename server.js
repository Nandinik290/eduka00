if (process.env.NODE_ENV !== "production") {

    const dotenv = require('dotenv').config()


}




// Importing Libraies that we installed using npm
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bcrypt = require("bcrypt") // Importing bcrypt package
const passport = require("passport")
const initializePassport = require("./passport-config")
const flash = require("express-flash")
const session = require("express-session")
const methodOverride = require("method-override")
const path =require ("path")
const bodyParser =require ("body-parser")
const expressSession =require ("express-session")
const { sendConfirmationEmail } = require('./mailer');

mongoose.set("strictQuery",true);


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

mongoose.connect("mongodb://localhost:27017/student",{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
var db=mongoose.connection;

db.on("error",()=>console.log("error to connect"));
db.once("open",()=>console.log(" connected"))

app.post("/register",(req,res)=>{
  var name= req.body.name;
  var email= req.body.email;
  var password= req.body.password;


var data ={
  "name" :name,
  "email" :email,
  "password":password
}
db.collection("users").insertOne(data,(err,collection)=>{
  if(err){
    throw err;

  }
  console.log("record insterted successfully");
});
return res.redirect("/index")

})

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
    )





const users = []

app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: "secretidhere",
    resave:false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false,

//process.env.SESSION_SECRET


}))







app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"))

app.use(express . static(path.join(__dirname,"public")))



// Configuring the register post functionality
app.post("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

// Configuring the register post functionality
app.post("/register", checkNotAuthenticated, async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        console.log(users); // Display newly registered in the console
        res.redirect("/login")

    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})

// Routes

app.get('/', checkAuthenticated, (req, res) => {
    res.render("index.ejs", {name: req.user.name})
})


app.get('/index', checkNotAuthenticated, (req, res) => {
    res.render("index.ejs",)
})

app.get('/quiz2', checkNotAuthenticated, (req, res) => {
    res.render("quiz2.ejs")
})



app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("login.ejs")
})




app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs")
})

app.get('/quiz', checkNotAuthenticated, (req, res) => {
    res.render("quiz.ejs")
})
app.get('/quiz1', checkNotAuthenticated, (req, res) => {
    res.render("quiz1.ejs")
})
app.get('/quiz2', checkNotAuthenticated, (req, res) => {
    res.render("quiz2.ejs")
})
app.get('/quiz3', checkNotAuthenticated, (req, res) => {
    res.render("quiz3.ejs")
})

app.get('/about', checkNotAuthenticated, (req, res) => {
    res.render("about.ejs")
})


app.get('/course', checkNotAuthenticated, (req, res) => {
    res.render("course.ejs")
})
app.get('/course1', checkNotAuthenticated, (req, res) => {
    res.render("course1.ejs")
})


app.get('/course2', checkNotAuthenticated, (req, res) => {
    res.render("course2.ejs")
})

app.get('/course3', checkNotAuthenticated, (req, res) => {
    res.render("course3.ejs")
})

app.get('/course4', checkNotAuthenticated, (req, res) => {
    res.render("course4.ejs")
})

app.get('/course5', checkNotAuthenticated, (req, res) => {
    res.render("course5.ejs")
})
app.get('/course6', checkNotAuthenticated, (req, res) => {
    res.render("course6.ejs")
})

app.get('/getNotes', checkNotAuthenticated, (req, res) => {
    res.render("getNotes.ejs")
})

app.get("/logout", checkNotAuthenticated,async(req,res)=>{

  try{

    console.log("logout successfully..")
    res.clearCookie("jwtoken",{path:"/"})
      res.render("logout.ejs")
  }catch(error){
    res.status(500).send(error);
  }

})



// End Routes

// app.delete('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
//   })

app.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err)
        res.redirect("/login")
    })
})

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect("/")
    }
    next()
}

app.listen(3000)
