Algoritmo "Ex15 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica se o numero digitado � positivo ou negativo
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex15 - Lista de Desafios")
   escreval ("Fun��o: Verifica se o numero digitado � positivo ou negativo")

   //recebe o numero
   escreva ("Digite um n�mero: ")
   leia (n)

   escreval //pula linha

   se n >= 0 entao
      escreval ("O n�mero � positivo")
   senao
      escreval ("O n�mero � negativo")
   fimse

Fimalgoritmo