Algoritmo "Ex12 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Transforma temperatura de �F para �c
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   f, c: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex12 - Lista de Desafios")
   escreval ("Fun��o: Transforma temperatura de �F para �c")

   //recebe temperatura em Fahrenheit
   escreva ("Digite a temperatura em graus �F: ")
   leia (f)

   //calcula temperatura correspondente em Celsius

   c <- ((f-32)*5)/9

   escreval //pula linha

   //resultados
   escreval ("�C: ", c)

Fimalgoritmo