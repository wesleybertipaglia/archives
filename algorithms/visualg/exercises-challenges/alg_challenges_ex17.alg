Algoritmo "Ex17 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia simples de um aluno
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex17 - Lista de Desafios")
   escreval ("Fun��o: Calcula a m�dia simples de um aluno")

   //recebe as notas
   escreva ("Digite a nota da 1� avalia��o: ")
   leia (n1)

   escreva ("Digite a nota da 2� avalia��o: ")
   leia (n2)

   escreval //pula linha

   //calcula media simples
   media <- (n1+n2)/2

   //resultado
   escreval ("M�dia final: ", media)

   se media >= 6 entao
      escreval ("Aprovado(a)")
   senao
      escreval ("Reprovado(a)")
   fimse

Fimalgoritmo