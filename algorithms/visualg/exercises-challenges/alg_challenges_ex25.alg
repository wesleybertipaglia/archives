Algoritmo "Ex25 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o saldo de uma conta e verifica se � positivo
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   conta, saldo, debito, credito, saldoatual: real
   situacao: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex25 - Lista de Desafios")
   escreval ("Fun��o: Calcula o saldo de uma conta e verifica se � positivo")

   //recebe o numero da conta do cliente
   escreva ("Digite o n�mero da conta banc�ria: ")
   leia (conta)

   //recebe o saldo, debito e credito
   escreva ("Digite o saldo: ")
   leia (saldo)

   escreva ("Digite o debito: ")
   leia (debito)

   escreva ("Digite o cr�dito: ")
   leia (credito)

   //calcula o saldo atual
   saldoatual <- saldo - debito + credito

   //verifica se o saldo � positivo ou negativo
   se saldoatual > 0 entao
      situacao <- "positivo"
   senao
      situacao <- "negativo"
   fimse

   se saldoatual = 0 entao
      situacao <- "saldo zerado"
   fimse

   //limpa tela
   limpatela

   //resultados
   escreval ("Seu saldo atual � de: ", saldoatual)
   escreval ("Situa��o: ", situacao)

Fimalgoritmo