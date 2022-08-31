// function game(i) {
//     if ( i % 9 == 0 ) {
//         console.log('박수x2');
//     } else if ( i % 3 == 0 ) {
//         console.log('박수');
//     } else {
//         console.log('통과');
//     }

// }

function exam(gae, min) {
    const g = gae;
    const m =  min;

    if (( g + m ) >= 120 && g > 40 && m > 40) {
        console.log('합격');
    } else {
        console.log('불합격');
    }
}