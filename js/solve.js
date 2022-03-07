
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
console.log(checkIndexOf);
console.log(checkIndex);
console.log(length)