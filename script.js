const squaresDiv = document.querySelector('.squares');
const squaresDivHeight = squaresDiv.clientHeight;

squaresDiv.addEventListener('mousedown', onContainerMouseDown);
squaresDiv.addEventListener('mouseup', onContainerMouseUp);

function createGrid(size) {
    for (let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let grid = document.createElement('div');

            grid.classList.add('grid');
            grid.style.width = `${squaresDivHeight/size}px`;
            grid.style.height = `${squaresDivHeight/size}px`;
            
            squaresDiv.appendChild(grid);
        }
    }
}

function onContainerMouseDown(e) {
    squaresDiv.addEventListener('mousemove', onMouseMoveOverContainer);
    e.target.style.backgroundColor = 'black';
}

function onContainerMouseUp(e) {
    squaresDiv.removeEventListener('mousemove', onMouseMoveOverContainer);
}

function onMouseMoveOverContainer(e) {
    if (e.target === squaresDiv) {
        squaresDiv.removeEventListener('mousemove', onMouseMoveOverContainer);
        return;
    }

    let grid = e.target;
    grid.style.backgroundColor = 'black';
}

createGrid(16);
