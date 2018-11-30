/*****************************
Author: Runquan Ye
Date: Nov.28/218
*****************************/

// The API toolkit for making REST systems easily
const express = require('express');
// A good solution for handling JSON data in routes
const bodyParser = require('body-parser');
// Node JS modules for filesystem access
const fs = require('fs');
// Our database connection
// This will be a JSON object of our programmers
// and can be accessed as if it was any other javascript
// object
const database = require('./programmers.json');

// Make an instance of our express application
const app = express();
// Specify our > 1024 port to run on
const port = 3000;

// Apply our middleware so our code can natively handle JSON easily
app.use(bodyParser.json());


var data=fs.readFileSync('programmers.json', 'utf8');
var info=JSON.parse(data);

// We must have our list of programmers to use
if (!fs.existsSync('./programmers.json')) {
  throw new Error('Could not find database of programmers!');
}

// Build our routes

app.get('/', (req, res) => {
    
  res.send(info);
});

app.get('/:SID', (req, res) => {
  const id = req.params.id;
     let i;
    let idArray = info.SID.split('-').map(Number);
    let sidString = "";
    for(i = 0; i < idArray.length; i++){
        sidString += idArray[i];
    }
    console.log(info);
    console.log(info.SID);
    console.log(idArray);
    console.log(Number(sidString));
   
        if(JSON.stringify(info.SID).equals(id)){
            console.log("A1");
           res.send(info);
             console.log("A2");
           }
        else if(Number(sidString)  == Number(id)){
             console.log("B1");
            res.send(info);
             console.log("B2");
        }
        
    console.log("C");
});

app.put('/:id', (req, res) => {
  const id = req.params.id;

  res.send(`Fill me in to update values with ID: ${id}`);
});

app.post('/', (req, res) => {
  const body = req.body; // Hold your JSON in here!

  res.send(`You sent: ${body}`);
});

// IMPLEMENT A ROUTE TO HANDLE ALL OTHER ROUTES AND RETURN AN ERROR MESSAGE

app.listen(port, () => {
  console.log(`She's alive on port ${port}`);
});
