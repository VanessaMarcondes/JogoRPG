
    function  certaResposta () {
            var  chances  =  3
            var  respostas  =  prompt ( "Qual a alternativa correta?" )

            while("chance >= 0")  {

                if  ( respostas  ==  "b" )  {
                    window.location.href = 'asvah2.html' ;
                }else {
                    alert ( 'Que pena! Você ainda tem ${chance} chances' )
                    chances -- ;
                    var  respostas  =  prompt ( "Qual a alternativa correta?" )
                }
            }
            window.location.href =  'gameover.html' ;
        }

