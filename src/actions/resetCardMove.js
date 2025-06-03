function resetCardMove(){
  //scrollWidth é o tamanho total do elemento
        //clientWidth é a parte visível do elemento
      const maxScrollLeft = catalogo.scrollWidth - catalogo.clientWidth

      if(catalogo.scrollLeft >= maxScrollLeft - 1){
        scrollLeftStart = 0
        catalogo.scrollLeft = 0
        startPosition = event.pageX
      }else if(catalogo.scrollLeft <= 0){
        catalogo.scrollLeft = maxScrollLeft
        scrollLeftStart = maxScrollLeft
        startPosition = event.pageX
      }
}