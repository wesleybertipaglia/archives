Algoritmo "Ex9 - Lista de Desafios"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Calcula o reajuste salari�l
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 22/06/2021
Var
   // Se��o de Declara��es das vari�veis
   salario, percreajuste, reajuste, novosalario: real
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //apresenta o app
   escreval ("Ex9 - Lista de Desafios")
   escreval ("Fun��o: Calcula o reajuste salari�l")

   //recebe sal�rio
   escreva ("Digite o sal�rio: ")
   leia (salario)

   escreval //pula linha

   //recebe percentual de reajuste
   escreva ("Digite o percentual de reajuste: ")
   leia (percreajuste)

   escreval //pula linha

   //calcula reajuste
   reajuste <- salario*(percreajuste/100)
   novosalario <- salario+reajuste

   //resultados
   escreval ("O reajuste � de: ", reajuste)
   escreval ("O novo sal�rio � de: ", novosalario)

Fimalgoritmo