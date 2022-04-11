const authorizedList = ['user1@gmail.com', 'user2@gmail.com'];
console.log(authorizedList);
const userMail = prompt('inserisci la tua mail');
console.log(userMail);
const lengthAuthorizedList = authorizedList.length;
console.log(lengthAuthorizedList);
const flag = false;
for ( i=0; i<lengthAuthorizedList; i++ ){
  if ( userMail === authorizedList[i]){
    flag = true;
    console.log('la mail inserita è nella lista delle mail autorizzate');
  }
  else {
    console.log('la mail inserita NON è nella lista delle mail autorizzate');
  }
}