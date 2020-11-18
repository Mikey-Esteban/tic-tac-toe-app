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

  const allPositions = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ];

  for (let box of allPositions) {
    box.addEventListener('click', () => {
      console.log(`i ran!`);
      box.innerText = 'X';
      turnDescription.innerText == 'Player X turn' ?
        turnDescription.innerText = 'Player O turn' :
        turnDescription.innerText = 'Player X turn' ;
      winnerBanner.classList.toggle('hidden');
    });
  }

})();
