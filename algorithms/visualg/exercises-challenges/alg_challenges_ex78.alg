Algoritmo "Ex78 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 10 nomes e faz a busca de um nome no vetor lido
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..10] de caractere
   i: inteiro
   nome: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex78 - Lista de Desafios")
   escreval ("Fun��o: Recebe 10 nomes e faz a busca de um nome no vetor lido")

   para i de 1 ate 10 faca
      escreva ("Digite o nome ", i, ": ")
      leia (n[i])
   fimpara
   escreval

   escreva ("Busca por nomes")
   escreva ("digite um nome: ")
   leia (nome)
   escreval

   para i de 1 ate 10 faca
      se nome = n[i] entao
         escreval ("Nome encontrado")
      senao
         escreval ("Nome n�o encontrado")
      fimse
   fimpara

Fimalgoritmo