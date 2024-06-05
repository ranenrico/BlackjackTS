import Player from "./player.js";
import Deck from "./deck.js";
import Dealer from "./dealer.js";
class Game {
    deck;
    gameCount = 0;
    canHit = true;
    bust = false;
    blackjack = false;
    results;
    yourScore;
    yourCards;
    dealerScore;
    newGameButton;
    player;
    dealer;
    hitButton;
    stayButton;
    constructor(resultId, playerScoreId, playerCardsId, dealerScore, newGameId, hitId, stayId) {
        this.deck = new Deck();
        this.player = new Player();
        this.dealer = new Dealer();
        this.results = document.getElementById(resultId);
        this.yourScore = document.getElementById(playerScoreId);
        this.yourCards = document.getElementById(playerCardsId);
        this.dealerScore = document.getElementById(dealerScore);
        this.newGameButton = document.getElementById(newGameId);
        this.hitButton = document.getElementById(hitId);
        this.stayButton = document.getElementById(stayId);
        this.newGameButton.addEventListener("click", () => this.newGame());
        this.hitButton.addEventListener("click", () => this.playerHit());
        this.stayButton.addEventListener("click", this.stay.bind(this));
        this.newGame();
    }
    newGame() {
        if (this.gameCount == 5) {
            this.deck = new Deck();
            this.gameCount = 0;
        }
        this.startGame();
        this.gameCount++;
    }
    startGame() {
        this.player.reset();
        this.dealer.reset();
        this.canHit = true;
        this.bust = false;
        this.blackjack = false;
        this.yourCards.innerHTML = "";
        this.results.innerText = "";
        this.yourScore.innerText = "";
        this.dealerScore.innerText = "";
        this.newGameButton.style.display = "none";
        this.dealer.hiddenCard = this.deck.drawCard();
        let card = this.deck.drawCard();
        this.dealer.addCard(card);
        let dealerCardImage = document.getElementById("dealerCard1");
        dealerCardImage.src = `../assets/images/cards/${card.toString()}.png`;
        for (let i = 0; i < 2; i++) {
            let card = this.player.hit(this.deck);
            this.addCardImage(card, this.player);
        }
        if (this.player.sum === 21) {
            this.canHit = false;
            this.yourScore.innerText = this.player.sum + "! BLACKJACK!";
            this.blackjack = true;
            this.stay();
        }
    }
    playerHit() {
        if (!this.canHit) {
            return;
        }
        let card = this.player.hit(this.deck);
        if (card) {
            this.addCardImage(card, this.player);
            if (this.player.sum > 21 && this.player.aceCount === 0) {
                this.bust = true;
                this.stay();
            }
        }
    }
    stay() {
        this.canHit = false;
        let dealerHiddenCard = document.getElementById("hiddenCard");
        console.log(this);
        dealerHiddenCard.src = `../assets/images/cards/${this.dealer.cards[0].toString()}.png`;
        this.dealerScore.innerText = this.dealer.sum.toString();
        //setTimeout()
        if (this.blackjack) {
            this.results.innerText = this.dealer.sum === 21 ? "Draw!" : "BLACKJACK!";
            this.endGame();
            return;
        }
        if (this.bust) {
            this.results.innerText = "Busted!";
            this.endGame();
            return;
        }
        while (this.dealer.sum < 17) {
            let card = this.dealer.hit(this.deck);
            if (card) {
                this.addCardImage(card, this.dealer);
            }
        }
        if (this.dealer.sum > 21 || this.player.sum > this.dealer.sum) {
            this.results.innerText = "You won!";
        }
        else if (this.dealer.sum > this.player.sum) {
            this.results.innerText = "You lost!";
        }
        else {
            this.results.innerText = "Draw!";
        }
        this.endGame();
    }
    addCardImage(card, player) {
        let cardImg = document.createElement("img");
        cardImg.src = `../assets/images/cards/${card.toString()}.png`;
        if (player instanceof Dealer) {
            document.getElementById("dealerCards").appendChild(cardImg);
            this.dealerScore.innerText = this.dealer.sum.toString();
        }
        else {
            this.yourCards.appendChild(cardImg);
            this.yourScore.innerText = this.player.sum.toString();
        }
    }
    endGame() {
        this.newGameButton.style.display = "block";
    }
}
new Game('results', 'yourScore', 'yourCards', 'dealerScore', 'newGame', 'hit', 'stay');
//# sourceMappingURL=game.js.map