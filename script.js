
// const f = sum;
// f(5, 6);
// const d = (c, u)=>{  // ()=> a != b
//     let res  = c * u;
//     console.log(` результат умножения ${res} `);
// }

// d(5, 20);
// let c = "глобальная переменная";

// function sum(a, b){
//     let c = a +b;
//     console.log(` Область видимости функции ${c}`);
//     if(c > 12){

//         let c = "Область блока";
//     }

//     console.log(` Выход из блока значение ${c}`);
//     return c;
// }


// sum(5, 7);
// console.log(c);




// let polkan = {
//     poroda : 'алабай',
//     speak : function() {
//         console.log(`Gav Gav  ${this.age}`)
//     },
//     age: 100,
    
// }

// //console.log(polkan);

// polkan.speak();



// let ar = [2,7,4,9,12,33];
// const flt = (a) => a > 5;
// let f = ar.filter(flt);
// console.log(f);


	
let users =[	
{id:	1,
uname:	"Leanne Graham",
username:	"Bret",
email:	"Sincere@april.biz",
age: 25,
address: {	
street:	"Маршала Жукова",
suite:	"Apt. 556",
city:	"Gwenborough",
zipcode:	"92998-3874"}
},
{
    id:	2,
uname:	"Ervin Howell",
username:	"Antonette",
age: 25,
email:	"Shanna@melissa.tv",
address:{	
street:	"Дунаевского",
suite:	"Suite 879",
city:	"Wisokyburgh",
zipcode:	"90566-7771"}
},
{
    id:	3,
uname:	"Clementine Bauch",
username:	"Samantha",
age: 12,
email:	"Nathan@yesenia.net",
address:{	
street:	"Douglas Extension",
suite:	"Suite 847",
city:	"McKenziehaven",
zipcode:	"59590-4157",
}}

]


// найти пользователей с возрастом 25 лет и вывети
 let res1 = users.filter(a => a.age == 25);
 console.table(res1);

// из массива пользователей создать массив email
let res2 = users.map(a => a.email);
console.table(res2);

// Найти пользователей у который в username нет бувы а
let res3 = users.filter(n => {
    if(n.username.indexOf('a') == -1 &&  n.username.indexOf('A')== -1){
            return  true;
    }
    return false;
}
 );
console.table(res3);


// из массива пользователей создать массив street
let res4 = users.map(a => {
   let d = {
    userName: '',
    city: "",
   } 
   d.userName = a.username; 
   d.city = a.address.street;
   return d;
}
    );
console.table(res4);