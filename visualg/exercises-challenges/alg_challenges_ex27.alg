Algoritmo "Ex27 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica se o valor � positivo, negativo ou 0
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: real
   result: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex27 - Lista de Desafios")
   escreval ("Fun��o: Verifica se o valor � positivo, negativo ou 0")

   //recebe um valor
   escreva ("Digite um valor: ")
   leia (n)

   //verifica se � positivo, negativo ou zero
   se n > 0 entao
      result <- "Positivo"
   senao
      result <- "Negativo"
   fimse

   se n = 0 entao
      result <- "Zero"
   fimse

   //resultado
   escreval ("O numero � ", result)

Fimalgoritmo