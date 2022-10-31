let intr = prompt(' Сколько тебе лет?')
if(intr % 2) {
    console.log('odd');
} else {
  console.log('Even');
}


let name = prompt('Как тебя зовут?').toLowerCase().trim()
if(name[0] === 'b' && name.length % 2 ===0) {
   console.log('вэлком');
} else {
   console.log('иди отсюда');  
}