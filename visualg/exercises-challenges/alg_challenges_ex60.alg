Algoritmo "Ex60 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 10 valores e verifica quantos est�o entre [10,20]
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   num: vetor [1..10] de inteiro
   i, dentro, fora: inteiro
   
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex60 - Lista de Desafios")
   escreval ("Fun��o: Recebe 10 valores e verifica quantos est�o entre [10,20]")

   para i de 1 ate 10 faca
      escreva ("Digite o valor ", i, ": ")
      leia (num[i])

      se (num[i]>=10) e (num[i] <= 20) entao
         dentro <- dentro + 1
      senao
         fora <- fora + 1
      fimse
   fimpara

   //resultados
   escreval //pula linha
   escreval ("N�meros dentro do intervalo: ", dentro)
   escreval ("N�meros fora do intervalo: ", fora)

Fimalgoritmo