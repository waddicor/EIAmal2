namespace randomPoem {
    
   let names: string[] = ["Peter", "Marco", "Leander", "Herbert", "Gustav", "Donald"];
   let whattodos: string[] = ["gönnt sich", "vernascht", "besiegt", "isst", "sieht", "verachtet"];
   let things: string[] = ["Grillkäse", "einen yuppie", "Marco", "Leander", "1kg Steak", "Tobis Proteinpulver"];
   let satz: string = "";

    
   for (let i: number = 6; i >= 1; i--) {
        
        let _satz: string = getVerse(names, whattodos, things);
        console.log(_satz);
    }


   function getVerse (_names: string[], _whattodos: string[], _things: string[] ): string {
    
let _satz: string = " ";    

let zufallname: number = Math.floor(Math.random() * _names.length);
_satz += _names.splice(zufallname, 1) + " ";

let zufalltodo: number = Math.floor(Math.random() * _whattodos.length);
_satz += _whattodos.splice(zufalltodo, 1) + " ";

let zufallthing: number = Math.floor(Math.random() * _things.length);
_satz += _things.splice(zufallthing, 1) + " ";


return _satz;
}
}