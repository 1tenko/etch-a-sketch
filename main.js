const container = document.querySelector('.container');

let num = 16;

container.style.cssText = `grid-template-columns: repeat(${num},1fr); grid-template-rows: repeat(${num},1fr);`;


for (i=1; i<=num*num; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'gridItem');
    container.appendChild(square);
}

