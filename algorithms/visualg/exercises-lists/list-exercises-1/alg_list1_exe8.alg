Algoritmo "App8-Ex8-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o juros de uma presta��o
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   nome: caractere
   v_prestacao, taxa, juros, t_prestacao: real
   d_atraso: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 8 - Lista 1")
   escreval("Fun��o: Calcula o juros de uma presta��o")

   //pula linha
   escreval ()

   //recebe o nome do cliente
   escreva ("Nome do Cliente: ")
   leia (nome)

   //recebe o valor da presta��o
   escreva ("Digite o Valor da Presta��o: ")
   leia(v_prestacao)

   //recebe a taxa de juros
   escreva ("Digite a taxa de juros: ")
   leia (taxa)

   //recebe os dias de atraso
   escreva ("Digite a quantidade de dias de atraso: ")
   leia (d_atraso)

   //estrutura se para calculo de juros
   se d_atraso <= 30 entao
      juros <- v_prestacao*(taxa/100)
   senao
      juros <- v_prestacao*(taxa/100)*d_atraso
   fimse

   //calcula o total da presta��o
   t_prestacao <- v_prestacao + juros

   //exibe os resultados
   escreval ("Cliente: ", nome)
   escreval ("Valor da Parcela: ", v_prestacao)
   escreval ("Dias de atraso: ", d_atraso)
   escreval ("Juros: ", juros)
   escreval("------------------------------------")
   escreval ("Total a ser pago: R$", t_prestacao)
Fimalgoritmo