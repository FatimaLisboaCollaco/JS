function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHour()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 18){
        imagem.src = 'imagem/dia.png'
        document.body.style.background = '#e2cd9f'}
    else{
        imagem.src = 'noite.png'
        document.body.style.background = '#e2cd8f'
    }
    
}