Algoritmo "Ex33 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe dois n�meros e verifica qual o maior
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   n1, n2: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex33 - Lista de Desafios")
   escreval ("Fun��o: Recebe dois n�meros e verifica qual o maior")

   //recebe 2 valores
   escreva ("Digite o 1� valor: ")
   leia (n1)

   escreva ("Digite o 2� valor: ")
   leia (n2)

   //resultados
   escreval //pula linha
   se n1 > n2 entao
      escreval ("O primeiro n�mero � maior")
   senao
      escreval ("O segundo n�mero � maior")
   fimse

   se n1 = n2 entao
      escreval ("Os n�meros s�o iguais")
   fimse

Fimalgoritmo