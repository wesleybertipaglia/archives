Algoritmo "Ex31 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe 3 valores e verifica se eles formam um triangulo
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   a, b, c: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex31 - Lista de Desafios")
   escreval ("Fun��o: Recebe 3 valores e verifica se eles formam um triangulo")

   //recebe 3 numeros
   escreva ("Digite o valor a: ")
   leia (a)

   escreva ("Digite o valor b: ")
   leia (b)

   escreva ("Digite o valor c: ")
   leia (c)

   //verifica se eles formam um triangulo
   escreval //pula linha
   se (a<(b+c)) e (b<(a+c)) e (c<(a+b)) entao
      escreval ("Os valores formam um triangulo")
   senao
      escreval ("Os valores n�o formam um triangulo")
   fimse

Fimalgoritmo