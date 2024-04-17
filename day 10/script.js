// const express = require('express');
// const fs = require('fs');
// const app = express();
// const fsPromises = require('fs/promises');

// // app.get('/api/products' , (req, res)=>{

// //     const data = fs.readFileSync('./data.json', 'utf8');
// //     const arr = JSON.parse(data).products;

// //     res.json({
// //         status: 'success',
// //         results: arr.length,
// //         data:{
// //             products: arr
// //         }
// //     });

// // });

// // app.listen(1400);


// //! use get post to save data om dbms from frontend server

// app.use(express.json());
// app.post('/api/products',async (req, res)=>{
//     const data =req.body;
    

//     const db = await fsPromises.readFile("./data.json", "utf8");
//     const arr = JSON.parse(db);
//     const len = arr.length;
//     const newProduct = data;
  
        
//         if (len==0){
//         newProduct.id = 1;
//         }

//         else{
//             newProduct.id = (arr[len-1].id)+1;
//         }
//         arr.push(newProduct);
//        fsPromises.writeFile("./data.json", JSON.stringify(arr));

    
//         res.json({
//             status:'success',
//             results: 1,
//             data:{
//                 newProduct: newProduct,
//             }
//         })


//         app.put('/api/products/:id', (req, res) =>{
//             console.log(req);
//             res.send("work in progress");
//             const data = req.body;
//             console.log(data);

//         })
// });


// app.delete('/api/products/:id', (req, res) =>{
//     const reqId= parseInt(req.params.id);
//     const arr =JSON.parse( await )
// app.listen(1400);



// const express = require('express');
// // const fs = require("fs");
// const fsPromises = require("fs/promises");
// const productsController= require('./controllers/productsController.js');  
//  const userController = require('./controllers/userController.js');



//  app.use(express.json());

//  const app = express();


//  app.use((req, res, next) =>{

//  });

//  app.route('/products'){
//      app.get('/api/products', productsController.getAllProducts );
//      app.post('/api/products', productsController.getAllProducts);
//      app.put('/api/products/:id', productsController.updateProduct);
//      app.delete('/api/products/:id', productsController.deleteProduct);
//  }


//  app.route('/api/products')
//  .get()
//  .post();

//  app.route('/api/products/:id')
//  .put()
//  .delete();

//  app.route('/api/users')
//  .get()
//  .post()
//  .put()
//  .delete();
 






// const app = express();



// app.get('/api/products', productsController.getAllProducts );

// app.post('/api/products', productsController.getAllProducts);

// app.put('/api/products/:id', productsController.updateProduct);

// app.delete('/api/products/:id', productsController.deleteProduct);


// app.use((req , res, next)=>{
//     const time = new Date().toLocaleString();
//     fsPromises.appendFile('./log.txt', req.url+'\t'+time+'\n');
    
//     next();
// });

// app.get('/api/products', async(req, res)=>{
//     // const data = fs.readFileSync('./data.json', "utf8");
//     const data = await fsPromises.readFile('./data.json', "utf8");
//     const arr = JSON.parse(data);
//     res.status(200);
//     res.json(
//         {
//             status: 'success',
//             results: arr.length,
//             data:{
//                 products: arr
//             }
//         }
//     )
// });

// app.post('/api/products', async (req, res)=>{
//     const data = req.body;
//     if(!data.price || !data.title){
//         res.json({
//             status: 'fail',
//             message: 'Title or price must be provided',
//         });
//     }
//     else{
//             const db = await fsPromises.readFile("./data.json", "utf8");
//             const arr = JSON.parse(db);
//             const len = arr.length;
//             const newProduct = data;
//             if(len==0){
//                 newProduct.id = 1;
//             }
//             else{
//                 newProduct.id = (arr[len-1].id)+1;
//             }
//             arr.push(newProduct);
//             res.status(201);
//             fsPromises.writeFile("./data.json", JSON.stringify(arr));
        
//             res.json({
//                 status: 'success',
//                 results: 1,
//                 data:{
//                     newProduct: newProduct,
//                 }
//             })
//     }
// });

// app.put('/api/products/:id', async (req, res)=>{
//     const arr = JSON.parse( await fsPromises.readFile("./data.json", "utf8"));
//     const reqId = parseInt(req.params.id);
//     const data = req.body;
//     data.id = reqId;
//     const newArr = arr.map((elem)=>{
//         if(elem.id==reqId)return data;
//         else return elem;
//     });
//     res.status(200);
//     fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//     res.json({
//         status: 'success',
//         results: 1,
//         data:{
//             newProduct: data,
//         }
//     })
// });

// app.delete('/api/products/:id', async(req, res)=>{
//     const reqId = parseInt(req.params.id);
//     const arr = JSON.parse( await fsPromises.readFile( "./data.json", "utf8"));
//     const newArr = arr.filter((elem)=>{
//         if(elem.id === reqId)return false;
//         else return true;
//     });
//     fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//     // res.status(204);
//     res.json({
//         status: 'success',
//         data: {
//             newProduct: null,
//         }
//     })
// });


// app.patch('/api/products/:Id', async (req, res) => {
//     const reqId = parseInt(req.params.id);
//     const arr = JSON.parse( await fsPromises.readFile( "./data.json", "utf8"));
//     const newArr = arr.map((elem)=>{
//         if(elem.id === reqId)return {...elem,...req.body};
//         else return elem;

//     })
//     });
//     fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//     res.status(200);
//     res.json({
//         status: 'success',
//         results: 1,
//         data:{
//             newProduct: newArr,
//         }
//     });




// app.listen(1400);

let express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");
let app = express();
let productController = require("./controller/productsController");
let usersController = require("./controller/usersControllers");
let port = 4000 || process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log("middleware called : ");
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  next();
});

app
  .route("/api/product")
  .get(productController.getAllProduct)
  .post(productController.addProduct);

// app.get("/api/products", productController.getAllProduct);

// app.post("/api/products", productController.addProduct);

app
  .route("./api/product/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)
  .patch(productController.patchProduct);

// app.put("/api/products/:id", productController.updateProduct);

// app.delete("/api/products/:id", productController.deleteProduct);

// app.patch("/api/products/:id", productController.patchProduct);

app
  .route("/api/users")
  .get(usersController.getUser)
  .post(usersController.postUser);

app
  .route("/api/users/:id")
  .delete(usersController.deleteUser)
  .put(usersController.changeUser)
  .patch(usersController.updateUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});