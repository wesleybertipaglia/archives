Algoritmo "Ex89 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Verifica n�meros iguais em dois vetores e suas posi��es
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
// Se��o de Declara��es das vari�veis
v1, v2, p: vetor [1..15] de inteiro
i, cont: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

//apresenta o app
escreval ("Ex89 - Lista de Desafios")
escreval ("Fun��o: Verifica n�meros iguais em dois vetores e suas posi��es")

//recebe v1
escreval
escreval ("Vetor 1")
para i de 1 ate 15 faca
     escreva ("Digite o ", i, " valor: ")
     leia (v1[i])
fimpara

//recebe v2
escreval
escreval ("Vetor 12")
para i de 1 ate 15 faca
     escreva ("Digite o ", i, " valor: ")
     leia (v2[i])
     
     se v1[i] = v2[i] entao
        cont <- cont + 1
        p[i] <- i
     fimse
fimpara

//resultado
escreval
escreval ("N�meros iguais, na mesma posi��o: ", cont)
escreval
escreva ("Posi��es: ")
para i de 1 ate 15 faca
     se p[i] > 0 entao
        escreva (p[i])
     fimse
fimpara


Fimalgoritmo