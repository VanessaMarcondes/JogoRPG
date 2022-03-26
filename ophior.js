function  certaResposta (){
    var  tentativas  =  2
    var  respostas  =  prompt ( "Qual a alternativa correta?" )

    while( tentativas > 0 )  {
      console.log('while')
        if  ( respostas  ==  "c" )  {
            console.log('if')
            location.href = "./ophior2.html"
            break; 
        }
        else {
            alert ( `Alternativa incorreta! Você ainda tem ${ tentativas } tentativas` )
            tentativas--;
            var  respostas = prompt ( "Qual a alternativa correta?" )
        }
        
    }
    if ( tentativas === 0 ){
    location.href = "gameover.html";
    }
}