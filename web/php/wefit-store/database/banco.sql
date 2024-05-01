/* Arquivo para ser executado no MySQL */
-- Cria o banco de dados:
CREATE DATABASE WeFit;

-- Cria a tabela produtos:
CREATE TABLE Produtos (
	IdProduto INT PRIMARY KEY AUTO_INCREMENT,
	NomeProduto VARCHAR(50) NOT NULL,
	DescricaoProduto VARCHAR(255) NOT NULL,
	DisponibilidadeProduto VARCHAR(5) NOT NULL,
	ValorProduto DECIMAL(10,2) NOT NULL
);

-- Cria a tabela descontos:
CREATE TABLE Descontos (
	idDesconto INT PRIMARY KEY AUTO_INCREMENT,
	NomeDesconto VARCHAR(50) NOT NULL,
	ValorDesconto INT NOT NULL
);

-- Cria a tabela clientes:
CREATE TABLE Clientes (
	IdCliente INT PRIMARY KEY AUTO_INCREMENT,
	NomeCliente VARCHAR(50) NOT NULL,
	CpfCliente VARCHAR(14) NOT NULL, -- 000.000.000-00
	TelefoneCliente VARCHAR(14) NOT NULL, -- (00)00000-0000
	EmailCliente VARCHAR(50) NOT NULL
);

-- Cria a tabela vendedores:
CREATE TABLE Vendedores (
	IdVendedor INT PRIMARY KEY AUTO_INCREMENT,
	NomeVendedor VARCHAR(50) NOT NULL,
	CpfVendedor VARCHAR(14) NOT NULL, -- 000.000.000-00
	SalarioVendedor DECIMAL(10,2) NOT NULL
);

-- Cria a tabela fornecedores:
CREATE TABLE Fornecedores (
	IdFornecedor INT PRIMARY KEY AUTO_INCREMENT,
	NomeFornecedor VARCHAR(50) NOT NULL,
	CnpjFornecedor VARCHAR(18) NOT NULL, -- 00.000.000/0000-00
	TeleforneFornecedor VARCHAR(14) NOT NULL,
	EmailFornecedor VARCHAR(50) NOT NULL
);