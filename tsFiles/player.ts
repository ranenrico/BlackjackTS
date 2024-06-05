import Card from "./card";
import Deck from "./deck";


export default class Player {
    private _sum: number = 0;
    private _aceCount: number = 0;
    private _cards: Card[] = [];
  
    get sum(): number {
      return this._sum;
    }
    get aceCount(): number {
      return this._aceCount;
    }
    get cards(): Card[] {
      return this._cards;
    }
  
    addCard(card: Card): void {
      this._cards.push(card);
      this._sum += card.value;
      if (card.name === "A") {
        this._aceCount++;
      }
      this.reduceAce();
    }
    reduceAce(): void {
      while (this._sum > 21 && this._aceCount > 0) {
        this._sum -= 10;
        this._aceCount--;
      }
    }
    reset(): void {
      this._cards = [];
      this._sum = 0;
      this._aceCount = 0;
    }
    hit(deck: Deck): Card | undefined {
      let card = deck.drawCard();
      if (card !== undefined) {
        this.addCard(card);
      }
      return card;
    }
  }