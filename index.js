
    functio  certaResposta (tentativa) {
            var  tentativas  =  3
            var  respostas  =  prompt ( "Qual a alternativa correta?" )

            while("tentativa > 0")  {

                if  ( respostas  ==  "b" )  {
                    window.location.href = 'asvah2.html' ;
                }else {
                    alert ('Que pena! Você ainda tem ${ tentativa } tentativa')
                    tentativas -- ;
                    var  respostas  =  prompt ( "Qual a alternativa correta?" )
                }
            }
            window.location.href =  'gameover.html' ;
        }

        certaResposta(tentativa)

