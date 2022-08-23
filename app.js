document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardsArray = [
    {
    name:'arsenal',
    img: 'images/arsenal.png'
  },
      {
    name:'arsenal',
    img: 'images/arsenal.png'
  },
      {
    name:'chelsea',
    img: 'images/chelsea.png'
  },
      {
    name:'chelsea',
    img: 'images/chelsea.png'
  },
      {
    name:'liverpool',
    img: 'images/liverpool.png'
  },
      {
    name:'liverpool',
    img: 'images/liverpool.png'
  },
      {
    name:'mancity',
    img: 'images/mancity.png'
  },
      {
    name:'mancity',
    img: 'images/mancity.png'
  },
      {
    name:'manu1',
    img: 'images/manu1.png'
  },
      {
    name:'manu1',
    img: 'images/manu1.png'
  },
   {
    name:'tottenham',
    img: 'images/tottenham.png'
  },
   {
    name:'tottenham',
    img: 'images/tottenham.png'
  },
   ]

cardsArray.sort(() => 0.5 - Math.random())

   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardsChosen = []
   var cardsChosenId = []
   var cardsWon = []

//create our board
function createBoard() {
  for(let i =0; i < cardsArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/plank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/white1.png')
     cards[optionTwoId].setAttribute('src', 'images/white1.png')
     cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/plank.png')
    cards[optionTwoId].setAttribute('src', 'images/plank.png')
    alert('Sorry, try again!')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardsArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}


//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardsArray[cardId].img)
  if(cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}



createBoard()






})