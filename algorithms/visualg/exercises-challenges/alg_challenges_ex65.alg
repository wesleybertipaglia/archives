Algoritmo "Ex65 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 2 valores e calcula a soma dos inteiros entre eles
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, soma, i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex65 - Lista de Desafios")
   escreval ("Fun��o: Recebe 2 valores e calcula a soma dos inteiros entre eles")

   escreva ("Digite o 1� valor: ")
   leia (n1)

   escreva ("Digite o 2� valor: ")
   leia (n2)

   //n2 tem que ser maior que o n1
   enquanto n2 < n1 faca
      escreva ("O 2� valor tem que ser maior que o 1�, digite novamente: ")
      leia (n2)
   fimenquanto

   para i de n1 ate n2 faca
      soma <- soma + i
   fimpara

   //resultado
   escreval
   escreval ("Soma: ", soma)

Fimalgoritmo