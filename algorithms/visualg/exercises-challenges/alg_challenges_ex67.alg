Algoritmo "Ex67 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia da soma dos n�meros inteiros entre 15 e 100
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   i, soma: inteiro
   media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex67 - Lista de Desafios")
   escreval ("Fun��o: Calcula a m�dia da soma dos n�meros inteiros entre 15 e 100")

   //recebe a soma
   para i de 15 ate 100 faca
      soma <- soma + i
   fimpara

   //calcula a m�dia
   media <- soma/(100-15)

   //resultado
   escreval
   escreval ("Soma: ", soma)
   escreval ("M�dia: ", media)
Fimalgoritmo