Algoritmo "Ex11 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o salario de um vendedor de carros
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   salariofixo, salariofinal, carrosv, vendas, ccarros, ccarrosc, cvendas: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex11 - Lista de Desafios")
   escreval ("Fun��o: Calcula o salario de um vendedor de carros")
   escreval

   //recebe o salario fixo
   escreva ("Digite o sal�rio fixo: ")
   leia (salariofixo)

   //recebe a comissao por venda
   escreva ("Digite a comissao por carro vendido: ")
   leia (ccarros)

   //recebe o numero de carros vendidos
   escreva ("Digite o n�mero de carros vendidos: ")
   leia (carrosv)

   //recebe o valor total das vendas
   escreva ("Digite o valor total de vendas: ")
   leia (vendas)

   //calcula a comissao por carro vendido
   ccarrosc <- ccarros*carrosv

   //calcula a comissao sobre o valor das vendas
   cvendas <- vendas*(5/100)

   //calcula o salario final
   salariofinal <- salariofixo+ccarrosc+cvendas

   //pula linha
   escreval

   //resultados
   escreval ("Sal�rio fixo: ", salariofixo)
   escreval ("Comiss�o sobre carros vendidos: ", ccarrosc)
   escreval ("Comiss�o sobre o total de vendas: ", cvendas)
   escreval ("---------------------------------------------")
   escreval ("Sal�rio Final: ", salariofinal)

Fimalgoritmo