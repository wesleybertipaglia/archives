Algoritmo "Ex68 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a soma e a m�dia do valor de estoque
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   v: vetor [1..1000] de inteiro
   mercadoria, i: inteiro
   soma, media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex68 - Lista de Desafios")
   escreval ("Fun��o: Calcula a soma e a m�dia do valor de estoque")

   escreva ("Digite o numero de mercadorias diferentes: ")
   leia(mercadoria)

   para i de 1 ate mercadoria faca
      escreva ("Digite o valor da mercadoria ", i, ": ")
      leia (v[i])

      soma <- soma + v[i]
   fimpara

   media <- soma/mercadoria

   //resultados
   escreval
   escreval ("N�mero de mercadorias diferentes: ", mercadoria)
   escreval ("Soma dos pre�os ", soma)
   escreval ("M�dia de pre�os ", media)

Fimalgoritmo