// const sum = function (a,b){
//     console.log(a+b);
// }
// const mul = function (a,b){
//     console.log(a*b);
// }


// module.exports = {
//      sum,
//      mul,
// };
// var figlet = require("figlet");

// figlet("Prashant   Srivastava", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });
//   fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// console.log('end');


// async awit 


console.log("start");
async function getApi(){
    console.log('api calling...');
    const pr = await fetch('https://dummyjson.com/products/1');
    console.log('making json...');
    const data = await pr.json();
    console.log(data);
    console.log('::fetched data::');

}
getApi();
console.log("end");