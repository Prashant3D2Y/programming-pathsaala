function sum (a,b, fun){
    const resu = a+b;
    fun(resu);

}
function print (x){
    console.log( x);

}
sum(3,4, print);