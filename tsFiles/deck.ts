import Card from "./card.js";

export default class Deck {
    private _cards: Card[] = [];
    constructor() {
      this.buildDeck();
      this.shuffleDeck();
    }
    get cards(): Card[] {
      return this._cards;
    }
    private buildDeck(): void {
      this._cards = [];
      let values: string[] = [
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
      let suits: string[] = ["c", "d", "h", "s"];
      for (let i: number = 0; i < 4; i++) {
        for (let suit of suits) {
          for (let value of values) {
            this._cards.push(new Card(value, suit));
          }
        }
      }
    }
    shuffleDeck(): void {
      for (let i = this._cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
      }
    }
    drawCard(): Card {
      return this._cards.pop()!;
    }
  }