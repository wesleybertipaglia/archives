Algoritmo "Ex16 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o valor da compra de ma�as
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   macas: inteiro
   custo, compra: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex16 - Lista de Desafios")
   escreval ("Fun��o: Calcula o valor da compra de ma�as")

   //recebe o numero de ma�as compradas
   escreva ("Digite quantas ma�as foram compradas: ")
   leia (macas)

   escreval //pula linha

   //verifica o custo unitario
   se macas >= 12 entao
      custo <- 1
   senao
      custo <- 1.3
   fimse

   //calcula o total da compra
   compra <- macas*custo

   //resultado
   escreval ("Nota de Compra")
   escreval ("Ma�as: ", custo, " * ", macas)
   escreval ("Total da compra: ", compra)

Fimalgoritmo