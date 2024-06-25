function subtrair(vitoria, derrota) {
    return vitoria - derrota;
}

function determinarRank(resultado) {
    const rankMap = [
        { min: -Infinity, max: 10, rank: "Ferro" },
        { min: 11, max: 20, rank: "Bronze" },
        { min: 21, max: 50, rank: "Prata" },
        { min: 51, max: 80, rank: "Ouro" },
        { min: 81, max: 90, rank: "Diamante" },
        { min: 91, max: 100, rank: "Lendário" },
        { min: 101, max: Infinity, rank: "Imortal" }
    ];

    for (let i = 0; i < rankMap.length; i++) {
        if (resultado >= rankMap[i].min && resultado <= rankMap[i].max) {
            return rankMap[i].rank;
        }
    }

    return "Rank desconhecido";
}

let resultado = subtrair(25, 35);
let rank = determinarRank(resultado);

console.log("O Herói tem um saldo de " + resultado + " e está no nível de rank: " + rank);