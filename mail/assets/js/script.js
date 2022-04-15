const authorizedList = [];
const lengthList = 10;
let mailList = document.getElementById("mail-list");

console.log('lunghezza lista mail autorizzate: ', lengthList);

for (let i=0; i<lengthList; i++){
  authorizedList[i] = `user${i+1}@gmail.com`;
}

console.log('elenco mail autorizzate: ', authorizedList);

mailList.innerHTML = "Questo è l'elenco delle mail autorizzate" ;

for (let i=0; i<lengthList; i++){
  const listElement = document.createElement('li');
  listElement.innerHTML = authorizedList[i];
  mailList.appendChild(listElement);
}

const userMail = prompt('inserisci la tua mail');

console.log('mail utente: ', userMail);

let output = 'la mail inserita NON è nella lista delle mail autorizzate'
for (let i=0; i<lengthList; i++ ){
  if ( userMail === authorizedList[i]){
    output = 'la mail inserita è nella lista delle mail autorizzate'
  }
}

console.log('output: ', output);

document.getElementById('title').innerHTML = output;


