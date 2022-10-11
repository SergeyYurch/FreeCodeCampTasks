let count = 0;

function cc(card) {
  const val =card.toString();
  //Only change code below this line
  switch (val) {
    case '2':  
    case '3':   
    case '4': 
    case '5': 
    case '6':
    ++count;
    break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    --count;
    break;
    default:
    break;
  }

   return `${count} ${count>0? 'Bet':'Hold'}`;
  // Only change code above this line
}

cc(2); cc(3); cc(4); cc(5); cc(6);
