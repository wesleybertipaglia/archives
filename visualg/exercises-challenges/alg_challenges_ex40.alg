Algoritmo "Ex40 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o custo de uma compra
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
// Se��o de Declara��es das vari�veis
nome: caractere
quantidade: inteiro
pund, desconto, total, pagar: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

//apresenta o app
escreval ("Ex40 - Lista de Desafios")
escreval ("Fun��o: Calcula o custo de uma compra")

//recebe a descri��o do produto
escreva ("Digite o nome do produto: ")
leia (nome)

escreva ("Digite a quantidade adquirida: ")
leia (quantidade)

escreva ("Digite o pre�o unit�rio: ")
leia (pund)

//calcula o total antes do desconto
total <- quantidade * pund

//calcula o desconto
se quantidade <= 5 entao
   desconto <- total*(2/100)
fimse

se (quantidade > 5) e (quantidade<=10) entao
   desconto <- total*(3/100)
fimse

se quantidade > 10 entao
   desconto <- total* (5/100)
fimse

//resultado
pagar <- total - desconto

escreval //pula linha
escreval ("Total: ", total)
escreval ("Desconto: ", desconto)
escreval ("A pagar: ", pagar)

Fimalgoritmo