let code= prompt('vul uw promotiecode in', 'uw code');
let tekst='De code die u invoerde was: ' + code;
document.getElementById('kortingcode').innerHTML= tekst;
console.log('de waarde van mijn var tekst',tekst);

let getal1= prompt('vul een geheel getal in', 'getal 1');
let getal2= prompt('vul een geheel getal in', 'getal 2');

parseInt(getal1)
parseFloat(getal2)

let totaal = getal1 + getal2
let tekst = getal1 + 'plus' + getal2 + '=' + totaal;
alert(tekst);