Algoritmo "Ex86 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe um vetor e imprime em ordem crescente
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..10] de inteiro
   i, j, aux: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex86 - Lista de Desafios")
   escreval ("Fun��o: Recebe um vetor e imprime em ordem crescente")

   para i de 1 ate 10 faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (n[i])
   fimpara



   para i de 1 ate 9 faca
      para j de i ate 10 faca
         se n[j] < n[i] entao
            aux <- n[j]
            n[j] <- n[i]
            n[i] <- aux
         fimse
      fimpara
   fimpara

   //resultado
   escreval
   escreval ("Ordenados")
   para i de 1 ate 10 faca
      escreval (n[i])
   fimpara

Fimalgoritmo