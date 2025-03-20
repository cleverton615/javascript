function verificar() {
    var data = new Date() //recebe data atual
    var ano = data.getFullYear() //recebe ano completo atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se valor for igual a 0 ou maior que o ano atual
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //pega a seleção do radius
        var idade = ano - Number(fano.value) //ano atual - o ano digitado
        var gênero = ''
        var img = document.createElement('img') //cria uma imagem em html com id='img'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { //se selecionar masculino
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        } else if (fsex[1].checked) { //se selecionar feminino
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)//mostrar a imagem
    }
}