Algoritmo "Ex88 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Retira um numero digitado do vetor
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n: vetor [1..21] de inteiro
   i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex88 - Lista de Desafios")
   escreval ("Fun��o: Retira um numero digitado do vetor")

   //recebe o vetor
   para i de 1 ate 20 faca
      escreva ("Digite o n�mero ", i, ": ")
      leia (n[i])
   fimpara

   //recebe outro numero
   escreval
   escreva ("Digite outro n�mero: ")
   leia (n[21])

   //verifica se o vetor tem esse numero
   escreval
   escreval ("Resultado")
   para i de 1 ate 20 faca
      se n[21] <> n[i] entao
         escreval ("N�mero ", i, ": ", n[i])
      fimse
   fimpara

Fimalgoritmo