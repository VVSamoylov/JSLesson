//let condition = false;
//let userName = prompt('Введите свое имя!!');
//console.log(userName);
// if(userName == "Путин"){
//     alert('Ты внезапно стал Путиным!!')
// }else{
//     alert("Ты старина Байден ты забылся!!")
// }

// switch(userName){
//     case 'Путин':
//         alert('Ты внезапно стал Путиным!!');
//         break;
//     case  'Байден':
//         alert("Ты старина Байден ты забылся!!");
//         break;
//     case 'Шарик' :
//         alert("Ты Шарик убери лапу с клавы!");
//     case 'Барсик':
//         alert("Ты Барсик");
//         break;
//     default :
//         alert("Ты какое то непонятное чудо!! Определись!!");


        
// }


// for(let i = 0; i < 10; i++){
//     //debugger
//     console.log(i * 5);
// }

// let userName = prompt('Введите свое имя!!');
// while(userName != 'q'){
//     console.log(userName);
//     userName = prompt("Для того что бы выйти введите q");
//     alert('Псмотри на меня!');
//     if(userName == 2){
//         alert("Продолжаем!! Введено 2");
//         continue;
//     }

//     alert("не отображается если dog");
//     if(userName == 1){
//         alert('Вывавливаемся из цикла!! Все кончено гипс снимают!!');
//         break;
//     }
    
    
// }

// let ar = ['шарик', 'бобик', 'барсик', 'музик', 'муська'];
// console.log(ar.length);
// ar.push('Иван Иваныч');
// console.log(ar.length);
// console.table(ar);

let manySumm = document.getElementById('many').value;
let manySelect = document.getElementById('checkMany').value;
let outResult = document.getElementById('out');
let arr = [82, 12, 97, 0.6]
function converter(){
    let res = manySumm * arr[manySelect -1];
    outResult.innerText = `Стоимость по курсу ${res}`;
}

