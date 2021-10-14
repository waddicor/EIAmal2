"use strict";
var randomPoem;
(function (randomPoem) {
    let name = ["Peter", "Marco", "Leander", "Herbert", "Gustav", "Donald"];
    let whattodo = ["gönnt sich", "vernascht", "besiegt", "isst", "sieht", "verachtet"];
    let thing = ["Grillkäse", "einen yuppie", "Marco", "Leander", "1kg Steak", "Tobis Proteinpulver"];
    let satz = "";
    for (let i = 6; i <= thing.length; i--) {
        if (i == 0) {
            break;
        }
        //console.log(i);
        getVerse(name, whattodo, thing, satz);
    }
    function getVerse(_name, _whattodo, _thing, _satz) {
        let zufallname = Math.floor(Math.random() * _name.length);
        _satz += _name.splice(zufallname, 1) + " ";
        let zufalltodo = Math.floor(Math.random() * _name.length);
        _satz += _whattodo.splice(zufalltodo, 1) + " ";
        let zufallthing = Math.floor(Math.random() * _name.length);
        _satz += _thing.splice(zufallthing, 1) + " ";
        console.log(_satz);
        return _satz;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoem.js.map