let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]//array- ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsel=document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame()
{
    cardsel.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsel.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if(sum<=20) {
        message = "Do yo want to draw a new card?"
        
    }
    else if( sum === 21){
        message = "Yo've got a Blackjack"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

 function newCard() {
     console.log("Drawn")
     let card = 8
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame()
 }


 //Extra
 let player1Time = 102
 let player2Time = 108

 function getFastestRaceTime(){
     if (player1Time < player2Time){
         return player2Time
     }
     else{
         return player1Time
     }
 }

 let fastestRace = getFastestRaceTime()
 console.log(fastestRace)
 


