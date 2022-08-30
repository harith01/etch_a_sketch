
function createGrid(size){
    let container = document.querySelector('.container');
    // delete the previous boxes
    let boxes = container.querySelectorAll('div');
    boxes.forEach((box) => box.remove());
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++){
        let box = document.createElement('div');
        box.style.backgroundColor = 'white';
        box.style.border = '1px solid black';
        box.addEventListener('mouseover', changeColor)
        container.appendChild(box);
    }
}


function changeColor(){
    this.style.backgroundColor = 'black';
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let size = parseInt(prompt('Enter the size'));
    createGrid(size);
})

createGrid(16);