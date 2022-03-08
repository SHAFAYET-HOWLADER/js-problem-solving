
//problem : 1 <-------ternary operator------->
const age = 18;
const loggedIn = 5;
const check = (age >= 20) ? "you are adult" : age ? "true" : "false";
const access = loggedIn >= 5;
console.log(access);
console.log(check);

//problem : 2 <-------&& operator------->
const years = 25;
const savingMoney = 50000;
const hasFlatt = true;

if(years >= 45 && savingMoney >= 50000 && hasFlatt === true){
   console.log("you are so adult, please marry her");
}
else{
  console.log("please fill above all requirement to marry");
}

//problem : 3 <------- || operator------->
if(years >= 45 || savingMoney >= 60000 || hasFlatt === true){
    console.log("you are so adult, please marry her");
 }
 else{
   console.log("please fill above all requirement to marry");
 }

//problem : 4 <------- multiple condition ------->
const characterOfLover1 =100;
const characterOfLover2 = 80;
const characterOfLover3 = 42;
if(characterOfLover1 > characterOfLover2 && characterOfLover1 > characterOfLover3){
   console.log("akhi love me enough");
}
else if(characterOfLover2 > characterOfLover1 || characterOfLover2 > characterOfLover3){
   console.log("munni does not love me pure enough");
}
else{
    console.log("behind the seen sabiha loved me more than my expectation");
}

//problem : 5 <------- basic array  ------->
const numbers  = [5, 2, 6, 3,4, 9, 0, 7, 10, 12, 15];
numbers.unshift(4);
console.log(numbers);
const length = numbers.length;
const checkIndex = numbers[10];
const checkIndexOf = numbers.indexOf(15);
const find = numbers.includes(15);
// console.log(find);
// console.log(checkIndexOf);
// console.log(checkIndex);
// console.log(length);

//problem : 6 <------- while loop  ------->
const sum = [95, 12, 36, 45, 54, 25, 78, 100];
let index = 0;
while(index < sum.length){
  console.log(sum[index], index)
  index++;
}

//problem : 7 <------- for loop  ------->
const friends = ["alamin", "asad", "sayeed", "mohiuddin", "jihad", "akhi"];
for(let i = 0; i < friends.length; i++){
 console.log(friends[i], i);
}
//using for of loop
for(const friend of friends){
    console.log(friend);
}

//problem : 8 <------- regular function using factorials------->
function factorials(numbers){
  let factorial = 1;
  for(let i = 1; i <= numbers; i++){
    factorial = factorial * i ;
  }
  return factorial;
}
const result = factorials(4);
console.log(result);

//problem : 9 <-------general object declaration and  access property------->
const car = {
    name : "volvo",
    color : "red",
    price : 5000000,
    brand : "italian",
    speed: "45km",
    isOriginal : true,
    speedQuality : function(name){
      this.speed =  name +` ${this.name} ` + "at" + " " + this.speed +","+`${Object.values(this.drivingSpeed)}`;
      return  this.speed;
    },
    serialNumber : [10, 20, 30, 40, 50, 60, 70],
    drivingSpeed : {
      first : "20km",
      second : "30km",
      third : "40km",
      four : "50km",
    },
    drivingMethod : function(){
        console.log(this.name, "has driving");
    }
}
console.log(car.speedQuality("safayet is driving"));
console.log(car.drivingMethod());

//problem : 10 <-------general object declaration and  access property through template string------->
const girls = {
  details : {
    name : "akhi",
    thana : "kotalipara",
    district : "gopalganj",
    profession: "student",
    age: 16,
    color: "white",
    fallInLove : true,
    sheLovesMe : true
  }
}

const connectToGirls =`Name:${girls.details.name} Thana:${girls.details.thana} 
District:${girls.details.district} Profession:${girls.details.profession} Age:${girls.details.age} Color:${girls.details.color} FallInLove:${girls.details.fallInLove} SheLovesMe :${girls.details.sheLovesMe}`
console.log(connectToGirls);

//problem : 11 <-------ES6 spread operator------->
const digit = [10, 12, 15, 14,18, 20, 30];
const split = [...digit, + 40];
split.pop();
const add = split.filter((currentValue, index, arr) =>{

})

//problem : 12 <-------empty arrow  fn------->
const num1 = ()=> 9;
console.log(num1())

//problem : 13 <-------one parameter arrow  fn------->
const doubleNum = (value) => value*12;
console.log(doubleNum(12));

//problem : 14 <-------two parameter arrow  fn------->
const addition = (sum1, sum2) => ( sum1 + sum2) / 4;
console.log(addition(10, 10));

//problem : 15 <-------two parameter arrow  fn------->
const multiply = (digit1, digit2)=>{
  const add1 = digit1 + 5;
  const add2 = digit2 + 5;
  const multi = add1 * add2;
  return multi;
}
console.log(multiply(5, 5));

//problem : 16 <-------two parameter arrow  fn------->
const shop = {
   name : "loverStore",
   location : "dhaka",
   products : ["rice", "RC", "sugar", "banana", "coconut", "salt"],
   dailyProfit : 2000,
   monthlySalesReport : {
     dayOne : 9000,
     dayTwo : 12000,
     dayThree : 7000,
     dayFour : 1000,
   },
}

//destructuring array of an object
const [,liquid] = shop.products;
const balance = liquid;
console.log(balance);

//destructuring object
const {name} = shop;
console.log(name);

//problem : 17 <-------array destructuring------->
const math = [10, 20, 41, 12, 23, 25];
const [one, two,  ...three] = math;
console.log(three)

//problem : 18 <-------default function parameter------->
const myFunction = (calculate = 20) =>calculate + 20;
console.log(myFunction());

//problem : 20 <-------optional chaining------->

const 