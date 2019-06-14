const Nome = 'Calculador de probabilidade'
const Autor = 'Alecksander'
const Versao = 'v1.0'
const Descricao = 'Script que calcula a probabilidade de puxar uma carta (a critério do usuário).'
document.title = `${Nome} ${Versao}`

var baralho = [
  'As de Copas',
  '2 de Copas',
  '3 de Copas',
  '4 de Copas',
  '5 de Copas',
  '6 de Copas',
  '7 de Copas',
  '8 de Copas',
  '9 de Copas',
  '10 de Copas',
  'Valete de Copas',
  'Dama de Copas',
  'Rei de Copas',
  'As de Espadas',
  '2 de Espadas',
  '3 de Espadas',
  '4 de Espadas',
  '5 de Espadas',
  '6 de Espadas',
  '7 de Espadas',
  '8 de Espadas',
  '9 de Espadas',
  '10 de Espadas',
  'Valete de Espadas',
  'Dama de Espadas',
  'Rei de Espadas',
  'As de Paus',
  '2 de Paus',
  '3 de Paus',
  '4 de Paus',
  '5 de Paus',
  '6 de Paus',
  '7 de Paus',
  '8 de Paus',
  '9 de Paus',
  '10 de Paus',
  'Valete de Paus',
  'Dama de Paus',
  'Rei de Paus',
  'As de Ouros',
  '2 de Ouros',
  '3 de Ouros',
  '4 de Ouros',
  '5 de Ouros',
  '6 de Ouros',
  '7 de Ouros',
  '8 de Ouros',
  '9 de Ouros',
  '10 de Ouros',
  'Valete de Ouros',
  'Dama de Ouros',
  'Rei de Ouros'
]
var bTemplate = [
  'As de Copas',
  '2 de Copas',
  '3 de Copas',
  '4 de Copas',
  '5 de Copas',
  '6 de Copas',
  '7 de Copas',
  '8 de Copas',
  '9 de Copas',
  '10 de Copas',
  'Valete de Copas',
  'Dama de Copas',
  'Rei de Copas',
  'As de Espadas',
  '2 de Espadas',
  '3 de Espadas',
  '4 de Espadas',
  '5 de Espadas',
  '6 de Espadas',
  '7 de Espadas',
  '8 de Espadas',
  '9 de Espadas',
  '10 de Espadas',
  'Valete de Espadas',
  'Dama de Espadas',
  'Rei de Espadas',
  'As de Paus',
  '2 de Paus',
  '3 de Paus',
  '4 de Paus',
  '5 de Paus',
  '6 de Paus',
  '7 de Paus',
  '8 de Paus',
  '9 de Paus',
  '10 de Paus',
  'Valete de Paus',
  'Dama de Paus',
  'Rei de Paus',
  'As de Ouros',
  '2 de Ouros',
  '3 de Ouros',
  '4 de Ouros',
  '5 de Ouros',
  '6 de Ouros',
  '7 de Ouros',
  '8 de Ouros',
  '9 de Ouros',
  '10 de Ouros',
  'Valete de Ouros',
  'Dama de Ouros',
  'Rei de Ouros'
]

function repeat(array, n){
    var out = [];
    for(var i = 0; i < n; i++) {
        out = out.concat(array);
    }
    return out;
}
function remBaralhoF(baralho) {
  let textBaralho = document.getElementById("remBaralho").value;
  console.log(`textBaralho: ${textBaralho}`);
}
function upRemBaralho(array){
  let textBaralho = document.getElementById("remBaralho").value;
  let remContain = bTemplate.includes(textBaralho);
  if (remContain == true) {
    remove(array, textBaralho)
    console.log(`"${textBaralho}" foi removida do baralho. ${array.length} cartas no total.`);
    document.getElementById("remSucc").innerHTML = `"${textBaralho}" foi removida do baralho. ${array.length} cartas no total.`;
    var count = [];
    array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    count[textBaralho]--
  } else {
    console.log(`"${textBaralho}" não é uma carta válida.`);
  }
}
function cnBaralho(baralho, count) {
  let textBaralho = document.getElementById("nBaralho").value;
  array = repeat(baralho, textBaralho);
  console.log(`textBaralho: ${textBaralho}`);
  var count = [];
  array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
}
function docW(array) {
  document.getElementById("createDecksButton").style.visibility = "hidden";
  let numBaralho = array.length/52;
  document.getElementById("howManyDecks").innerHTML = `${numBaralho} baralho/s criado/s! ${array.length} cartas no total.`;
}
function checkDeck(array) {
  // console.log(array);
  function show(array) {
    for (var i=0; i>=0; i++) {
      array[i] = array[i] + '<br />';
      return array.join('');
    }
  }
  var showArray = array.slice(0);
  document.getElementById("checkDeckShow").innerHTML = showArray.sort().reverse().splice(0, 30).join('<br />');
  document.getElementById("checkDeckShowTwo").innerHTML = `<br /> ... e mais ${(showArray.length)}`;
  var count = [];
  array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  console.log(count);
}
function remove(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        if (arr.indexOf(what) !== -1){
          ax = arr.indexOf(what)
          arr.splice(ax, 1)
        } else {}
    }
    return arr;
}
function Add(array){
  let textBaralho = document.getElementById("addBaralho").value;
  let addContain = bTemplate.includes(textBaralho);
  if (addContain == true) {
    array.push(textBaralho)
    console.log(`"${textBaralho}" foi adicionada ao baralho. ${array.length} cartas no total.`);
    document.getElementById("addSucc").innerHTML = `"${textBaralho}" foi adicionada ao baralho. ${array.length} cartas no total.`;
    var count = [];
    array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    count[textBaralho]++
  } else {
    console.log(`"${textBaralho}" não é uma carta válida.`);
  }
}
function probability(array) {
  let textBaralho = document.getElementById("probBaralho").value;
  let probContain = bTemplate.includes(textBaralho);
  if (probContain == true) {
    var count = [];
    array.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    probPerCent = ((count[textBaralho]/array.length)*100).toFixed(2)
    console.log(`A probabilidade de puxar a carta "${textBaralho}" (tendo ${count[textBaralho]} delas no baralho) é de ${probPerCent}%.`);
    document.getElementById("probSucc").innerHTML = `A probabilidade de puxar a carta "${textBaralho}" (tendo ${count[textBaralho]} delas no baralho) é de ${((count[textBaralho]/array.length)*100).toFixed(2)}%.`;
  } else {
    console.log(`"${textBaralho}" não é uma carta válida.`);
  }
}
