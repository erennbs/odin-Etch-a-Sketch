// =================================== Setting Grid ========================================
const squaresDiv = document.querySelector('.squares');
const squaresDivHeight = squaresDiv.clientHeight;

squaresDiv.addEventListener('mousedown', onContainerMouseDown);
squaresDiv.addEventListener('mouseup', onContainerMouseUp);

// ================================= Setting Color Inputs ==================================
const colorInputs = document.querySelectorAll('input[type="color"]');

colorInputs[0].addEventListener('change', (e) => {currentPenColor = e.target.value});

let currentPenColor = colorInputs[0].value;
let currentBackgroundColor = colorInputs[1].value; 

// ================================= Setting Clear Button ==================================
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

// ================================= Setting Pen and Eraser ================================
const penEraserButtons = document.querySelectorAll('.only-one');

let mode = 'pen';

penEraserButtons.forEach(button => button.addEventListener('click', onMouseClickPenEraserButton))

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let grid = document.createElement('div');

        grid.classList.add('grid');
        grid.style.width = `${squaresDivHeight/size}px`;
        grid.style.height = `${squaresDivHeight/size}px`;
        
        squaresDiv.appendChild(grid);
    }
}

function clearGrid() {
    let grids = squaresDiv.childNodes;
    currentBackgroundColor = colorInputs[1].value;
    if(mode === 'eraser') {
        currentPenColor = currentBackgroundColor;
    }

    grids.forEach(grid => {
        grid.style.backgroundColor = currentBackgroundColor;
    });
}

function onContainerMouseDown(e) {
    squaresDiv.addEventListener('mousemove', onMouseMoveOverContainer);
    e.target.style.backgroundColor = currentPenColor;
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
    grid.style.backgroundColor = currentPenColor;
}

function onMouseClickPenEraserButton(e) {
    mode = e.target.value;
    penEraserButtons.forEach(button => button.classList.remove('selected'));
    e.target.classList.add('selected');
    if(mode === 'pen') {
        currentPenColor = colorInputs[0].value;
    } else if(mode === 'eraser') {
        currentPenColor = currentBackgroundColor;
    }
}

createGrid(16, currentBackgroundColor);
