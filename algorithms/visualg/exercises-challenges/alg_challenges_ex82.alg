Algoritmo "Ex82 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe um n�mero que multiplica um vetor lido
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   a: vetor [1..10] de real
   m: vetor [1..10] de real
   i: inteiro
   x: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex82 - Lista de Desafios")
   escreval ("Fun��o: Recebe um n�mero que multiplica um vetor lido")

   //recebe o vetor a
   para i de 1 ate 10 faca
      escreva ("Digite o n�mero ", i, ": ")
      leia (a[i])
   fimpara

   //reccebe o n�mero x
   escreval
   escreval ("N�mero para multipli��o")
   escreva ("Digite o n�mero x: ")
   leia (x)

   //resultado
   para i de 1 ate 10 faca
      m[i] <- (a[i] * x)

      //imprime o resultado
      escreval (a[i], " * ", x, " = ", m[i])
   fimpara
Fimalgoritmo