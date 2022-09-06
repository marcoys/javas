const cells = document.getElementsByClassName('tab-button');

for (let i = 0; i < cells.length; i++) {
    let eachCell = cells[i];

    eachCell.addEventListener('click', function() {
        eachCell.classList.remove('orange');
        this.classList.add('orange');
    })
}