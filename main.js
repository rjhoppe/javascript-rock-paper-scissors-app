function getPlayerName() {
	let playerName = prompt('Hello! What is your name?');
	console.log('Nice to meet you,' , {playerName});
	return playerName;
}

function wantToPlay() {
	let gameDecision = prompt('Shall we play?');
	if (gameDecision != 'Y'){
			console.log('Alright, catch you later!');
			return;
	} else {
			console.log('Alright!');
	}
}

function playGame() {
	let playerScore = 0;
	let compScore = 0;
	
	console.log('Rock...');
	console.log('Paper...');
	console.log('Scissors...');
	let playerChoice = prompt('Type R, P, or S');
	let min = 0;
	let max = 3;
	compChoice = Math.floor(Math.random() * (max - min + 1) ) + min;
	if (compChoice === 1) {
			compChoice = 'Rock';
	} else if (compChoice === 2) {
			compChoice = 'Paper';
	} else {
			compChoice = 'Scissors';
	}

	console.log('Shoot!');
	if (playerChoice === 'R') {
			if (compChoice === 'Paper') {
					console.log('You lose!');
					compScore++;
					return playAgain(compScore, playerScore);
			} else if (compChoice === 'Scissors') {
					console.log('You win!');
					playerScore++;
					return playAgain(compScore, playerScore);
			} else {
					console.log('Its a tie...');
					return playAgain(compScore, playerScore);
			}

	} else if (playerChoice === 'P') {
			if (compChoice === 'Paper') {
					console.log('Its a tie...');
					return playAgain(compScore, playerScore);
			} else if (compChoice === 'Scissors') {
					console.log('You lose!');
					compScore++;
					return playAgain(compScore, playerScore);
			} else {
					console.log('You win!');
					playerScore++;
					return playAgain(compScore, playerScore);
			}

	} else {
			if (compChoice === 'Paper'){
					console.log('You win!');
					playerScore++;
					return playAgain(compScore, playerScore);
			} else if (compChoice === 'Scissors') {
					console.log('Its a tie...');
					return playAgain(compScore, playerScore);
			} else {
					console.log('You lose!');
					compScore++;
					return playAgain(compScore, playerScore);
			}
	}
}

function playAgain(playerScore, compScore){
	let replayChoice = prompt('That was fun! Want to play again? Y/N')
	if (replayChoice === 'Y') {
			return playGame(playerScore, compScore);
	} else {
			console.log('Final Score: ', {playerScore}, {compScore});
			console.log('Thanks for playing! See you later!');
	}
}

playGame();

