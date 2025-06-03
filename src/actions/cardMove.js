export function cardMoviment(){
  const catalogo = document.querySelector('.catalogo')

  if(catalogo){

    let isDragging = false
    let startPosition = 0
    let scrollLeftStart = 0

        //função acionada apenas quando o mouse é pressionado
    catalogo.addEventListener('mousedown', (event)=>{
      
      //verifica se o botão do mouse é o esquerdo (0)
      if(event.button !== 0) return console.log('Pressione com o botão Esquerdo do Mouse!')
        
        //arrastar se torna verdadeiro
      isDragging = true
      catalogo.classList.add('active-dragging') //classe que customiza o cursos

        //captura a posição inicial do mouse
      startPosition = event.pageX

        //captura a posição inicial da barra de rolagem 
      scrollLeftStart = catalogo.scrollLeft //catalogo.scrollLeft é a distância que o contêiner foi rolado

      event.preventDefault() //impede o navegador de arrastar imagens ou selecionar textos
    })

      //adiciona o evento na página inteira para caso o cursos saia de dentro do container enquanto está pressionado
    document.addEventListener('mousemove', (event)=>{

      if (!isDragging) return; //verifica se o botão mouse está segurando o clique
        // captura o movimento do mouse (event.pageX) e diminui a posição do clique inicial
      const distanceMoved = event.pageX - startPosition

        //pegar a posição inicial da barra de rolagem (scrollLeftStart) e subtrai ou soma pelo movimento do mouse
      const scrollTo = scrollLeftStart - distanceMoved

        //passa o valor do movimento do mouse para a barra de rolagem
      catalogo.scrollLeft = scrollTo
    })

    document.addEventListener('mouseup', ()=>{ //quando soltar o mouse
      verify()//soltar o mouse com o catalogo ativo
    })

    catalogo.addEventListener('mouseleave', ()=>{
      verify()//caso saia do elemento container, considerar que o botão do mouse foi solto
    })


    function verify(){ //função pra reutilizar a lógica
      if(isDragging){ 
        isDragging = false
        catalogo.classList.remove('active-dragging')
      }
    }
  }
}