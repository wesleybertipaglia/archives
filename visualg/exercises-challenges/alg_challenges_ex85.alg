Algoritmo "Ex85 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a m�dia de temperatura num ano
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   t: vetor [1..365] de real
   i, inf: inteiro
   soma, media, menor, maior: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex85 - Lista de Desafios")
   escreval ("Fun��o: Calcula a m�dia de temperatura num ano")

   //recebe a 1� temperatura
   escreva ("Digite a temperatura m�dia do 1 dia: ")
   leia(t[1])
   menor <- t[1]
   maior <- t[1]
   soma <- t[1]

   //recebe as temperaturas m�dias
   para i de 2 ate 365 faca
      escreva ("Digite a temperatura m�dia do ", i, " dia: ")
      leia(t[i])

      soma <- soma + t[i]

      se (t[i]) > maior entao
         maior <- t[i]
      fimse

      se (t[i]) < menor entao
         menor <- t[i]
      fimse
   fimpara

   //calcula a m�dia
   media <- soma/365

   //dias do ano que t foi menor que a m�dia
   para i de 1 ate 365 faca
      se t[i] < media entao
         inf <- inf + 1
      fimse
   fimpara

   //resultados
   limpatela
   escreval ("Menor temperatura do ano: ", menor)
   escreval ("Maior temperatura do ano: ", maior)
   escreval ("Temperatura m�dia anual: ", media)
   escreval ("Dias que a temperatura foi inferior a m�dia: ", inf)

Fimalgoritmo