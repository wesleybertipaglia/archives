Algoritmo "Ex76 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Desenha um retangulo na tela formado pelo caractere "+"
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   i: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex76 - Lista de Desafios")
   escreval ("Fun��o: Desenha um retangulo na tela")
   escreval
   
   //primeira linha
   para i de 1 ate 60 faca
        posicionar (1,i)
        escreva ("+")
   fimpara

   //ultima linha
   para i de 1 ate 60 faca
        posicionar (10,i)
        escreva ("+")
   fimpara

   //primeira coluna
   para i de 1 ate 10 faca
        posicionar (i,1)
        escreva ("+")
   fimpara

   //ultima coluna
   para i de 1 ate 10 faca
        posicionar (i,60)
        escreva ("+")
   fimpara

Fimalgoritmo