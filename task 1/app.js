let express = require('express');
let path = require('path');
require ('dotenv').config();
let app = express();
let port = 3000 || process.env.port;

//T
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//To set the view engine as ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

// Router that will render the form page 
app.get('/',(req,res)=>{
    res.render('index');
})

// Route that handles the form submission
app.post('/',(req,res)=>{
    let {email,password} = req.body;
    res.render('submit',{email,password});
})

//To start the server
app.listen(port,()=>{
    console.log( `http://localhost:${port}`);
}) 