// function test(){

//     console.log(arguments);
// }

// test(5, 7, "ogo");

// let dogs = ['Шарик', 'Бобик', 'Тузик', 'Полкан'];

// [sharik, bob] = dogs;

// console.log(sharik, bob);

// [bob, sharik] = [sharik, bob];
// console.log(sharik, bob);

// let car = {
//     weel: "19d",
//     acselerator: "100",
//     color: "red"
// }

// let {color: r, weel} = car;
// console.log(r, weel)


let limonad ={
    sirop: "Груша",
    value: "0.5",
    conservant: "фенил"
}

let svetLimonad ={
    sirop: "Груша",
    value: "0.5",
    conservant: "non"
}


let a = 5;
let b ;
b =a;
console.log(`a = ${a} b= ${b}`);

b = 1;
console.log(`a = ${a} b= ${b}`);

// limonad = svetLimonad;
// console.table(limonad);
// limonad.conservant = "фенил";
// console.log("new limonad");
// console.table(limonad)
// console.log("сетсский лимонад");
// console.table(svetLimonad);

// Object.assign(limonad, svetLimonad);
//  console.log("new limonad");
//  console.table(limonad)
//  console.log("сетсский лимонад");
//  console.table(svetLimonad);
 

//   limonad.conservant = "фенил";

//   console.log("new limonad");
//   console.table(limonad)
//   console.log("сетсский лимонад");
//   console.table(svetLimonad);

// const Dog = function(age, Dname, weight, poroda){
//     this.age = age;
//     this.Dname = Dname;
//     this.weight = weight;
//     this.poroda = poroda;
//     // this.speek = function(){
//     //     console.log("Гав Гав")
//     // }

// }

// Dog.prototype.speek = function(){
//     console.log("Гав Гав");
// }

// class Dog {
//      #age 
//      Dname
//      weight
//      poroda

//     constructor(age, Dname, weight, poroda){
//         this.#age = age;
//         this.Dname = Dname;
//         this.weight = weight;
//         this.poroda = poroda;
//     }

//     speek(){
//         console.log("Гав Гав");
//     }
// }

// let sharik = new Dog(2, "Шарик", 5, "Двортерьер");
// let bob = new Dog(3, "Бобик", 1, "Чейхуа");


// console.table(sharik)
// console.table(bob);
// sharik.speek();
// bob.speek();

//Сотрудник
class Staff{
    #userName;
    #age;
    constructor(uname, age){
        this.#userName = uname;
        this.#age = age;
    }

    getUname(){
        console.log(this.#userName);
    }
}


// должностное лицо
class Menager extends Staff{
    valueSale;
    constructor(uname, age, sale){
        super(uname, age);
        this.valueSale = sale;
    }
    resultSale(){
        console.log(this.valueSale)
    }
}



let semen = new Menager('Семен', 25, 10);

semen.getUname();


