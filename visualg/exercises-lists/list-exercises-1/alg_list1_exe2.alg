Algoritmo "app2-ex2-lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Realiza a troca dos valores das variaveis a e b
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 13/05/2021
Var
   // Se��o de Declara��es das vari�veis
   a, b, aux: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //Limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 2 - Lista 1")
   escreval("Fun��o: Realiza a troca dos valores das variaveis a e b")

   //pula linha
   escreval ()

   //Atribui os valores das vari�veis
   a <- 5
   b <- 10

   //Mostra os valores antes da troca
   escreval ("Valores das Vari�veis")
   escreval ("A: ", a)
   escreval ("B: ", b)

   //Realiza a troca dos valores das vari�veis
   aux <- a   //vari�vel auxiliar recebe a
   a <- b   //vari�vel a recebe o valor de b
   b <- aux   //vari�vel b recebe o valor auxiliar

   //pula linha
   escreval()

   //Mostra os valores trocados
   escreval ("Valores Trocados")
   escreval ("A: ", a)
   escreval ("B: ", b)

Fimalgoritmo