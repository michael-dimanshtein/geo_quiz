var express = require("express");
var mongojs = require("mongojs");

var app = express();

var databaseUrl = "countries";
var collections = ["countrydata"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error: ", error);
});

app.get("/", function (req, res) {
    res.send("Hello, AJAX soon");
});

app.get("/ajax", function (req, res) {
    var queryUrl = "http://api.worldbank.org/countries"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (response) {
        console.log(response);
    });
});


app.listen(3000, function () {
    console.log("App ready to AJAX");
});
// function apiFunction(){
//     var queryUrl = "http://api.worldbank.org/countries"

//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     }).done(function(response){
//         console.log(response);
//     });
// }

// apiFunction();