"use strict";
var randomPoem;
(function (randomPoem) {
    let names = ["Peter", "Marco", "Leander", "Herbert", "Gustav", "Donald"];
    let whattodos = ["gönnt sich", "vernascht", "besiegt", "isst", "sieht", "verachtet"];
    let things = ["Grillkäse", "einen yuppie", "Marco", "Leander", "1kg Steak", "Tobis Proteinpulver"];
    let satz = "";
    for (let i = 6; i >= 1; i--) {
        let _satz = getVerse(names, whattodos, things);
        console.log(_satz);
    }
    function getVerse(_names, _whattodos, _things) {
        let _satz = " ";
        let zufallname = Math.floor(Math.random() * _names.length);
        _satz += _names.splice(zufallname, 1) + " ";
        let zufalltodo = Math.floor(Math.random() * _whattodos.length);
        _satz += _whattodos.splice(zufalltodo, 1) + " ";
        let zufallthing = Math.floor(Math.random() * _things.length);
        _satz += _things.splice(zufallthing, 1) + " ";
        return _satz;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoem.js.map