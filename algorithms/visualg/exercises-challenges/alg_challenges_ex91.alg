Algoritmo "Ex91 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica n�meros repetidos no vetor
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   vet, aux, p: vetor [1..50] de inteiro
   i, j, cont: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex91 - Lista de Desafios")
   escreval ("Fun��o: Verifica n�meros repetidos no vetor")

   //recebe o vetor
   para i de 1 ate 10 faca
        escreva ("Digite o n�mero ", i, ": ")
        leia (vet[i])
        aux[i] <- vet[i]
   fimpara
   
   //verifica repeti��es
   para i de 1 ate 10 faca
        para j de 10 ate 1 passo -1 faca
             se vet[i] = aux[i] entao
                cont <- cont + 1
                p[i] <- i
             fimse
        fimpara
   fimpara
   
   //resultados
   escreval
   escreval ("N�meros Reptidos: ", cont)
   escreval ("Posi��es")

Fimalgoritmo