Algoritmo "App17-Ex17-Lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Le uma matriz 5x5 e gerea outra matriz i�+j�
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 17/05/2021
Var
   // Se��o de Declara��es das vari�veis
   matriz: vetor [0..4,0..4] de inteiro
   aux: vetor [0..4,0..4] de inteiro
   i, j: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 17 - Lista 1")
   escreval ("Fun��o: Le uma matriz 5x5 e gera outra matriz i�+j�")

   //pula linha
   escreval()


   //recebe uma matriz 5x5
   para j de 0 ate 4 faca
      para i de 0 ate 4 faca
         escreva ("Digite o i da posi��o [",i+1,j+1,"]: ")
         leia(matriz[i])
         escreva ("Digite o j da posi��o [",i+1,j+1,"]: ")
         leia(matriz[j])
         matriz[i,j] <- matriz[i]*matriz[i]+matriz[j]*matriz[j]
      fimpara
      escreval()
   fimpara


   //mostra a matriz gerada
   para i de 0 ate 4 faca
      para j de 0 ate 4 faca
         escreva (matriz[i,j]:10)
      fimpara
      escreval()
   fimpara
Fimalgoritmo