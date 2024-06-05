export default class Card {
    _name;
    _suit;
    _value;
    constructor(_name, _suit) {
        this._name = _name;
        this._suit = _suit;
        if (this._name === "A") {
            this._value = 11;
        }
        else if (["K", "Q", "J"].includes(this._name)) {
            this._value = 10;
        }
        else {
            this._value = parseInt(this._name);
        }
    }
    get value() {
        return this._value;
    }
    get name() {
        return this._name;
    }
    toString() {
        return this._suit + this._name;
    }
}
//# sourceMappingURL=card.js.map