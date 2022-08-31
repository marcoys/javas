//Q1

let age = 34;
const local = 'sungnam';

//Q2
var name = 'park';
var id = 0;

function showName() {
    var name = 'kim';
    var id = 1;
    console.log(name);
}

showName();
console.log(id);

//Q3
function bank() {
    var budget = 60000;
    var fBudget = 0;


    if (budget < 50000) {
        fBudget = budget * 1.15**2
    } else {
        fBudget = budget * 1.20**2
    }

    console.log(fBudget);
}

bank();

//04 
function coffeeR() {
    var first = 360;
    let rsec = first * 2/3
    let rthrd = rsec * 2/3
    var total = 0;

    total = first + rsec + rthrd;

    console.log(total);
}

coffeeR();

