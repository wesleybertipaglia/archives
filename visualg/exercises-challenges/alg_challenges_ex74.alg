Algoritmo "Ex74 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula as tabu�das do 1 ao 10
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   i, j: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex74 - Lista de Desafios")
   escreval ("Fun��o: Calcula as tabu�das do 1 ao 10")

   para i de 1 ate 10 faca
      escreval ("Tabu�da do ", i)
      para j de 1 ate 10 faca
         escreval (i, " * ", j, " = ", i*j)
      fimpara
      escreval
   fimpara

Fimalgoritmo