Algoritmo "Ex36 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula a soma e o produto entre as idades de 4 pessoas
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   h1, h2, m1, m2, novo, velho, nova, velha: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex36 - Lista de Desafios")
   escreval ("Fun��o: Calcula a soma e o produto entre as idades de 4 pessoas")

   //recebe as idades dos homens
   escreva ("Digite a idade do 1� Homem: ")
   leia (h1)

   escreva ("Digite a idade do 2� Homem: ")
   leia (h2)

   //verifica se as idades dos homens s�o diferentes
   enquanto h1 = h2 faca
      escreva ("As idades tem que ser diferentes, digite novamente: ")
      leia (h2)
   fimenquanto

   //verifica qual o homem mais velho e o mais novo
   se h1 > h2 entao
      velho <- h1
      novo <- h2
   senao
      velho <- h2
      novo <- h1
   fimse

   //recebe as idades das mulheres
   escreva ("Digite a idade do 1� Mulher: ")
   leia (m1)

   escreva ("Digite a idade do 2� Mulher: ")
   leia (m2)

   //verifica se a idade das mulheres s�o diferentes
   enquanto m1 = m2 faca
      escreva ("As idades tem que ser diferentes, digite novamente: ")
      leia (m2)
   fimenquanto

   //verifica qual a mulher mais velha e mais nova
   se m1 > m2 entao
      velha <- m1
      nova <- m2
   senao
      velha <- m2
      nova <- m1
   fimse

   //resultados
   escreval //pula linha
   //soma entre o homem mais velho e a mulher mais nova
   escreval ("Homem mais velho + Mulher mais nova = ", velho+nova)

   //calcula o produto entre o homem mais novo e a mulher mais velha
   escreval ("Homem mais novo * mulher mais velha = ", novo * velha)


Fimalgoritmo