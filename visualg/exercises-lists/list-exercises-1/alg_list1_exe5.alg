Algoritmo "App5-Ex5-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o sal�rio mensal e comiss�o sobre vendas
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   porcentagem_comissao, comissao: real
   salario, venda, salario_comissao: real
   nome: caractere
   c_salario, c_comissao: caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 5 - Lista 1")
   escreval("Fun��o: Calcula o sal�rio mensal e comiss�o sobre vendas")

   //pula linha
   escreval ()

   //recebe o nome
   escreva ("Digite seu nome: ")
   leia (nome)

   //confirma o salario
   escreva ("O sal�rio fixo � R$ 1500,00? (S/N) ")
   leia (c_salario)

   //estrutura de decis�o confirma��o sal�rio
   se c_salario = ("S") entao
      salario <- 1500
   senao
      escreva ("Digite o sal�rio: ")
      leia (salario)
   fimse

   //confirma a comissao
   escreva ("A comiss�o � de 15%? (S/N) ")
   leia (c_comissao)

   //estrutura de decis�o confirma��o comiss�o
   se c_comissao = ("S") entao
      porcentagem_comissao <- 15
   senao
      escreva ("Digite a Taxa de Comiss�o: ")
      leia (porcentagem_comissao)
   fimse

   //recebe a venda mensal
   escreva ("Digite a venda mensal: ")
   leia (venda)


   //calcula a comissao
   comissao <- venda*(porcentagem_comissao/100)


   //soma salario e comissao
   salario_comissao <- salario + comissao

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Colaborador: ", nome)
   escreval ("Salario Fixo: R$", salario)
   escreval ("Vendas: R$", venda)
   escreval ("Comiss�o: R$", comissao)
   escreval ("Total: R$", salario_comissao)

Fimalgoritmo