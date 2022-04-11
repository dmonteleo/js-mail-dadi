const authorizedList = ['user1@gmail.com', 'user2@gmail.com'];
console.log(authorizedList);
const userMail = prompt('inserisci la tua mail');
console.log(userMail);
const lengthAuthorizedList = authorizedList.length;
console.log(lengthAuthorizedList);
let flag = false;
let output = 'la mail inserita NON è nella lista delle mail autorizzate'
for ( i=0; i<lengthAuthorizedList; i++ ){
  if ( userMail === authorizedList[i]){
    flag = true;
    output = 'la mail inserita è nella lista delle mail autorizzate'
  }
}
console.log(output);

const prova = [];
console.log(prova);
for (i=0; i<10; i++){

}
