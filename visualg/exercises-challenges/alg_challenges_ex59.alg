Algoritmo "Ex59 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 10 n�meros e verifica quantos s�o negativos
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   num: vetor [1..10] de inteiro
   i, negativo: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex59 - Lista de Desafios")
   escreval ("Fun��o: Recebe 10 n�meros e verifica quantos s�o negativos")

   para i de 1 ate 10 faca
      escreva ("Digite o n�mero ", i, ": ")
      leia (num[i])

      se num[i] < 0 entao
         negativo <- negativo + 1
      fimse
   fimpara

   //resultados
   escreval // pula linha

   escreval ("Negativos: ", negativo)
   escreval ("Positivos: ", 10 - negativo)
Fimalgoritmo