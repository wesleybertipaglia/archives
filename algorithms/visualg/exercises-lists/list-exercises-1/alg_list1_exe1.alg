Algoritmo "App1-ex1-lista1"
// Disciplina  :  [Inform�tica e Neg�cios -  L�gica de Programa��o]
// Professor   : Francisco Antonio de Almeida  ( Xyko Almeida)
// Descri��o   : Recebe e mostra variaveis nome, idade e sal�rio
// Autor(a)    : Wesley Bertipaglia
// Data atual  : 13/05/2021
Var
   // Se��o de Declara��es das vari�veis
   nome : caracter
   idade : inteiro
   salario : real


Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   //limpa a tela
   limpatela

   //apresenta o app
   escreval ("App 1 - Lista 1")
   escreval("Fun��o: Recebe e mostra variaveis nome, idade e sal�rio")

   //pula linha
   escreval ()

   //recebe o nome do usu�rio
   escreva("Ol�, digite seu nome: ")
   leia (nome)
   limpatela

   //recebe a idade do usu�rio
   escreva ("Agora, digite sua idade: ")
   leia (idade)
   limpatela

   //recebe o sal�rio do usu�rio
   escreva ("Por fim, digite seu sal�rio: ")
   leia (salario)
   limpatela

   //mostra as informa��es recolhidas
   escreval ("Nome: ", nome)
   escreval ("Idade: ", idade)
   escreval ("Sal�rio: R$", salario)

Fimalgoritmo