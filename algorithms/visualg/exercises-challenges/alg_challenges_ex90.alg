Algoritmo "Ex90 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica quantas vezes um n�mero aparece no vetor
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..31] de inteiro
   i, cont: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex90 - Lista de Desafios")
   escreval ("Fun��o: Verifica quantas vezes um n�mero aparece no vetor")

   //recebe o vetor
   para i de 1 ate 30 faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (n[i])
   fimpara

   //recebe outro valor
   escreval
   escreva ("Digite outro valor: ")
   leia (n[31])

   //conta quantas vezes o numero aparece no vetor
   para i de 1 ate 30 faca
      se n[31] = n[i] entao
         cont <- cont + 1
      fimse
   fimpara

   //resultados
   escreval
   escreval ("O n�mero digitado aparece ", cont, " vezes no vetor")

Fimalgoritmo