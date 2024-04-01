// const { readFile, writeFile } = require("./filehelper");
// const http = require('http');
// const https = require('https');

//it use full for startup the server and read the file
// const data = fs.readFileSync('file.txt', 'utf8');

// fs.readFile( 'file.txt', 'utf8', (err, data) => {

//     //false senarios False,Undefined,Null

//     if (err) throw err;
//     console.log(data);

// });

// create a promise

// readFile('file.txt').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// async function readData() {
//   try {
//     const data = await readFile("file.txt");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function writeData() {
//   try {
//    await writeFile("file.txt", "Hello World");

//   } catch (error) {
//     console.log(error);
//   }
// }

// writeData();
// readData();

// http.createServer((req,res)=>{

//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("<h1>Hello World</h1>");
//     res.end();

// }).listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });

// https.get('https://jsonplaceholder.typicode.com/posts',(res)=>{

//     let data = '';

//     res.on('data',(chunk)=>{
//         data += chunk;
//     });

//     res.on('end',()=>{

//         const jsonData = JSON.parse(data);
//         console.log(jsonData);
//     });

// }).on('error',(err)=>{
//     console.log(err);
// });

// const myPromis=new Promise((resolve,rejects)=>{

// })

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Do laundry", done: true },
];

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.get("/api/user", (req, res) => {
  const users = [
    {
      id: 1,
      name: "pakayada",
    },
    {
      id: 2,
      name: "sachin",
    },
  ];

  res.send(users);
});

app.post("/api/user", (req, res) => {
  const user = {
    id: 3,
    name: req.body.name,
  };

  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
