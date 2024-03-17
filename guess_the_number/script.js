let random = parseInt(Math.random() * 100 + 1);
// this is to generate number between 1 to 100 


// here i have taken some of the dom to manuplate 
const userinput = document.querySelector('#guessField');
const submit  = document.querySelector('#subt');
const prevguess  = document.querySelector('.guesses');
const result  = document.querySelector('.lastResult');
const loworhi  = document.querySelector('.lowOrHi');
const startover  = document.querySelector('.resultParas');

// this line is used to create element and that is p
const p = document.createElement('p')

// the preguess is to store the users guess in an array
let prevGuess = [];

// the numguesses is to set the number of attempt that the users have 
let numGuesses = 1;

//playgame is written to tell that the user can play the game or not
let playgame  = true;

// here we check that the users is able to play the game or not
if (playgame) {
    submit.addEventListener('click', function(e){
        //this line is taking the submit button as the listener 'click'
   
        e.preventDefault();
        //the line tells that the listener can be functioned anywhere so it written to stop that 
        
        const guess = parseInt(userinput.value);
        // the  line is taking the value from the users and making sure that it should be number or should be converted to number
        console.log(guess);
       
        validategame(guess)
        //here the if else statement checkes the user can play the game or not and now its worked has finished and now it has directed to the another function
    });
}

//the function is to check the validation of the game
function validategame(guess){
    if (isNaN(guess)) {
     alert(`please enter a valid number, ${guess}`);  
    } else if(guess < 1) {
        alert(`Please enter the valid number ${guess}`);
    } else if(guess > 100){
        alert(`please  enter the valid number ${guess}`);
    } else  { 
        prevGuess.push(guess);
        if (numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${random}`);
            endgame()
        } else{
            displayGuess(guess)
                checkguess(guess)
        }
    }    

}

function checkguess(guess){
    if(guess === random){
        displayMessage(`you guested right`);
        endgame()
    } else if( guess < random){
        displayMessage(`Number is too low`);
    }else if(guess > random){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userinput.value = '';
    prevguess.innerHTML = `${guess}`;
    numGuesses++;
    result.innerHTML = `${11 - numGuesses}`;

}

function displayMessage(message){
    loworhi.innerHTML = `<h2> ${message} </h2>`
}
