(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// fetch json data
var data = require('airports.json');
console.log(data);

//const asArray = Object.entries(obj);

// pick an airport
var airport = data[5];

// initialize vars
var guess = document.getElementById("userGuess");
var input = document.getElementById("inputGuess");
var table = document.getElementById("guessTable");

const quoteTable = [
                    ["There is truly no other place bearing so much love as airports.", "Jason Bak", "Columbia University, Class of '27"],
                    ["Welcome to the friendly skies!", "Robert Rooney", "CEO of United Airlines"],
                    ["Airports are like something so stanky that it makes you emotionally unstable", "Tim Mit", "N*wark Academy '23"],
                    ["There’s something magic about airports it’s like standing in a room with a thousand doors", "Alexander Diaz", "2048 MLB Hall of Famer"], 
                    ["Airports are yet the next great adventure!", "Peter Reilly", "2035 Gaelic Football Champion"], 
                    ["근데 좋아요란 말은 뻔해!","TWICE","International K-pop sensation"]
                  ];

var tableLen = quoteTable.length;
var randomNum = Math.floor(Math.random()*tableLen);

var quote = document.getElementById("quoteContent");
quote.innerHTML = quoteTable[randomNum][0];

var quoteName = document.getElementById("personName");
quoteName.innerHTML = quoteTable[randomNum][1] + ", ";

var quoteTitle = document.getElementById("personTitle");
quoteTitle.innerHTML = quoteTable[randomNum][2];

// see if guess matches
input.addEventListener('keydown', function onEvent(e) {
  if(e.key === 'Enter') {
    var index = data.findIndex(std=> std.IATA === input.value.toUpperCase());
    console.log(index);
    let port = data[index];
    console.log(port === undefined);
    //let port = eval(input.value.toUpperCase());
    //let userIATA = new port.parse([IATA])
    var row = table.insertRow(-1);
    // cell 1 name
    var cell1 = row.insertCell(0);
    cell1.innerHTML = port.name;

    //cell 2 IATA
    var cell2 = row.insertCell(1);
    cell2.innerHTML = port.IATA;
    
    //cell 3 ppy
    var cell3 = row.insertCell(2);
    cell3.innerHTML = port.ppy;
    
    //cell 4 region
    var cell4 = row.insertCell(3);
    cell4.innerHTML = port.region;

    //cell 5 rank
    var cell5 = row.insertCell(4);

    if((port.IATA === undefined) === true) {
      console.log("okay");
      table.deleteRow(0);
    }
    else {
      if(airport.IATA === port.IATA) {
        cell1.style.backgroundColor = "#37be75";
      }
      else {
      cell1.style.backgroundColor = "#ff6666";
      }

      if(airport.name === port.name) {
        cell2.style.backgroundColor = "#37be75";
      }
      else {
      cell2.style.backgroundColor = "#ff6666";
      }
      // yellow function here
      if(airport.ppy === port.ppy) {
        cell3.style.backgroundColor = "#37be75";
      }
      else {
      cell3.style.backgroundColor = "#ff6666";
      }

      if(airport.region === port.region) {
        cell4.style.backgroundColor = "#37be75";
      }
      else {
      cell4.style.backgroundColor = "#ff6666";
      }
      // yellow function here
      if(airport.rank === port.rank) {
        cell5.style.backgroundColor = "#37be75";
        cell5.innerHTML = port.rank;
      }
      else if(airport.rank - 10 <= port.rank && airport.rank + 10 >= port.rank) {
        cell5.style.backgroundColor = "#f4e878";
        cell5.style.color = "black";
        if(airport.rank > port.rank) {
          cell5.innerHTML = "↓";
        }
        if(airport.rank < port.rank) {
          cell5.innerHTML = "↑";
        }
      }  
      else {
      cell5.style.backgroundColor = "#ff6666";
      cell5.style.color = "black";
        if(airport.rank > port.rank) {
          cell5.innerHTML = "↓";
        }
        if(airport.rank < port.rank) {
          cell5.innerHTML = "↑";
        }
      }

      
    }   
    input.value = "";
    
  }
});

},{"airports.json":undefined}]},{},[1]);
