// const cells = document.getElementsByClassName('tab-button');

// for (let i = 0; i < cells.length; i++) {
//     let eachCell = cells[i];

//     eachCell.addEventListener('click', function() {
//         eachCell.classList.remove('orange');
//         this.classList.add('orange');
//     })
// }

 let numbCl = $('.tab-button').length;

// for (let i = 0; i < numbCl; i++) {
//     $('.tab-button').eq(i).on('click', function() {
//         tabWork(i);
//     })
    
// }

$('.list').on('click', function(e) {
    // for (let i = 0; i < numbCl; i++) {
    //     if (e.target == document.querySelectorAll('.tab-button')[i]) {
    //         tabWork(i);
    //     }
    // }

    tabWork(e.target.dataset.id)
})

function tabWork(numb) {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(numb).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(numb).addClass('show');
}