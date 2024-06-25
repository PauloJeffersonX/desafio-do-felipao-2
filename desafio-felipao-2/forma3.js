function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}

function determinarRank(resultado) {
    if (resultado <= 10) return "Ferro";
    if (resultado >= 11 && resultado <= 20) return "Bronze";
    if (resultado >= 21 && resultado <= 50) return "Prata";
    if (resultado >= 51 && resultado <= 80) return "Ouro";
    if (resultado >= 81 && resultado <= 90) return "Diamante";
    if (resultado >= 91 && resultado <= 100) return "Lendário";
    if (resultado >= 101) return "Imortal";
    return "Rank desconhecido";
}

let resultado = subtrair(25, 35);
let rank = determinarRank(resultado);

console.log("O Herói tem um saldo de " + resultado + " e está no nível de rank: " + rank);