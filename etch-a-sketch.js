const mainContainer = document.querySelector('.mainContainer');
const densityBtn = document.querySelector('.gridDensityBtn');
const randomColour = document.querySelector('.randomColour');
const gradientToBlack = document.querySelector('.gradient10');

// //Default grid layout is 16 x 16
for(let i = 0; i < 256; i++){
    //Create default grids can call it defualtCells
    const defaultCells = document.createElement('div');
    //Give div CSS class name
    defaultCells.classList.add('cell');
    //Append to main div
    mainContainer.appendChild(defaultCells);
    //Add EventListner to div element just created.
    defaultCells.addEventListener('mouseover', defaultCellColour);
    //
    function defaultCellColour () {
        defaultCells.classList.add('cellColourChange');
    }
}


//Listen for a click on the grid density button
densityBtn.addEventListener('click', changeGridDensity);




//Function to change the amount of squares in the gird
function changeGridDensity () {
    
    //Call function to erase children of mainContainer if mainContainer has children
    eraseChildren(mainContainer);
    //Get user input for squares per side on the grid
    let density = Number(prompt (`How many squares per side for the new grid?`));
    
    //Limit of 100 squares
    if (density > 100) {
        alert(`Please choose a number below 100`)
    }
    //Put an HTML inline style for the mainContainer div - takes a string so back ticks work! woot.
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${density}, 2fr); grid-template-rows: repeat(${density}, 2fr);`);
    
    //Call createGridCells function with prompt value
    createGridCells(density);
    
    
}

//Create grid
function createGridCells (densityValue){
    
   
    
    for(let i = 0; i < densityValue * densityValue; i++){
        
        //Create div element and call it cell
        const cell = document.createElement('div');
        
        //Give the div a class named cell.
        cell.classList.add('cell');

        //Append the cell div to the mainContainer div
        mainContainer.appendChild(cell);

        //Apply a mouseover event listener to the cell div with a callback function named cellColour
        cell.addEventListener('mouseover', cellColour);

        
        //Create a function to add another class name to the cell div. This new class is in the CSS style with a different background color to the default.
        function cellColour () {
            cell.classList.add( 'cellColourChange' );
        } 

        //Choose random colour mode
        randomColour.addEventListener('click', randomColMode);

        //Create Colour Randomiser
        function randomColMode () {
            cell.addEventListener('mouseover', randomColouriser)
        };

        function randoNo (number) {
            return Math.floor(Math.random() * (number + 1));
        };

        
        function randomColouriser(e){
            const randoCol = `rgb(${randoNo(255)}, ${randoNo(255)}, ${randoNo(255)})`;
            e.target.style.backgroundColor = randoCol;
            console.log(e)
        };

        //Gradient Selection 
        gradientToBlack.addEventListener('click', gradientMode);

        function gradientMode () {
            cell.addEventListener('mouseover', gradient);
        }

        function gradient (e) {
            const randoColGrad = `rgb(${randoNo(255 / 10)}, ${randoNo(255 / 10)}, ${randoNo(255 / 10)})`
            e.target.style.backgroundColor = randoColGrad;
            console.log(e);
        }
        
    };
    
}

//If the mainContainer div has a child is true then remove child from parent till statement is no longer true.
function eraseChildren (parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
    

//Create Colour Randomiser
function randomColouriser () {
    
    cell.setAttribute('class', 'randomColours')
};

//Find out the difference between the random number generated and 0.
//Divide that answer by 10 first and subtract that amount from the initial random number. 
//Our aim is to get to 0 in 10 mouse overs.
//Repeat this step for the next mouseover event but divide by 20. Third time by 30 and so on.
//Will have to be done on  all rgb chanels.
//Where does the loop have to go through?
