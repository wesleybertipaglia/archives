Algoritmo "Ex41 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula m�dia ponderada
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, n3, mediaex, media: real
   conceito: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex41 - Lista de Desafios")
   escreval ("Fun��o: Calcula m�dia ponderada")

   //recebe as notas
   escreva ("Digite a nota 1: ")
   leia (n1)

   escreva ("Digite a nota 2: ")
   leia (n2)

   escreva ("Digite a nota 3: ")
   leia (n3)

   //recebe a m�dia dos exerc�cios
   escreva ("Digite a m�dia dos exerc�cios: ")
   leia (mediaex)

   //calcula a m�dia ponderada
   media <- (n1+(n2*2)+(n3*3)+mediaex)/7
   
   //verifica o conceito
   se (media >= 9) entao
      conceito <- "A"
   fimse
   
   se (media >= 7.5) e (media < 9) entao
      conceito <- "B"
   fimse
   
   se (media >= 6) e (media < 7.5) entao
      conceito <- "C"
   fimse
   
   se media < 6 entao
      conceito <- "D"
   fimse

   //resultado
   escreval
   escreval ("M�dia final: ", media)
   escreval ("Conceito: ", conceito)

Fimalgoritmo