const teenAge = 18;
const oldAge = 65;
const scontoTeen = 20;
const scontoOld = 40;
const priceKm = 0.21;
let scontoRealTeen = scontoTeen / 100;
let scontoRealOld = scontoOld / 100;
let userAge;
let userKm; 
let price;
let finalPrice;
let zHTML = document.getElementById('stampa');

userAge = parseInt(prompt('inserisci quanti anni hai'));
userKm = parseInt(prompt('inserisci quanti km devi fare'));

if(!isNaN(userAge) && !isNaN(userKm)){
    price = userKm * priceKm;
    if(userAge<teenAge){
        scontoRealTeen = scontoRealTeen * price;
        finalPrice = price - scontoRealTeen;
    }
    else if(userAge>oldAge){
        scontoRealOld = scontoRealOld * price;
        finalPrice = price - scontoRealOld;
    }
    else{
        finalPrice= price;
    }
    finalPrice.toFixed(2);
    zHTML.innerHTML = `il prezzo e ${finalPrice}`;
}
else{
    zHTML.innerHTML = `il prezzo non e valido perche hai inserito male i numeri`;
}

