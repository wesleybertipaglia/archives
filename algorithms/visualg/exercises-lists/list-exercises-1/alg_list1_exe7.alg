Algoritmo "App7-Ex7-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Determina o total pago por um consorciado e o saldo devedor
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   nome, t_consorcio: caractere
   nt_prestacao, qp_paga, qp_restante: inteiro
   v_prestacao, t_pago, s_devedor, vt_consorcio: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 7 - Lista 1")
   escreval("Fun��o: Calcula o total pago por um consorciado e o saldo devedor")

   //pula linha
   escreval ()

   //recebe o nome do consorciado
   escreva ("Digite seu nome: ")
   leia (nome)

   //recebe o tipo de cons�rcio do cliente
   escreva ("Qual o tipo de cons�rcio? ")
   leia (t_consorcio)

   //recebe o valor da presta��o
   escreva ("Digite o valor da presta��o: ")
   leia (v_prestacao)

   //recebe o numero total de presta��es
   escreva ("Digite o n�mero total de presta��es: ")
   leia (nt_prestacao)

   //calcula o valor total do cons�rcio
   vt_consorcio <- v_prestacao * nt_prestacao

   //recebe a quantidade de presta��es pagas
   escreva ("Digite a quantidade de presta��es pagas: ")
   leia (qp_paga)

   //calcula a quantidade de presta��es restantes
   qp_restante <- nt_prestacao - qp_paga

   //calcula o total pago
   t_pago <- v_prestacao * qp_paga

   //calcula o saldo devedor
   s_devedor <- qp_restante * v_prestacao

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Cliente: ", nome)
   escreval ("Cons�rcio ", t_consorcio)
   escreval ("Valor das Presta��es: ", v_prestacao)
   escreval ("Valor Total do Cons�rcio: R$", vt_consorcio)
   escreval ("Quantidade de Presta��es: ", nt_prestacao)
   escreval ("Quantidade de Presta��es Pagas: ", qp_paga)
   escreval ("Quantidade de Presta��es Restantes: ", qp_restante)
   escreval()
   escreval (---------------------------------------------------)
   escreval ("Valor Pago: R$", t_pago)
   escreval ("Saldo Devedor: R$", s_devedor)
Fimalgoritmo