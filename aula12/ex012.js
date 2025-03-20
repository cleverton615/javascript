var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora >= 18 && hora <= 24) {
    console.log('Agora é noite!')
}else if (hora >= 0 && hora < 12){
    console.log('Agora é manhã!')
} else if (hora > 24) {
    console.log('Hórario inexistente!')
} else if (hora >= 12 && hora <= 17){
    console.log('Agora é tarde!')
}