document.addEventListener('DOMContentLoaded', ()=>{
    const botaoMenu = document.getElementById('botaoMenu').addEventListener('click',()=>{
        var menu = document.querySelector('.celular')
        if(menu.classList.contains('open')){
            menu.classList.remove('open')
            document.querySelector('.imgBttMenu').src = 'extra/imagens/icones/botao-fechar-branco.png'
        }else{
            menu.classList.add('open')
            document.querySelector('.imgBttMenu').src = 'extra/imagens/icones/cardápio-50-branco.png'
        }
    })
})
