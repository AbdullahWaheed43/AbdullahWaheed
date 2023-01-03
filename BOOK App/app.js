const { json } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const userApiRouter=require('./Routes/Api/usersApi');

const userLoginRouter=require('./Routes/userLogin');


const cookie=require('cookie-parser');
const blogsPage=require('./Routes/allBlogs');
const expressLayouts=require('express-ejs-layouts');
const userLoginAndProfile=require('./Routes/user');
const session=require('express-session')
const flash=require('express-flash');


const app=express();

app.use(json());
app.use(cors());
app.use(express.static('Public'));
app.use(cookie());

app.use(session({
    secret:'Some Secret Key',
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:400000}
}))
app.use(flash());
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);
app.use(function(req,res,next){
   
    res.locals.user=req.session.user;
    next();
    
    })

app.use(flash());
app.use('/api/users',userApiRouter);

app.use('/user/Login',userLoginRouter);
app.use('/',blogsPage);
app.use('/user',userLoginAndProfile);


app.use((req,res,next)=>{
    res.status(500).json({message:'Oops Something Went Wrong.'})
})

mongoose.connect('mongodb://127.0.0.1/Blogs').then(()=>{
    console.log('Successfully Connected to the mongodb.')
}).catch((e)=>{
    console.log(e);
})

app.listen(5000);