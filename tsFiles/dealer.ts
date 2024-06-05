import Player from "./player.js";
import Card from "./card.js";

export default class Dealer extends Player {
    private _hiddenCard: Card | undefined = undefined;
    set hiddenCard(card: Card) {
      this._hiddenCard = card;
      this.addCard(card);
      document.getElementById("dealerCards")!.innerHTML =
        '<img id="hiddenCard" src="../assets/images/backs/BACK.png"><img id="dealerCard1">';
    }
  }