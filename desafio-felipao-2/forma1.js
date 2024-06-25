function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}
  
let resultado = subtrair(25, 35);
let determinarRank ;

switch (true) {
    case resultado <= 10:
        determinarRank = "Ferro";
        break;
        
    case resultado >= 11 && resultado <= 20:
        determinarRank = "Bronze";
        break;

    case resultado >= 21 && resultado <= 50:
        determinarRank = "Prata";
        break;

    case resultado >= 51 && resultado <= 80:
        determinarRank = "Ouro";
        break;

    case resultado >= 81 && resultado <= 90:
        determinarRank= "Diamante";
        break;

    case resultado >= 91 && resultado <= 100:
        determinarRank = "Lendário";
        break;    

    case resultado >= 101:
        determinarRank = "Imortal";
        
}

console.log ("O Herói tem de saldo de " + resultado + " e está no nível de rank: " + determinarRank);

