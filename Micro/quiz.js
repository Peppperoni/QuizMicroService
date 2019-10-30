//https://www.twilio.com/blog/building-javascript-microservices-node-js
// start the server:
//   node ./quiz.js 8081

//test the server:
//   curl -i --request GET localhost:8081/heroes

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

const area = [
  { id: 1, name: 'NodeJs' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Music' },
];

const nodejs = [
  {
    id:1,
    "NodeJs": {
    "q1": {
    "question": "What is the NPM?",
    "options": [
    "Nuget Package Manager",
    "Package manager for the JavaScript programming language",
    "Package manager for Node.js"
    ],
    "answer": "Node Package Management"
    },
    "q2": {
    "question": "Does nodejs run on windows?",
    "options": [
    "Yes",
    "No",
    "Yes, but only nodejs 12.6 and above"
    ],
    "answer": "Yes"
    },
    "q3": {
    "question": "What is ‘callback’ in Node.js?",
    "options": [
    "Just an internal method in any NodeJs application",
    "Function used to deal with multiple requests made to the server",
    "An internal module in NodeJs"
    ],
    "answer": "Function used to deal with multiple requests made to the server"
    },"q4": {
      "question": "What is express?",
      "options": [
      "An external module",
      "An internal module",
      "A NodeJs I/O command"
      ],
      "answer": "An external module"
      },
      "q5": {
      "question": "How can you delete a file in Node using fs?",
      "options": [
      "fs.remove(path, callback)",
      "fs.unlink(path, callback)",
      "fs.delete(path, callback)"
      ],
      "answer": "fs.unlink(path, callback)"
      },
      "q6": {
      "question": "In order to fire events you can do:",
      "options": [
      "emitter.on(eventName, listener)",
      "emitter.listeners(eventName)",
      "emitter.emit(eventName[, ...args])"
      ],
      "answer": "emitter.emit(eventName[, ...args])"
      },
      "q7": {
      "question": "How to uninstall a dependency using npm?",
      "options": [
      "npm install -u dependency-name",
      "npm uninstall dependency-name",
      "npm unistall -d dependency-name"
      ],
      "answer": "npm uninstall dependency-name"
      },
      "q8": {
      "question": "What is the Package.json?",
      "options": [
      "File that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies",
      "File automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated",
      "File present in the node_modules folder and define all the dependencies for a nodejs app"
      ],
      "answer": "File that holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies"
      },
      "q9": {
      "question": "How can you remove a directory?",
      "options": [
      "fs.rmdir(path, callback)",
      "fs.deletedir(path, callback)",
      "fs.deldirectory(path, callback)"
      ],
      "answer": "fs.rmdir(path, callback)"
      },
      "q10": {
      "question": "To accommodate the single-threaded event loop, and handle asynchronous events Node.js uses the library?",
      "options": [
      "Libuv",
      "V8Lib",
      "NodejsCore"
      ],
      "answer": "Libuv"
      }
      }
  }
];

const sport = [
  {
    id:2,
    "Sports": {
    "q1": {
    "question": "how many championships Michael Jordan won?",
    "options": [
    "5",
    "6",
    "7"
    ],
    "answer": "6"
    },
    "q2": {
    "question": "The New York Yankees has?",
    "options": [
    "27 World Series championships",
    "29 World Series championships",
    "30 World Series championships"
    ],
    "answer": "27 World Series championships"
    },
    "q3": {
    "question": "Who was Ayrton Senna?",
    "options": [
    "Brazilian F1 racing driver",
    "Brazilian motorcycle road racer",
    "Italian motorcycle road racer"
    ],
    "answer": "Brazilian F1 racing driver"
    },
    "q4": {
    "question": "The team with more championships at the FA Premier League is?",
    "options": [
    "Rangers Football Club (18)",
    "Liverpool (18)",
    "Manchester United (13)"
    ],
    "answer": "Manchester United (13)"
    }
    }
  }
];

const music = [
  {
    id:3,
    "Music": {
    "q1": {
    "question": "The female artist with more Latin Grammys won is?",
    "options": [
    "Natalia Lafourcade (10)",
    "Celia Cruz (16)",
    "Shakira (13)"
    ],
    "answer": "Shakira (13)"
    },
    "q2": {
    "question": "The highest grossing album of 2017 in US?",
    "options": [
    "Taylor Swift, Reputation",
    "Ed Sheeran, ÷ (Divide)",
    "Bruno Mars, 24K Magic"
    ],
    "answer": "Ed Sheeran, ÷ (Divide)"
    },
    "q3": {
      "question": "the highest music viewed video on youtube 2017?",
      "options": [
      "See You Again - Wiz Khalifa featuring Charlie Puth",
      "Despacito - Luis Fonsi",
      "Shape of You - Ed Sheeran"
      ],
      "answer": "Despacito - Luis Fonsi"
    }
    }
  }
];

//   {
//       id: 1,
//       type: 'spider-dog',
//       displayName: 'Cooper',
//       powers: [1, 4],
//       img: 'cooper.jpg',
//       busy: false
//   },
//   {
//       id: 2,
//       type: 'flying-dogs',
//       displayName: 'Jack & Buddy',
//       powers: [2, 5],
//       img: 'jack_buddy.jpg',
//       busy: false
//   },
//   {
//       id: 3,
//       type: 'dark-light-side',
//       displayName: 'Max & Charlie',
//       powers: [3, 2],
//       img: 'max_charlie.jpg',
//       busy: false
//   },
//   {
//       id: 4,
//       type: 'captain-dog',
//       displayName: 'Rocky',
//       powers: [1, 5],
//       img: 'rocky.jpg',
//       busy: false
//   }
// ];

app.get('/area', (req, res) => {
  console.log('Returning area list');
  res.send(area);
});

app.post('/nodejs', (req, res) => {
  console.log('Returning nodejs list');
  res.send(nodejs);
});

app.post('/sport', (req, res) => {
  console.log('Returning sport list');
  res.send(sport);
});

app.post('/music', (req, res) => {
  console.log('Returning music list');
  res.send(music);
});

// app.post('/area/**', (req, res) => {
//   const heroId = parseInt(req.params[0]);
//   const foundHero = heroes.find(subject => subject.id === heroId);

//   if (foundHero) {
//       for (let attribute in foundHero) {
//           if (req.body[attribute]) {
//               foundHero[attribute] = req.body[attribute];
//               console.log(`Set ${attribute} to ${req.body[attribute]} in hero: ${heroId}`);
//           }
//       }
//       res.status(202).header({Location: `http://localhost:${port}/hero/${foundHero.id}`}).send(foundHero);
//   } else {
//       console.log(`Hero not found.`);
//       res.status(404).send();
//   }
// });

console.log(`Questions service listening on port ${port}`);
app.listen(port);