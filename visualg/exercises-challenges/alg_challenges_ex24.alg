Algoritmo "Ex24 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a comissao e o salario
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   salario, vendas, comissao3, comissao5, excedente, salariototal: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex24 - Lista de Desafios")
   escreval ("Fun��o: Calcula a comissao e o salario")

   //recebe sal�rio
   escreva ("Digite o sal�rio: ")
   leia (salario)

   //recebe total de vendas
   escreva ("Digite o total de vendas: ")
   leia (vendas)

   //calcula comissao
   //de 3% sobre o total das vendas at� R$ 1.500,00 mais 5% sobre o que ultrapassar este valor
   se vendas >= 1500 entao
      comissao3 <- 1500 * (3/100)
      excedente <- vendas - 1500
      comissao5 <- excedente * (5/100)
   senao
      comissao3 <- vendas * (3/100)
   fimse

   //limpa tela
   limpatela

   //calcula o sal�rio total
   salariototal <- salario + comissao3 + comissao5

   //resultado
   escreval ("----------------------------")
   escreval ("Sal�rio fixo: ", salario)
   escreval ("Vendas: ", vendas)
   escreval ("Comiss�o: ", comissao3)
   escreval ("Comiss�o bonus: ", comissao5)
   escreval ("Sal�rio Total: ", salariototal)

Fimalgoritmo