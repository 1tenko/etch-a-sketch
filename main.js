const container = document.querySelector('.container');
const button = document.querySelector('button');
const size = 16;


function createGrid(num) {
    container.innerHTML = '';
    container.style.cssText = `grid-template-columns: repeat(${num},1fr); grid-template-rows: repeat(${num},1fr);`;

    for (i=1; i<=num*num; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'gridItem');
    container.appendChild(square);
    changeTileColor();
    }
}
createGrid(size);




function changeTileColor() {
    const gridItems = document.querySelectorAll('.gridItem');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.cssText = 'background-color: black;';
            console.log('change')
        })
    });
}


button.addEventListener('click', () => {
    let newNum = prompt('Please select new grid size (e.g. entered value of 24 = 24x24 grid: )');
    console.log(newNum);
    createGrid(newNum);
})