app.controller('pigGameCtrl', ['$scope', function($scope) {

	/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

	var Player = function() {
		this.globalScore = 0;

	}
	var players = [new Player(), new Player()];

	function GameOperators() {
		var _this = this;
		this.activePlayer = 0;
		this.roundScore = 0;
		this.isGameActive = true;
		this.newGame = function() {
			_this.roundScore = 0;
			_this.activePlayer = 0;
			_this.isGameActive = true;
			players.forEach(function(player, index) {
				player.globalScore = 0;
				document.getElementById('score-'+index).textContent = '0';
				document.getElementById('current-'+index).textContent = '0';
				document.getElementById('name-'+index).textContent="Player "+(index+1);

			});
			document.querySelector('.player-0-panel').classList.remove('active', 'winner');
			document.querySelector('.player-1-panel').classList.remove('active', 'winner');

			document.querySelector('.player-0-panel').classList.add('active');
		}
		this.switchPlayer = function() {
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.getElementById('current-'+_this.activePlayer).textContent = '0';
			_this.roundScore = 0;
			_this.activePlayer === 0 ? _this.activePlayer = 1 : _this.activePlayer = 0;
		}
	}

	var gameOperators = new GameOperators();

	gameOperators.newGame();

	document.querySelector('.btn-new').addEventListener('click', gameOperators.newGame);

	// document.querySelector('.dice').style.display = 'none';


	function getDiceValue() {
		return Math.floor(Math.random() * 6) + 1;
	}
	document.querySelector('.btn-roll').addEventListener('click', function() {
		if(gameOperators.isGameActive) {
			var dicesDOM = document.querySelectorAll('.dice');
			var dices = [getDiceValue(), getDiceValue()];
			// var dice = Math.floor(Math.random() * 6) + 1;
			

			function diceTimeout(i) {
				setTimeout(function() {
					dices = [getDiceValue(), getDiceValue()];
					// dice = Math.floor(Math.random() * 6) + 1;
					dicesDOM.forEach(function(element, index) {
						element.src = "img/dice-"+dices[index]+".png";
					});
					// diceDOM.src = "dice-"+dice+".png";
						
				}, 20 * i);
			}

			dicesDOM.forEach(function(element, index) {
				element.style.display = 'block';
			});
			// diceDOM.style.display = 'block';
			for(var i=0; i<20; i++) {
				diceTimeout(i);
			}
			setTimeout(function() {
				if(dices.indexOf(1) !== -1) {
					gameOperators.switchPlayer();
					// diceDOM.style.display = 'block';
				}
				else {
					dices.forEach(function(dice) {
						gameOperators.roundScore += dice;
					});
					// gameOperators.roundScore += dice;
					document.getElementById('current-'+gameOperators.activePlayer).textContent = gameOperators.roundScore;
				}	
			}, i*i);
		}
		
		

	});

	document.querySelector('.btn-hold').addEventListener('click', function() {

		if(gameOperators.isGameActive) {
			// add the score to the global score
			players[gameOperators.activePlayer].globalScore += gameOperators.roundScore;

			//update view
			document.getElementById('score-'+gameOperators.activePlayer).textContent = players[gameOperators.activePlayer].globalScore;

			//final score
			var finalScore = document.querySelector('.final-score').value;
			console.log(finalScore);
			
			if(!(finalScore)) {
				finalScore = 100;
			}

			// check winning conditions
			if(players[gameOperators.activePlayer].globalScore >= finalScore) {
				gameOperators.isGameActive = false;
				document.getElementById('name-'+gameOperators.activePlayer).textContent="WINNER!";
				document.querySelector('.player-'+gameOperators.activePlayer+'-panel').classList.add('winner');
				document.querySelector('.player-'+gameOperators.activePlayer+'-panel').classList.remove('active');

				document.querySelectorAll('.dice').forEach(function(element) {
					element.style.display = 'none';
				});
			}
			else {
				gameOperators.switchPlayer();
			}	
		}

	});

// document.querySelector('#current-'+gameVariables.activePlayer).textContent = gameVariables.dice;
// document.querySelector('#current-'+gameVariables.activePlayer).innerHTML = '<em>' + gameVariables.dice + '</em>';

	
}]);