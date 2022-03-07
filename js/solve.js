
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