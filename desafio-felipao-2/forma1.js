function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}
  
let resultado = subtrair(25, 35);
let rank ;

switch (true) {
    case resultado <= 10:
        rank = "Ferro";
        break;
        
    case resultado >= 11 && resultado <= 20:
        rank = "Bronze";
        break;

    case resultado >= 21 && resultado <= 50:
        rank = "Prata";
        break;

    case resultado >= 51 && resultado <= 80:
        rank = "Ouro";
        break;

    case resultado >= 81 && resultado <= 90:
        rank= "Diamante";
        break;

    case resultado >= 91 && resultado <= 100:
        rank = "Lendário";
        break;    

    case resultado >= 101:
        rank = "Imortal";
        
}

console.log ("O Herói tem de saldo de " + resultado + " e está no nível de rank: " + rank);

