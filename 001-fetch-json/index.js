"use strict";
// Fetch some JSON data and print the result
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// This makes a HTTP request to that URL to get the data
// This is asyn and returns a promise
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
