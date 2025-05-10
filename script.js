
//função de abrir o menu mobile
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

    //função para aparecer e sumir o texto do banner quando for clicado

document.addEventListener('DOMContentLoaded', ()=>{
    let txtB1 = document.querySelector('.theBegginingBanner').addEventListener('click', ()=>{
        verificarClasses('theBegginingBanner', 'p1', 'pView', 'bannerCanimation')
    })

    let txtB2 = document.querySelector('.darkKnightBanner').addEventListener('click', ()=>{
        verificarClasses('darkKnightBanner', 'p2', 'pView', 'bannerCanimation')
    })

    let txtB3 = document.querySelector('.theBatmanBanner').addEventListener('click', ()=>{
        verificarClasses('theBatmanBanner', 'p3', 'pView', 'bannerCanimation')
    })
})

function verificarClasses (banner, pN, classAdRem, classBCA){
    let ban = document.querySelector(`.${banner}`)
    let p   = document.querySelector(`.${pN}`)

    if(p.classList.contains(`${classAdRem}`)){
        p.classList.remove(`${classAdRem}`)
        ban.classList.add(`${classBCA}`)
    }else{
        p.classList.add(`${classAdRem}`)
        ban.classList.remove(`${classBCA}`)
    }
}

