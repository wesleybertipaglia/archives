Algoritmo "Ex81 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Mostra o menor valor e sua posi��o num vetor
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   q: vetor [1..20] de inteiro
   i, menor, posicaomenor: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex81 - Lista de Desafios")
   escreval ("Fun��o: Mostra o menor valor e sua posi��o num vetor")
   escreval

   //recebe o primeiro valor e atribui a ele, maior e menor para comparar
   escreva ("Digite o valor 1: ")
   leia (q[1])
   menor <- q[1]
   posicaomenor <- 1

   enquanto q[1] < 0 faca
            escreva ("Digite um n�mero positivo: ")
            leia Q[1]
   fimenquanto

   //recebe os demais valores e verifica qual o maior e o menor
   para i de 2 ate 20 faca
      escreva ("Digite o valor ", i, ": ")
      leia (q[i])
      
      enquanto q[i] < 0 faca
            escreva ("Digite um n�mero positivo: ")
            leia (Q[i])
      fimenquanto

      se q[i] < menor entao
         menor <- q[i]
	 posicaomenor <- i
      fimse
   fimpara

   //resultados
   escreval
   escreval ("Menor: ", menor)
   escreval ("Posi��o do menor n�mero: ", posicaomenor)

Fimalgoritmo