Algoritmo "Ex73 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Faz a m�dia do sal�rio e numero de filhos de uma popula��o
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   salario, ssalario, msalario, mfilhos, perc: real
   s150, filhos, sfilhos, cont: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex73 - Lista de Desafios")
   escreval ("Fun��o: Faz a m�dia do sal�rio e numero de filhos de uma popula��o")
   escreval ("OBS: o algoritmo termina com a entrada de salario negativo")

   salario <- 1
   enquanto salario > 0 faca
      //recebe sal�rio de cada habitante
      escreval
      escreva ("Digite o sal�rio: ")
      leia (salario)
      ssalario <- ssalario + salario

      se salario <= 150 entao
         s150 <- s150 + 1
      fimse

      //recebe n�mero de filhos de cada habitante
      escreva ("Digite o numero de filhos: ")
      leia (filhos)
      sfilhos <- sfilhos + filhos

      cont <- cont + 1
   fimenquanto

   //media de sal�rio da popula��o
   msalario <- ssalario/cont

   //m�dia de filhos da popula��o
   mfilhos <- sfilhos/cont

   //percentual de pessoas que recebem menos de R$ 150
   perc <- (s150*100)/cont

   //resultados
   escreval
   escreval ("Popula��o: ", cont)
   escreval ("M�dia de Sal�rios: ", msalario)
   escreval ("M�dia de filhos: ", mfilhos)
   escreval ("Percentual de Pessoas que recebem menos que R$150: ", perc, "%")

Fimalgoritmo