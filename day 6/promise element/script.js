// console.log('start')

// setTimeout(() => {
   
//     console.log('TIMEOUT 1')},10000)

//  setTimeout(() => {
    
//     console.log('TIMEOUT 2')},0)
//  console.log('intermediate ');

// console.log('end');

// self genrated promise

// function createOrder(x , fn){
//     console.log(x);
//     //2 ms 4 ms 500ms
//     setTimeout(() => {
//         makePayment("link123");
   
    

// }
// function
// new promise

// const pr =new Promise((resolve, reject)=>{
//     //logic
//     if (true){
//         setTimeout(() => {
//         resolve();

// }, Math.random()*10000);

//     }
//     else {
//         reject();
//     }
// });
// console.log(pr);


// const pr =new Promise((resolve, reject)=>{
//         setTimeout(() => {resolve("done-123");},5000);
// });

// console.log(pr);
// pr.then((ans) => {
//     console.log(ans);
// });
        
// catch (err) on resject





// const pr =new Promise((resolve, reject)=>{
//     setTimeout(() => {reject("some order of out of stock");},0);
// });
// setTimeout(() => {console.log("first timeout....")},0);

// //console.log(pr);
// pr.then((ans) => {
// console.log(ans);
// }).catch((err) => {
// console.log(err);
// });
 
setTimeout(function abc() {
    console.log("i am the one");
},0);
const pr = new Promise((resolve, reject)=>{
    setTimeout(() => {resolve("done");},0);

});
pr.then(function b (ans) {
    console.log(ans);
});










