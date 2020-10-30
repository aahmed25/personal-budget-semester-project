const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const budgetmodel = require('./models/personal-budget_schema');
let url = 'mongodb://localhost:27017/personalbudget';

app.use('/', express.static('public'));

//const budget = require ('./budget.json');
// {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 70
//     },
//     {
//         title: 'Rent',
//         budget: 800
//     },
//     {
//         title: 'Grocery',
//         budget: 110
//     },
//     {
//         title: 'Phone',
//         budget: 80
//     },
//     {
//         title: 'Insurance',
//         budget: 140
//     },
//     {
//         title: 'Car',
//         budget: 300
//     },
//     {
//         title: 'Bills',
//         budget: 400
//     },
// ]
// };


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        budgetmodel.find({})
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });
});

app.post('/add', (req, res) => {
    mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        var budgetAdd = {
            title: req.body.title,
            value: req.body.value,
            color: req.body.color,
        };

        budgetmodel.insertMany(budgetAdd)
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});