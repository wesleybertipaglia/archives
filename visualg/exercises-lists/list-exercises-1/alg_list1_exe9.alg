Algoritmo "App9-Ex9-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe dois n�meros e realiza as quatro opera��es matem�ticas
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 16/05/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2: real
   soma, subtracao, multiplicacao, divisao: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 9 - Lista 1")
   escreval("Fun��o: L� dois n�meros e realiza as quatro opera��es matem�ticas")

   //pula linha
   escreval ()

   //recebe os n�meros
   escreva ("Digite o preimeiro n�mero: ")
   leia (n1)

   escreva ("Digite o segundo n�mero: ")
   leia (n2)

   //realiza os calculos matem�ticos
   soma <- n1 + n2
   subtracao <- n1 - n2
   multiplicacao <- n1 * n2

   //estrutura se estao. Verifica a divisao por 0
   se n2 = 0 entao
      divisao <- ("inexistente")
   senao
      divisao <- n1 / n2
   fimse

   //limpa a tela
   limpatela

   //exibe os resultados
   escreval ("Soma: ", soma)
   escreval ("Subtra��o: ", subtracao)
   escreval ("multiplica��o: ", multiplicacao)
   escreval ("Divis�o : ", divisao)


Fimalgoritmo