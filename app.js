const express = require('express');
const fs = require('fs');
const path = require('path');



const app = express();
const PORT = 5000;


app.use(express.static(__dirname+'/public'));




const homePage = fs.readFileSync('./public/index.html', 'utf-8');
const aboutPage = fs.readFileSync('./public/About.html', 'utf-8');
const shopPage = fs.readFileSync('./public/shop.html', 'utf-8');
const contactPage = fs.readFileSync('./public/contact.html', 'utf-8');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(homePage);
});

app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(aboutPage);
});

app.get('/shop', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(shopPage);
});

app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(contactPage);
});


app.use((req, res) => {
  res.status(404).send('<h1>404, Page not found!</h1>');
});





app.listen(PORT, () => {
  console.log('Server is running right now on ' + PORT);
});
