Algoritmo "Ex22 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula salario e a hora extra
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   mes, semana, hora, extra, acrescimo, salario: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex22 - Lista de Desafios")
   escreval ("Fun��o: Calcula salario e a hora extra")

   //recebe o numero de horas trabalhadas em 1 mes
   escreva ("Digite o numero de horas trabalhadas no mes: ")
   leia (mes)

   //calcula horas trbalhadas semanais
   semana <- mes/4

   //recebe o salario por hora
   escreva ("Digite o salario por hora: ")
   leia (hora)

   //calcula as horas extras
   se semana > 40 entao
      extra <- (semana - 40)*4
      acrescimo <- extra*0.5
   fimse

   //calcula um mes de salario
   salario <- (mes+acrescimo)*hora

   //resultado
   limpatela //limpa tela
   escreval //pula linha
   escreval ("Horas trabalhadas semanais: ", semana)
   escreval ("Total de horas extras: ", extra)
   escreval ("Sal�rio por hora: ", hora)
   escreval ("Sal�rio Total: ", salario)

Fimalgoritmo