Algoritmo "Ex42 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica situa��o de aposentadoria
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   codigo, nasc, ingre, idade, trabalho: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex42 - Lista de Desafios")
   escreval ("Fun��o: Verifica situa��o de aposentadoria")

   //reccebe informa��es do empregado
   escreva ("Digite o c�digo do empregado: ")
   leia (codigo)

   escreva ("Digite o ano de nascimento: ")
   leia (nasc)

   escreva ("Digite o ano de ingresso na empresa: ")
   leia (ingre)

   //escreve a idade e o tempo na empresa
   idade <- 2021 - nasc
   trabalho <- 2021 - ingre

   //resultado
   escreval //pula linha
   escreval ("Idade: ", idade)
   escreval ("Tempo trabalhado na empresa: ", trabalho)

   se (idade >= 60) e (trabalho >= 25) entao
      escreval ("Requerer aposentadoria")
   fimse

   se (idade >= 65) ou (trabalho >= 30) entao
      escreval ("Requerer aposentadoria")
   senao
      escreval ("N�o requerer aposentadoria")
   fimse


Fimalgoritmo