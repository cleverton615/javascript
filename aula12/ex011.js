var idade = 74
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota!')
}else if (idade < 18 || idade > 70) {
    console.log('Voto opcional')
}else {
    console.log('Voto obrigatório')
}