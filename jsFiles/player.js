export default class Player {
    _sum = 0;
    _aceCount = 0;
    _cards = [];
    get sum() {
        return this._sum;
    }
    get aceCount() {
        return this._aceCount;
    }
    get cards() {
        return this._cards;
    }
    addCard(card) {
        this._cards.push(card);
        this._sum += card.value;
        if (card.name === "A") {
            this._aceCount++;
        }
        this.reduceAce();
    }
    reduceAce() {
        while (this._sum > 21 && this._aceCount > 0) {
            this._sum -= 10;
            this._aceCount--;
        }
    }
    reset() {
        this._cards = [];
        this._sum = 0;
        this._aceCount = 0;
    }
    hit(deck) {
        let card = deck.drawCard();
        if (card !== undefined) {
            this.addCard(card);
        }
        return card;
    }
}
//# sourceMappingURL=player.js.map