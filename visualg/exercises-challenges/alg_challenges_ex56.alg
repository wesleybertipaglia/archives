Algoritmo "Ex56 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Apresenta a tabu�da de n
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   i, n: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex56 - Lista de Desafios")
   escreval ("Fun��o: Apresenta a tabu�da de n")

   //recebe n
   escreva ("Digite n: ")
   leia (n)

   //resultado
   escreval //pula linha

   para i de 1 ate 10 faca
      escreval (i, " x ", n, " = ", i*n)
   fimpara

Fimalgoritmo