namespace randomPoem {
    
   let name: string[] = ["Peter", "Marco", "Leander", "Herbert", "Gustav", "Donald"];
   let whattodo: string[] = ["gönnt sich", "vernascht", "besiegt", "isst", "sieht", "verachtet"];
   let thing: string[] = ["Grillkäse", "einen yuppie", "Marco", "Leander", "1kg Steak", "Tobis Proteinpulver"];
   let satz: string = "";

    
   for (let i: number = 6; i <= thing.length; i--) {
        if (i == 0) {
            break;
        }
        //console.log(i);
        getVerse(name, whattodo, thing, satz);
    }


   function getVerse (_name: string[], _whattodo: string[], _thing: string[], _satz: string ): string {
    
let zufallname: number = Math.floor(Math.random() * _name.length);
_satz += _name.splice(zufallname, 1) + " ";

let zufalltodo: number = Math.floor(Math.random() * _name.length);
_satz += _whattodo.splice(zufalltodo, 1) + " ";

let zufallthing: number = Math.floor(Math.random() * _name.length);
_satz += _thing.splice(zufallthing, 1) + " ";

console.log(_satz);
return _satz;
}
}