export default class Card {
    private _value: number;
    constructor(private _name: string, private _suit: string) {
      if (this._name === "A") {
        this._value = 11;
      } else if (["K", "Q", "J"].includes(this._name)) {
        this._value = 10;
      } else {
        this._value = parseInt(this._name);
      }
    }
    get value(): number {
      return this._value;
    }
    get name(): string {
      return this._name;
    }
    toString(): string {
      return this._suit + this._name;
    }
  }