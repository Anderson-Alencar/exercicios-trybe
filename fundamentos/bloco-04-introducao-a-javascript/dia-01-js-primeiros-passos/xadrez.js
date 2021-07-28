let pecaXadrez = 'Rook';

switch (pecaXadrez.toLowerCase()) {
  case 'bishop':
    console.log('Diagonais');
    break;

  case 'knight':
    console.log('Em L');
    break;
  
  case 'rook':
    console.log('Verticais e horizontais');
    break;

  case 'pawn':
    console.log('Uma casa para frente, ou duas se for o primeiro movimento');
    break;

  case 'king':
    console.log('Uma casa, na vertical, ou na horizontal, ou na diagonal');
    break;
  
  case 'queen':
    console.log('Diagonais, verticais, horizontais');
    break;
  
  default:
    console.log('fatal error');
    break;
}