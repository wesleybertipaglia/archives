Algoritmo "Ex53 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Aprenta numeros inteiros de 1 a n
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   i, n: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex53 - Lista de Desafios")
   escreval ("Fun��o: Aprenta numeros inteiros de 1 a n")

   //recebe n
   escreva ("Digite um valor: ")
   leia (n)

   //verifica n
   enquanto n <= 0 faca
      escreva ("Digite um valor maior que 0: ")
      leia (n)
   fimenquanto

   //apresenta os n�meros
   para i de 1 ate n faca
      escreval (i)
   fimpara
Fimalgoritmo