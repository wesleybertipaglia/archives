Algoritmo "App6-Ex6-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a comissao sobre vendas com o sal�rio fixo
// Autor(a)    : Wesley Berrtipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   nome: caractere
   salario_fixo, comissao, salario_final: real
   n_vendas: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 6 - Lista 1")
   escreval("Fun��o: Calcula a comissao sobre vendas com o sal�rio fixo")

   //pula linha
   escreval ()

   //atribui��o de vari�veis
   salario_fixo <- 1000

   //recebe o nome
   escreva ("Colaborador: ")
   leia (nome)

   //recebe o n�mero de vendas de software
   escreva ("Digite a Quantidade de softwares vendidos: ")
   leia (n_vendas)

   //calcula a comissao sobre vendas
   comissao <- 70*n_vendas

   //soma salario fixo e comiss�o
   salario_final <- salario_fixo + comissao

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Colaborador: ", nome)
   escreval ("Sal�ro: R$", salario_fixo)
   escreval ("Comiss�o sobre Vendas: R$", comissao)
   escreval ("Sal�rio Total: R$", salario_final)
Fimalgoritmo