import Card from "./card.js";
export default class Deck {
    _cards = [];
    constructor() {
        this.buildDeck();
        this.shuffleDeck();
    }
    get cards() {
        return this._cards;
    }
    buildDeck() {
        this._cards = [];
        let values = [
            "A",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
        ];
        let suits = ["c", "d", "h", "s"];
        for (let i = 0; i < 4; i++) {
            for (let suit of suits) {
                for (let value of values) {
                    this._cards.push(new Card(value, suit));
                }
            }
        }
    }
    shuffleDeck() {
        for (let i = this._cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
    }
    drawCard() {
        return this._cards.pop();
    }
}
//# sourceMappingURL=deck.js.map