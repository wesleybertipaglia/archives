Algoritmo "Ex7 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : l� a idade de uma pessoa e a escreve apenas em dias
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   ano, meses, dias: inteiro
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex7 - Lista de Desafios")
   escreval ("Fun��o: l� a idade de uma pessoa e a escreve apenas em dias")

   //recebe a idade da pessoa
   escreva ("Quantos anos voc� tem de idade? ")
   leia (ano)

   escreval

   escreva ("Tirando os anos, quantos meses sobram? ")
   leia (meses)

   escreval

   escreva ("Tirando os anos e os meses, quantos dias sobram? ")
   leia (dias)

   //calcula a idade em dias (1 ano = 365 dias)
   ano <- ano * 365
   meses <- meses * 30
   dias <- dias + ano + meses

   //resultados
   escreval
   escreval ("Voc� tem ", dias, " dias de idade")

Fimalgoritmo