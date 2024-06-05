import Player from "./player.js";
export default class Dealer extends Player {
    _hiddenCard = undefined;
    set hiddenCard(card) {
        this._hiddenCard = card;
        this.addCard(card);
        document.getElementById("dealerCards").innerHTML =
            '<img id="hiddenCard" src="../assets/images/backs/BACK.png"><img id="dealerCard1">';
    }
}
//# sourceMappingURL=dealer.js.map