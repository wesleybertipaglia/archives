Algoritmo "Ex61 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 10 valores e calcula a m�dia aritm�tica deles
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..10] de inteiro
   i: inteiro
   media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex61 - Lista de Desafios")
   escreval ("Fun��o: Recebe 10 valores e calcula a m�dia aritm�tica deles")

   //recebe os valores
   para i de 1 ate 10 faca
      escreva ("Digite o valor ", i, ": ")
      leia (n[i])
      media <- media + n[i]
   fimpara

   //calcula a m�dia
   media <- media/10

   //resultados
   escreval
   escreval ("M�dia: ", media)

Fimalgoritmo