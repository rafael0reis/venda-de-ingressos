import { cardMoviment } from "./src/actions/cardMove.js"


            //função de abrir o menu mobile

document.addEventListener('DOMContentLoaded', ()=>{

    cardMoviment()

    document.getElementById('botaoMenu').addEventListener('click',()=>{
        var menu = document.querySelector('.celular')
        if(menu.classList.contains('open')){
            menu.classList.remove('open')
            document.querySelector('.imgBttMenu').src = 'extra/imagens/icones/botao-fechar-branco.png'
        }else{
            menu.classList.add('open')
            document.querySelector('.imgBttMenu').src = 'extra/imagens/icones/cardápio-50-branco.png'
        }
    })

            //função para aparecer e sumir o texto do banner quando for clicado
    document.getElementById('catalogo').addEventListener('click', (event)=>{ 
        const imgTarget = event.target
        
        if(imgTarget.classList.contains('bannerC')){
            if(imgTarget.classList.contains('bannerCanimation')){
                imgTarget.classList.remove('bannerCanimation')
            }else{
                imgTarget.classList.add('bannerCanimation')
            }
            const containerPai = imgTarget.closest('.bannerF')
            const miniText = containerPai.querySelector('#miniText')
            if(miniText){
                if(miniText.classList.contains('pMini')){
                    miniText.classList.remove('pMini')
                }else{
                    miniText.classList.add('pMini')
                }
            }
        }else{
            return;
        }
    })
})