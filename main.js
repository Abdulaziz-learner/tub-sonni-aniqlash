// let num = Number(prompt('Sonni kiriting'));
// let amount = 0;

// for(let i = 1; i <= num / 2; i++){
//     if(num % i == 0){
//         amount++;
//     }
// }

// if(amount > 1) {
//     alert('Bu son tub emas');
// } 
// else {
//     alert('Bu son tub');
// }

let num = Number(prompt('sonni kiriting'));
var bolinganlari = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        bolinganlari++;
    }
}

if(bolinganlari <= 2 ) {
    alert('Bu son tub');
} else {
    alert('Bu son tub emas');
}
