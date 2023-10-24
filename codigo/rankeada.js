
function rankeada(Vitoria,Derrota){
   
    const xp = Vitoria - Derrota ;
    let nivel="" ;

    if (xp <= 10){
        nivel ="Ferro"
    } else if (xp <= 20 ) {
        nivel = "Bronze"
    } else if (xp <= 50) {
        nivel = "Prata"
    } else if (xp <=80){
        nivel = "Ouro"
    } else if (xp <=90){
        nivel = "Diamante"
    } else if (xp <= 100){
        nivel = "Lendário"
    } else if (xp <= 101){
        nivel = "Imortal"
    }

console.log(`O heroi tem o saldo de: ${xp} está no nivel de: ${nivel}`)
}
rankeada(20,5);
