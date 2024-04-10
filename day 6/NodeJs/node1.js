// const {mul , sum} = require('./module1');

// mul(2,4); 
// sum(2,3);

// const obj = require('./module1');

// obj.mul(2,4); 
// obj.sum(2,3);

var figlet = require("figlet");

figlet("Prashant   Srivastava", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

