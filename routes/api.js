var express = require('express');
var router = express.Router();
var {
    getTotalDailyItemsSold
} = require('../dataLayer/DataAccessLayer');

router.get('/example', function(req, res) {
    getTotalDailyItemsSold()
        .then(function(result) {
            res
                .status(200)
                .json(result);
        }, function(err) {
            res
                .status(500)
                .send(err);
        })
        .catch(err => {
            res
                .status(500)
                .send(err);;
        });
});



// 1) Total daily pudding items sold
// 2) Average daily pudding items sold per customer
// 3) Total daily item sales, split into a line for each pudding item (Dani, Milki etc)

//customerId,item,count,date
// 2993,Dani,4,02/06/2016

module.exports = router;