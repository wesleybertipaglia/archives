Algoritmo "Ex21 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   :
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   fim, ini, duracao: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex21 - Lista de Desafios")
   escreval ("Fun��o: ")

   //recebe as horas
   escreva ("Digite a hora de inicio: ")
   leia (ini)

   escreva ("Digite a hora de t�rmino: ")
   leia (fim)

   //a dura��o do jogo n�o pode passar de 24h
   enquanto fim > ini faca
      escreva ("O jogo n�o pode passar de 24h, digite novamente: ")
      leia (fim)
   fimenquanto

   //calcula a dura��o do jogo
   duracao <- (24 - ini) + fim

   escreval //pula linha

   //resultado
   escreval ("A dura��o do jogo foi de: ", duracao, " horas")

Fimalgoritmo