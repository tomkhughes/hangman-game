// VARIABLES
// ==========================================================================
var wordBank = ['paul', 'george', 'lennon', 'ringo']
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underscores = [];
var userGuesses = [];
var randWord;
var winCounter = 0;
var lossCounter= 0;


// FUNCTIONS
// ==============================================================================

function startGame(){
  //Random Word from wordBank array 
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log('the word is ' + randWord)
  for(var i = 0; i < randWord.length; i++) {
    // console.log(i); to see how many times its looping through
      underscores.push('_');
  }
    //create underscores with no , add .join(' ')
  document.getElementById('word-blanks').textContent = underscores.join(' ');

  //Reset 
  

  //HTML
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('wrong-guesses').textContent = wrongLetter;

}

function winLose() {
  if(winCounter === randWord.length) {
    alert('winner');
    winCounter++;
    document.getElementById('win-counter').innerHTML = winCounter;

     

  }
  if(guessesLeft === 0) {
    alert('loser');
    lossCounter++;
    document.getElementById('lossCounter').innerHTML = lossCounter;

  }

}
//User Guesses 
document.onkeyup = function(event) {
  userGuesses = event.key;
  console.log(userGuesses + ' this key is pressed');
//checking if the letter exists inside of the word 
  if(randWord.indexOf(userGuesses) > -1) {
   //if the randWord is ringo, 
   //first it is looking at 0 which is letter r
   //if user guesses n, it will loop through and first say no 
   //for index 0 which is r   
   //say no for index 1 which is i
   //say yes for 2 which is n. bingo
   //underscores has the same index for each randWord letter.  
    for(var i = 0; i < randWord.length; i++) {
      //keeps track of right guesses and adds populates the underscores with right user Guesses 
      if(randWord[i] === userGuesses) {
        underscores[i] = userGuesses;
        winCounter++; 
        document.getElementById('word-blanks').innerHTML = underscores.join(' ');
        console.log(underscores);
        winLose();

      }
    }

  } else {
    wrongLetter.push(userGuesses);
    guessesLeft--;
    console.log(guessesLeft);
    document.getElementById('wrong-guesses').innerHTML = wrongLetter;
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    winLose();
  }
  
}

// MAIN PROCESS
// ==============================================================================

startGame();

//indexOf getting the index of randWord and we are seeing if 
//any of the user guesses exist within rand word if it does 
//we will get a value greater than negative 1
// if the letter that a user presses actually existes in the word we 
//will get a number greater than -1. if not then you get -1.
