namespace randomPoem {
    
   let names: string[] = ["Peter", "Marco", "Leander", "Herbert", "Gustav", "Donald"];
   let whattodos: string[] = ["gönnt sich", "vernascht", "besiegt", "isst", "sieht", "verachtet"];
   let things: string[] = ["Grillkäse", "einen yuppie", "Marco", "Leander", "1kg Steak", "Tobis Proteinpulver"];
   let satz: string = "";

    
   for (let i: number = 6; i <= things.length; i--) {
        if (i == 0) {
            break;
        }
        getVerse(names, whattodos, things, satz);
    }


   function getVerse (_names: string[], _whattodos: string[], _things: string[], _satz: string ): string {
    
let zufallname: number = Math.floor(Math.random() * _names.length);
_satz += _names.splice(zufallname, 1) + " ";

let zufalltodo: number = Math.floor(Math.random() * _whattodos.length);
_satz += _whattodos.splice(zufalltodo, 1) + " ";

let zufallthing: number = Math.floor(Math.random() * _things.length);
_satz += _things.splice(zufallthing, 1) + " ";

console.log(_satz);
return _satz;
}
}