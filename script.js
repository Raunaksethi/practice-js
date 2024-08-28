

//ARRAYS.
let marks=[92,92,94,98,48];
console.log(marks);



//looping over array using / for loop.
let city =["delhi","pune","UP","mumbai","chenai","bihar"];

for(let idx=0; idx<city.length; idx++) {
  console.log(city[idx]);
}




//question: find average marks of entair class.

let mark = [85,97,44,37,76,60];
let sum= 0;

for (let val of mark)
{
  sum+=val;
}
let avg = sum /mark.length;
console.log
(`avg mark of the class = ${avg}`);




// prices of 5 item :- [250,645,300,900,50] all item have 10% off on them . Change the array to store the final price after offer.

//for off loop.

let items = [250,645,300,900,50];
let i=0;
for (let val of items){
 
  let offer = val / 10;
  items[i]=items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++

}




//for loop

for (let i=0 ; i<items.length; i++){
  let offer = items[i]/10;
  items[i] -= offer;
}
console.log(items);






//array Push(it use to add something in the end of array).

let foodItems = ["potato", "apple","litchi","tomato"];
//if we want to add something new in the foodItems in the end.
foodItems.push("chips");
console.log(foodItems);




//POP array it delete item.
let cars = ["lambo", "audi","BMW","supra"];
let deletedItem = cars.pop();
//if we want to delete items it only delete the last item.  
cars.pop("supra");
console.log(cars);
console.log("deleted" , deletedItem);




// "ToString" convert array in string:

let phones = ["iphone","samsung","xiomi","lava"];
console.log(phones.toString());



//Concat() : to join multiple arrays & return result .

let marvel=["thor","spiderman","ironman"];
let dc =["superman","batman"];
let superhero=["krish","flyingjatt"]
let heroes= marvel.concat(dc,superhero);
console.log(heroes)




//shift / unshift it use to add item in start just opposite to pop//


let brand =["gucci","lv","prada"]
let val = brand.shift();
console.log(brand);





//slice : it return a peice of array.

let youtubers =["technicalguruji","bb","samay","r2h","carry"]
console.log(youtubers.slice(1,3));

// splice : cahnge orignal array (add,remove,replace).

let arr = [1,2,3,4,5,6,7];
////arr.splice(2,2,101,102);////
//use to delete and add item.

//only adding item
////arr.splice(2,0,101);////


//only delete item
arr.splice(3,1,105);
console.log(arr);





//Function :- block of code that perform a specific task , it can be invoked whenever needed.
//we can make our own function.
//it reduce redundancy(repetation of code).

// function functionName(){
//do some work
//}

function myFunction(){
  console.log("welcome");
  console.log("hello");
}
myFunction();
myFunction();

function theFunction(msg){
  console.log(msg)
}
theFunction("hi there")

// function to create a multiplication of 2 no. :
//in this we have to do write multiply(3,4)in console.
 function multiply(x,y){
  console.log(x*y);
 }

 //this will directly execute the mathematical term in console:

 function  substraction(x,y){
  s= x - y;
  return s;
 }
 let value= substraction(8,4);
 console.log(value);

 //function parameter is like local variables of function and it has block scope of function(and it is use till the function block)

 //---------------------------------------------------------------------------------------------------------------//


 // Arrow functions : compact way of writing function


const arrowMul=(a,b)=>{
   console.log (a*b);
 }