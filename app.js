
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params);
});

// app.get('/contact', (req, res) => {
//     const params = {}
//     res.status(200).render('contact.pug', params);
// });

app.listen(port, () => {
    console.log(`The application started success on port ${port}`);
});

