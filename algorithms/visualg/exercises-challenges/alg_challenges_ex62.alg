Algoritmo "Ex62 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe o n�mero de alunos e calcula a m�dia de notas na sala
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..10] de real
   alunos, i: inteiro
   media: real
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex62 - Lista de Desafios")
   escreval ("Fun��o: Recebe o n�mero de alunos e calcula a m�dia de notas")

   //recebe o n�mero de alunos na turma
   escreval
   escreva ("Digite o n�mero de alunos na turma: ")
   leia (alunos)

   para i de 1 ate alunos faca
      escreva ("Digite a nota do aluno ", i, ": ")
      leia(n[i])
      media <- media + n[i]
   fimpara

   //calcula m�dia das notas
   media <- media/alunos

   //resultado
   escreval
   escreval ("M�dia das notas: ", media)

Fimalgoritmo