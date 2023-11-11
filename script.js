let lKg = document.getElementById('kg');
let lfnt = document.getElementById('fnt');
let lRes = document.getElementById('res');
console.log(lKg);
function convertKgToFunt(){
    debugger;
    let kg = lKg.value; // получаеим значение из поля
    let fnt = lfnt.value; // получаеим значение из поля
    const a = 0.454;
    let result = kg / a; // получился результат
    console.log('результа в фунтах ' + result + ' килограммов');
    lRes.innerText = result;
    
}

