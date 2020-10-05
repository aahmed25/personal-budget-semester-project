const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = require ('./budget.json');
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
    res.json(budget);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
});