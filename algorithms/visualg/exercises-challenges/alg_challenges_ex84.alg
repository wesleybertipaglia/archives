Algoritmo "Ex84 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe n tamanho do vetor, vetor a e b e cria um vetor soma
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   a, b, soma: vetor [1..100] de real
   n, i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex84 - Lista de Desafios")
   escreval ("Fun��o: Recebe tamanho do vetor, vetor a e b, imprime vetor soma")

   //recebe n
   escreva ("Digite o tamanho do vetor: ")
   leia (n)

   //recebe vetor a (tam n)
   escreval
   escreval ("Vetor A")
   para i de 1 ate n faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (a[i])
   fimpara

   //recebe vetor b (tam n)
   escreval
   escreval ("Vetor B")
   para i de 1 ate n faca
      escreva ("Digite o ", i, " n�mero: ")
      leia (b[i])
   fimpara

   //vetor soma (v[a] + v[b])
   escreval
   escreval ("Vetor Soma (A+B)")
   para i de 1 ate n faca
      soma[i] <- (a[i]) + (b[i])

      escreval (soma[i])
   fimpara

Fimalgoritmo