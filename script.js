const squaresDiv = document.querySelector('.squares');
const squaresDivHeight = squaresDiv.clientHeight;

squaresDiv.addEventListener('mousedown', onContainerMouseDown);
squaresDiv.addEventListener('mouseup', onContainerMouseUp);

// ================================= Setting Color Inputs ===================================
const colorInputs = document.querySelectorAll('input[type="color"]');

colorInputs[0].addEventListener('change', (e) => {currentPenColor = e.target.value})
colorInputs[1].addEventListener('change', (e) => {currentBackgroundColor = e.target.value})

let currentPenColor = colorInputs[0].value;
let currentBackgroundColor = colorInputs[1].value; 
// ========================================================================================== 


function createGrid(size, color) {
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

createGrid(16, currentBackgroundColor);
