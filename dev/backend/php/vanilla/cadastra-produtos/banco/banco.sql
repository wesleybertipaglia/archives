/* Arquivo para ser executado no MySQL */
-- Cria o banco de dados:
CREATE DATABASE Produtos;

-- Cria a tabela produtos (MySql):
CREATE TABLE produtos (
	ProdutoId int PRIMARY KEY AUTO_INCREMENT,
	NomeProduto varchar(255) NOT NULL,
	DescricaoProduto varchar(255) NOT NULL,
	DisponibilidadeProduto varchar(255) NOT NULL,
	ValorProduto float NOT NULL
);

-- Cria o procedimento para eventual busca de produtos: 
CREATE PROCEDURE SelecionarProdutos
AS
SELECT * FROM produtos
ORDER BY NomeProduto AND ValorProduto -- ordenação por valor e nome
GO;