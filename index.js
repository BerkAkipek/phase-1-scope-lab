// Write your solution in this file!
var customerName = 'bob'
var bestCustomer;

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    globalThis.bestCustomer = 'not bob';
}

function overwriteBestCustomer (){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'karen'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'ali';
}

