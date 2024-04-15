// const fs = require('node:fs');

// const data =fs.readFileSync('./myRead.txt');

// console.log(data.toString());


// const fs = require('node:fs');

// const data =fs.readFileSync('./myRead.txt',{encoding: 'utf8' }); 

// console.log(data);

// //! buffer is global object

// const b = new Buffer.from('ABCDEFGH');

// console.log(b.toString());
// b.write('other');
// console.log(b.toString());

// const fs = require('fs');
// fs.writeFileSync('./log.txt', "10th April 2024: Day 7");



// const fs = require('node:fs');
// console.log("start");
// const data =fs.readFileSync('./myRead.txt',{encoding: 'utf8' }); 

// console.log(data);
// console.log("end");

// ! Promises in file system

// const fsPromises = require('fs/promises');
// console.log("start");

// const pr = fsPromises.readFile('./myRead.txt',{encoding: 'utf8' });
// pr.then((res)=>{
//     console.log(res);
// });
// console.log("end");

//! Call back in file system

// const fs= require('fs');

// fs.readFile('./myRead.txt',{encoding: 'utf8'}, (err, data)=>{
//     console.log(data);
// });

// ! server take request
// https//localhost:1400
// const http = require('http');

// const app =http.createServer((req, res)=>{
//     console.log("Recieved request!")


// });
// app.listen(1400);

// const http = require('http');

// const app =http.createServer((req, res)=>{
//     console.log("Recieved request!")
//     res.end("Recieved request!" );

// });
// app.listen(1400);

// const http = require('http');

// const app =http.createServer((req, res)=>{
//     console.log("Recieved request!")
//     console.log(req.url);
//     res.writeHead(200,{

//         'content-type': 'text/html',
//     })
//     res.end('<h2>hello</h2> <br><h1>hi!</h1');
    

// });
// app.listen(1400, ()=>{
//     console.log("Started Server is running on port 1400");

// });







//! min-Project



// const http = require('http');


// let htmlTemplate = `
// <!DOCTYPE HTML>
// <html>
//     <head>

//     </head>
//     <body>
//         <h1>_PRODUCT_CARDS_</h1>
//     </body>
// </html>
// `
// let cardTemplate = `
// <div class='product-cards'>
// <h4>_Title_</h4>
// <p>_Info_</p>
// </div>
// `
// //let page = htmlTemplate.replace('_PRODUCT_CARDS_',cardTemplate);
// let page = cardTemplate.replace('_Info_','<h1>Samsung Galaxy s22</h1>')
// .replace('_Title_','<h1>InFo</h1>');



// //const page = '<h1>Welcome to</h1>';
// const app =http.createServer((req, res)=>{
//     console.log("Recieved request!")
//     console.log(req.url);
//     res.writeHead(200,{'content-type': 'text/html',
//     });
//     res.end(page);
    

// });
// app.listen(1400, ()=>{
//     console.log("Started Server is running on port 1400");

// });
const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf8");
const htmlTemplate = fs.readFileSync("./template/page.html", {
  encoding: "utf8",
});
const cardTemplate = fs.readFileSync("./template/card.html", "utf8");

const products = JSON.parse(data).products;

const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("TITLE", elem.title);
  newCard = newCard.replace("IMG", elem.thumbnail);
  newCard = newCard.replace("INFO", elem.description);
  newCard = newCard.replace("PRICE", elem.price);

  return newCard;
});

const allCardsString = allCards.join(" ");
const page = htmlTemplate.replace("PRODUCTS__CARDS", allCardsString);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(page);
});

server.listen(1400, () => {
  console.log("...............Server Started!.....................");
});