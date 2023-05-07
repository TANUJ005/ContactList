const express = require('express');
const path = require('path');
port = 3000;

const db = require('./config/mongoose');
const Contact = require('./models/contact')
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/', function (req, res) {
    //fetching contact data from database
    //callback funtion is deprecated so using then function
    Contact.find({}).then((data) => {
        res.render('contact-form',{
            title:"Contact List",
            contactData: data
        });
    });
});


app.post('/contact-form', (req, res) => {
   
    Contact.create({
        name : req.body.name,
        contact: req.body.contact
       } );
       
       res.redirect('/');
   
    
});

//deleting contact
app.get('/delete-contact' , (req , res) => {
    let id = req.query.id;
    console.log(id);
    Contact.findByIdAndDelete(id).then(() => {
        res.redirect('back');
    })
    
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } console.log("server is running fine on port 3000");
});