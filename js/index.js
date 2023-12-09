// for ( var i=0  ; i<10  ;  i++ ){
// console.log("hello");
// }



// ==========================

// var cartona = "" ;

// for ( var i=1997  ; i <= 2010 ;  i++ ){
//     cartona += "<option>" + i +"</option>>";
//     }
//     document.getElementById("demo").innerHTML = cartona ;
    
// ==========================
// any function mean re-used for code
// function without parameters
// 1st part for declaretion

// function sum() {
//     var num1 = 10;
//     var num2 = 20;
//     var result = num1 + num2
//     console.log(result)
// }
// 2nd part for call or invoke
// sum();


// ==========================


// function with parameters
// 1st part for declaretion

// function sum( x , y ) {
//     var num1 = x;
//     var num2 = y;
//     var result = num1 + num2;
//     console.log(result);
// }
// 2nd part for call or invoke
// sum(20,50);



// ==========================

// function getAvg( number1 , number2 ) {
//     var num1 = number1;
//     var num2 = number2;
//     var result = (num1 + num2) / 2 ;
//     console.log(result)
// }
// 2nd part for call or invoke
// getAvg(20,50);
// getAvg(10,50);

// ==========================

// function calcPrice( price , profit , taxes){
//     var result = price + profit ;
//     var finalResult = result * taxes ;
//     console.log(finalResult);
// }

// calcPrice(100 , 50 , 5);
// calcPrice(500 , 20 , 5);


// ==========================

// sample for return statment


// function calcPrice( price , profit , taxes){
//     var result = price + profit ;
//     var finalResult = result * taxes ;
//     return finalResult;
// }

// var x =  calcPrice(20 , 10 , 5);
// console.log (x);


// ==========================

// using output from 1 function inside other function

// function sum( number1 , number2  ) {
//     var num1 = number1 ;
//     var num2 = number2 ;
//     var result = num1 + num2;
//     return result;
// }

// var finalSum = sum(10,80) ;
// function getAvg(x){
//     var result = x/2;
//     console.log(result);


// }
// getAvg(finalSum);

// ==========================
// sample for expeation func

// var sayHello = function(){
//     console.log("hello");
// }

// sayHello();




// ==========================

// self invoked function (IIFE)

// (function(){
//     console.log("hello");

// })()

// ==========================

// object sample

// var product = {
//     name: "toshiba",
//     price:300 ,
//     onSale:false,
// };
// console.log(product);
// console.log(product.price);
// console.log(product["price"]);

// ==========================

// object inside object

// var person = {
//     name: "ahmed",
//     age: 30,
//     isMarried: true,
//     gender: "male",
//     wife:{
//         name: "aya",
//         age: 22,
//         gender: "female",
//         son:{
//             name: "ziad",
//             age: 3,
//             gender: "male",
    

//         }
//     }
// }

// console.log(person.wife.son.age)

// ==========================

// object may be contain proberties and function

// var person = {
//     name: "ahmed",
//     age: 30,
//     isMarried: true,
//     work:function(){
//         console.log("wooooork");
//     },
//     eat:function(){
//         console.log("eaaaat");
//     },
// }
// person.work();
// person.eat();


// ==========================

// array is a list of iems

// var friends = ["ahme" , "ali" , "amr" , "osama" , "bahnsy"];
// var colos = ["red" , "black" , "yellow" , "brown"];

// ==========================


// var friends = ["ahmed" , "ali" , "amr" , "osama" , "bahnsy"];
// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length)
// ==========================

// Array with for loop

// var friends = ["ahmed" , "ali" , "amr" , "osama" , "bahnsy" , "hambozo"];

// for(var i=0 ; i < (friends.length) ; i++){
//     console.log(i)
// }

// ==========================

// array contain objects 

var productList = [
    {name:"toshiba" , price: 3000 , onSale:true },
    {name:"LG" , price: 2000 , onSale:false },
    {name:"sharp" , price: 4000 , onSale:true },
]
for(var i =0 ; i < productList.length ; i++ ){
    console.log(productList);
    console.log(productList[2]);
    console.log(productList[2].name);
    console.log(productList.name);
    console.log(productList[i].name);
}

// ==========================








// ==========================


    