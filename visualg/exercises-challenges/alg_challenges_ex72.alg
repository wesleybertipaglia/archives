Algoritmo "Ex72 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe pre�o e c�digo de 15 produtos, mostra o maior pre�o e a m�dia
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   c: vetor [1..15] de inteiro
   p: vetor [1..15] de real
   i: inteiro
   maior, menor, soma, media: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex72 - Lista de Desafios")
   escreval ("Fun��o: Recebe pre�o, mostra o maior pre�o e a m�dia")

   //recebe dados do 1� produto
   escreva ("Digite o c�digo do produto 1: ")
   leia (c[1])

   escreva ("Digite o pre�o do produto: ")
   leia (p[1])
   escreval

   //aloca��o das vari�veis para efeito de compara��o
   maior <- p[1]
   menor <- p[1]

   //aloca��o do pre�o � soma
   soma <- p[1]

   //recebe dados dos outros 14 produtos
   para i de 2 ate 15 faca
      escreva ("Digite o c�digo do produto ", i, ": ")
      leia (c[i])

      escreva ("Digite o pre�o do produto: ")
      leia (p[i])
      escreval

      //verifica��o maior e menor para os pre�os
      se p[i] > maior entao
         maior <- p[i]
      fimse

      se p[i] < menor entao
         menor <- p[i]
      fimse

      //soma dos pre�os para calcular a m�dia
      soma <- soma + p[i]
   fimpara

   //calcula a m�dia
   media <- soma/15

   //resultados
   escreval
   escreval ("Soma dos pre�os: ", soma)
   escreval ("M�dia dos pre�os: ", media)
   escreval ("Maior pre�o: ", maior)
   escreval ("Menor pre�o: ", menor)

Fimalgoritmo