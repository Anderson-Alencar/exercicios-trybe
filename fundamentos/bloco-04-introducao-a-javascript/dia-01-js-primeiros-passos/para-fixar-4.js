let status = 'aprovada';

switch(status){
  case 'aprovada':
    console.log("Parabéns, você foi aprovado(a)");
    break;

  case 'lista':
    console.log("Você está na nossa lista de espera");
    break;

  case 'reprovada':
    console.log("Você foi reprovado(a)");
    break;

  default:
    console.log("não se aplica");
    break;
}