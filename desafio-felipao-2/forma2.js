function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}

function determinarRank(resultado) {
    if (resultado <= 10) {
        return "Ferro";
    } else if (resultado >= 11 && resultado <= 20) {
        return "Bronze";
    } else if (resultado >= 21 && resultado <= 50) {
        return "Prata";
    } else if (resultado >= 51 && resultado <= 80) {
        return "Ouro";
    } else if (resultado >= 81 && resultado <= 90) {
        return "Diamante";
    } else if (resultado >= 91 && resultado <= 100) {
        return "Lendário";
    } else if (resultado >= 101) {
        return "Imortal";
    }
}

let resultado = subtrair(25, 35);
let rank = determinarRank(resultado);

console.log("O Herói tem um saldo de " + resultado + " e está no nível de rank: " + rank);