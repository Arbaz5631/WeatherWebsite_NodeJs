const { error } = require('console');
const express=require('express');
const app=express();
const hbs=require('hbs');
const port=process.env.PORT || 3000;
const path=require('path')
const f_path=path.join(__dirname,'../public');
const partials_path=path.join(__dirname,'../templates/partials');
const hbs_path=path.join(__dirname,'../templates/views')
app.set('view engine','hbs');
app.set('views',hbs_path);
hbs.registerPartials(partials_path);

app.use(express.static(f_path))
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('error',{
        error_msg:"OOPss 404 Error Page 😄😄😄😄😄"
    })
});
app.listen(port );