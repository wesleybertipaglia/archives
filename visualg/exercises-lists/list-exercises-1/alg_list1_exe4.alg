Algoritmo "app4-ex4-lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia final ponderada de um aluno
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 13/05/2021
Var
   // Se��o de Declara��es das vari�veis
   prova: vetor [0..2] de real
   I: inteiro
   nome: caractere
   media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   //limpa tela
   limpatela

   //apresenta o app
   escreval ("App 4 - Lista 1")
   escreval("Fun��o: Calcula a m�dia final ponderada de um aluno")

   //pula linha
   escreval ()

   //recebe o nome do aluno
   escreva ("Digite seu nome: ")
   leia (nome)

   //recebe as notas do aluno
   para I de 0 ate 2 passo 1 faca
      escreva ("Digite a nota da prova ", I+1, ": ")
      leia (prova[I])
   fimpara

   //calcula a m�dia ponderada
   media <- (prova[0]*2+prova[1]*3+prova[2]*5)/10

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Aluno: ", nome)
   escreval ("Nota 1 (peso 2): ", prova[0])
   escreval ("Nota 2 (peso 3): ", prova[1])
   escreval ("Nota 3 (peso 5): ", prova[2])
   escreval ("M�dia Final: ", media)
   escreval()

   se media >=6 entao

      escreval ("Situa��o: Aprovado")
   senao
      escreval ("Situa��o: Reprovado")
   fimse


Fimalgoritmo