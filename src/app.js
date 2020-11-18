// IIFE for User Interface
const UI = (() => {
  const box1 = document.querySelector('#one');
  const box2 = document.querySelector('#two');
  const box3 = document.querySelector('#three');
  const box4 = document.querySelector('#four');
  const box5 = document.querySelector('#five');
  const box6 = document.querySelector('#six');
  const box7 = document.querySelector('#seven');
  const box8 = document.querySelector('#eight');
  const box9 = document.querySelector('#nine');
  const turnDescription = document.querySelector('#turnDescription');
  const winnerBanner = document.querySelector('#winnerBanner');
  const tieBanner = document.querySelector('#tieBanner');

  const resetBtn = document.querySelector('#resetBtn');
  resetBtn.addEventListener('click', () => {
    game = Gameplay();
    for (let box of allPositions) {
      // reset inner text
      box.innerText = '';
      // reset padding
      if (!box.classList.contains('py-6')) {
        box.classList.remove('pb-5', 'pt-6');
        box.classList.add('py-6');
      }
      // reset winner, tie banner, turn description
      if (!winnerBanner.classList.contains('hidden')) { winnerBanner.classList.add('hidden')}
      if (!tieBanner.classList.contains('hidden')) { tieBanner.classList.add('hidden')}
      if (turnDescription.classList.contains('hidden')) { turnDescription.classList.remove('hidden')}
      turnDescription.innerText = 'Player X turn';

      box.addEventListener('click', clickHandler, true);
    }
  })

  const allPositions = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ];

  disableClicks = () => {
    for(let box of allPositions) {
      box.removeEventListener('click', clickHandler, true)
    }
  }

  clickHandler = (e) => {
    // !!!!!!!!!!!!!!!!
    // Runs Game Sequence
    // !!!!!!!!!!!!!!!!
    const box = e.target;
    // if statement to see if click is valid
    if (box.innerText == '') {
      // change UI box
      box.innerText = game.player;
      // handle padding change
      box.classList.remove('py-6');
      box.classList.add('pb-5', 'pt-6');
      // add piece to gameboard
      game.placePiece(game.player, box.id);
      // check if winner or tie
      if (game.isWon()) {
        winnerBanner.innerText = `CONGRATS PLAYER ${game.player} WON!`
        winnerBanner.classList.remove('hidden');
        turnDescription.classList.add('hidden');
        disableClicks();
      }
      else if (game.isFull()) {
        tieBanner.classList.remove('hidden');
        turnDescription.classList.add('hidden');
        disableClicks();
      }
      // switch player
      game.player = game.switchPlayer();
      // update turn description
      turnDescription.innerText == 'Player X turn' ?
        turnDescription.innerText = 'Player O turn' :
        turnDescription.innerText = 'Player X turn' ;

    } else {
      alert('sorry, that space is already taken!')
    }
  }

  // initalize gameplay
  game = Gameplay();
  for (let box of allPositions) {
    box.addEventListener('click', clickHandler, true);
  }

})();
