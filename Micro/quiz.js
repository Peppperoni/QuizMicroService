"use strict";
//https://www.twilio.com/blog/building-javascript-microservices-node-js
// start the server:
//   node ./quiz.js 8081

//test the server:
//   curl -i --request GET localhost:8081/Music
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.argv.slice(2)[0];
const app = express();

const _app_folder = 'Desktop/Angular/casestudy2';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

var corsOptions = {
origin: 'http://localhost:4200',
optionsSuccessStatus: 200
};

const area = [
  { id: 1, name: 'NodeJs' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Music' },
];

var http = require('http');

// const nodejs = [
//   {
//       "qnum" :"1.",
//       "q": "What is the NPM?",
//       "opt1": "Nuget Package Manager",
//   "opt2": "Package manager for the JavaScript programming language",
//       "opt3": "Package manager for Node.js",
//       "answer": "Nuget Package Manager"
//   },
//   {
//       "qnum" :"2.",
//   "q": "What is ‘callback’ in Node.js?",
//       "opt1": "ust an internal method in any NodeJs application",
//   "opt2": "Function used to deal with multiple requests made to the server",
//       "opt3": "An internal module in NodeJs",
//       "answer": "Function used to deal with multiple requests made to the server"
//   },
//   {
//       "qnum" :"3.",
//       "q": "How can you delete a file in Node using fs?",
//       "opt1": "fs.remove(path, callback)",
//   "opt2": "fs.unlink(path, callback)",
//       "opt3": "fs.delete(path, callback)",
//       "answer": "fs.unlink(path, callback)"
//   },
//   {
//       "qnum" :"4.",
//       "q": "Does nodejs run on windows?",
//       "opt1": "Yes, but only nodejs 12.6 and above",
//   "opt2": "Yes",
//       "opt3": "No",
//       "answer": "Yes"
//   },
//   {
//       "qnum" :"5.",
//       "q": "In order to fire events you can do:",
//       "opt1": "emitter.on(eventName, listener)",
//   "opt2": "emitter.listeners(eventName)",
//       "opt3": "emitter.emit(eventName[, ...args])",
//       "answer": "emitter.emit(eventName[, ...args])"
//   },
//   { 
//       "qnum" :"6.",
//       "q": "How to uninstall a dependency using npm?",
//       "opt1": "npm install -u dependency-name",
//   "opt2": "npm uninstall dependency-name",
//       "opt3": "npm unistall -d dependency-name",
//       "answer": "npm uninstall dependency-name"
//   },
//   {
//       "qnum" :"7.",
//       "q": "How can you remove a directory?",
//       "opt1": "fs.rmdir(path, callback)",
//   "opt2": "fs.deletedir(path, callback)",
//       "opt3": "fs.deldirectory(path, callback)",
//       "answer": "fs.rmdir(path, callback)"
//   }
// ];

// const sport = [

//   {
//       "qnum" :"1.",
//       "q": "How many championships Michael Jordan won?",
//       "opt1": "5",
//       "opt2": "6",
//       "opt3": "7",
//       "answer": "6"
//   },
//   {
//       "qnum" :"2.",
//       "q" : "The New York Yankees has?",
//       "opt1" : "27 World Series championships",
//       "opt2" : "29 World Series championships",
//       "opt3" : "30 World Series championships",
//       "answer" : "27 World Series championships"
//   },
//   {
//       "qnum" :"3.",
//       "q" : "Who was Ayrton Senna?",
//       "opt1" : "Brazilian F1 racing driver",
//       "opt2" : "Brazilian motorcycle road racer",
//       "opt3" : "Italian motorcycle road racer",
//       "answer" : "Brazilian F1 racing driver"
//   },
//   {
//       "qnum" :"4.",
//       "q" : "Which of these is not a feature of the sports wheelchair?",
//       "opt1" : "They are made so they can be used both everyday and during the sport",
//       "opt2" : "They are custom and made to fit the user",
//       "opt3" : "They can be titanium which makes them much lighter",
//       "answer" : "They are made so they can be used both everyday and during the sport"
//   },
//   {
//       "qnum" :"5.",
//       "q" : " Which franchise was the oldest in professional football history?",
//       "opt1" : "Chicago Bears",
//       "opt2" : "Arizona Cardinals",
//       "opt3" : "New York Giants",
//       "answer" : "Arizona Cardinals"
//   },
//   {
//       "qnum" :"6.",
//       "q" : "Which one is correct team name in NBA?",
//       "opt1" : "Golden State Warriros",
//       "opt2" : "Huston Rocket",
//       "opt3" : "New York Bulls",
//       "answer" : "Huston Rocket"
//   },
//   {
//       "qnum" :"7.",
//       "q" : "In the men's singles 2018 Australian Open Championship, who did Roger Federer defeat to win the championship?",
//       "opt1" : "Ralph Nadal",
//       "opt2" : "Novak Djokovic",
//       "opt3" : "Marin Cilic",
//       "answer" : "Marin Cilic"
//   },
//   {
//       "qnum" :"8.",
//       "q" : "Who was the cover athlete of the video game 'NBA Live'",
//       "opt1" : "Antoine Walker",
//       "opt2" : "Jonny Tredman",
//       "opt3" : "Tom Cruz",
//       "answer" : "Antoine Walker"
//   },
//   {
//       "qnum" :"9.",
//       "q" : "In a professional tour game in tennis, the chair umpire may call a point penalty upon?",
//       "opt1" : "First violation",
//       "opt2" : "Second violation",
//       "opt3" : "Third violation",
//       "answer" : "Second violation"
//   },
//   {
//       "qnum" :"10.",
//       "q" : "The team with more championships at the FA Premier League is?",
//       "opt1" : "Rangers Football Club (18)",
//       "opt2" : "Liverpool (18)",
//       "opt3" : "Manchester United (13)",
//       "answer" : "Manchester United (13)"
//   }
// ];

// const music = 
// [
//     {
//         "qnum" :"1.",
//         "q": "Which music diva lost both her brother and husband to cancer in 2016?",
//         "opt1": "Taylor Swift",
//         "opt2": "Celine Dion",
//         "opt3": "Mariah Carey",
//         "answer": "Celine Dion"
//     },
//     {
//         "qnum" :"2.",
//         "q": "Michael Jackson's 1982 album Thriller featured a duet with which other legendary artist?",
//         "opt1": "Johnny Cash",
//         "opt2": "Paul McCartney",
//         "opt3": "Mariah Carey",
//         "answer": "Paul McCartney"
//     },
//     {  
//         "qnum" :"3.",
//         "q": "Who was the first female singer to be inducted into the Rock and Roll Hall of Fame?",
//         "opt1": "Johnny Cash",
//         "opt2": "Aretha Franklin",
//         "opt3": "Mariah Carey",
//         "answer": "Aretha Franklin"
//     },
//     {
//         "qnum" :"4.",
//         "q": "Musician Peter Tork died on 21 February 2019. Which band was he a part of?",
//         "opt1": "Pearl Jam",
//         "opt2": "The Monkees",
//         "opt3": "Dio",
//         "answer": "The Monkees"
//     },
//     {
//         "qnum" :"5.",
//         "q": "Which mathematical symbol is not the name of an Ed Sheeran album?",
//         "opt1": "Plus",
//         "opt2": "Multiply",
//         "opt3": "Subtract",
//         "answer": "Subtract"
//     },
//     { 
//         "qnum" :"6.",
//         "q": "Complete the Mark Ronson song title: Uptown...",
//         "opt1": "Beat",
//         "opt2": "Funk",
//         "opt3": "Girl",
//         "answer": "Funk"
//     },
//     {
//         "qnum" :"7.",
//         "q": "Which Beatle performed a James Bond theme song?",
//         "opt1": "John Lennon",
//         "opt2": "Paul McCartney",
//         "opt3": "Ringo Starr",
//         "answer": "Paul McCartney"
//     },
//     {
//         "qnum" :"8.",
//         "q": "Which is the most popular genre of music in terms of number of radio stations?",
//         "opt1": "Hip-hop",
//         "opt2": "Country",
//         "opt3": "Rock",
//         "answer": "Country"
//     }
//   ];

const fs = require('fs');

//let nodejs1 = JSON.parse(fs.readFileSync('./data/node.json'));
//console.log(nodejs1);

// app.get('/area?', (req, res) => {
//   console.log('Returning area list');  
//   res.send(req.query.area);
// });


// app.server.get('*.*', express.static(_app_folder, {maxAge: '1d'}));

// app.all('*', function(req, res){
//     res.status(200).sendFile('/', {root: _app_folder});
// });
app.post('/login',(req, res) => {
  //console.log('Returning login list');
  //console.log(req.body.user);
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  const data=require('./data/login.json');
  //console.log(data);

  //console.log(req.body);
  console.log('Returning login list');

  var flag = 1;

  for(let i in data){
   
    console.log(req.body.user+"$$$$"+req.body.pass);
    console.log(data[0].username+"@@@@"+data[0].password);


    if(req.body.user==data[i].username && req.body.pass==data[i].password){  
  console.log(data[i].username);
    
    
    flag=0;
  }
  




  }


  if(flag==0){
    res.send({"status":"success"});
  }else{
    res.send({"status":"failure"});
  }

  
});

app.get('/quiz/nodejs', (req, res) => {                                                     
  console.log('Returning nodejs list');
  res.send(JSON.parse(fs.readFileSync('./data/node.json')));
});

app.get('/quiz/sport', (req, res) => {
  console.log('Returning sport list');
  res.send(JSON.parse(fs.readFileSync('./data/sports.json')));
});

app.get('/quiz/music', (req, res) => {
  console.log('Returning music list');
  res.send(JSON.parse(fs.readFileSync('./data/music.json')));
});

console.log(`Questions service listening on port ${port}`);
app.listen(port);