/* a)	Consulte todos os propriet�rios e seus respectivos im�veis. Ordene pelo nome do propriet�rio. */
select IM.idImovel, IM.descricao, IM.proprietarioId, pe.nome
from Imoveis IM, Proprietarios PR, Pessoas PE
where IM.proprietarioId = PR.pessoa_id and
PR.pessoa_id = PE.idPessoa
ORDER BY PE.nome

/* b)	Crie uma view para realizar a consulta do item a. */
create view consulta_item_a as
select IM.idImovel, IM.descricao, IM.proprietarioId, pe.nome
from Imoveis IM, Proprietarios PR, Pessoas PE
where IM.proprietarioId = PR.pessoa_id and
PR.pessoa_id = PE.idPessoa
ORDER BY PE.nome

select * from consulta_item_a --test

/* c)	Fa�a uma View que mostra todos os im�veis e qual a sua situa��o (alugado, dispon�vel ou inativo). Deve ter como sa�da: os dados do im�vel e sua situa��o. */
create view consulta_imoveis as
select IM.idImovel, IM.proprietarioId, IM.descricao, IM.situacao, IM.inquilinoId
from Imoveis IM

SELECT * FROM consulta_imoveis --test

/* d)	Fa�a uma View que mostre todos os im�veis alugados e quem � o inquilino. Deve ter a sa�da: todos os dados do im�vel, o nome e o telefone do inquilino. */
create view consulta_imoveis_alugados as
select IM.idImovel, IM.descricao, IM.situacao, INQ.pessoa_id, PE.nome
from Imoveis IM, Inquilinos INQ, Pessoas PE
where PE.idPessoa = INQ.pessoa_id and
PE.idPessoa = IM.inquilinoId and 
IM.situacao = 1

select * from consulta_imoveis_alugados --test

/* e)	Fa�a uma procedure para cadastrar o propriet�rio e seu im�vel. Lembre-se que propriet�rio � uma pessoa. */
create procedure cadastra_proprietario_e_imovel 
@pessoa_nome varchar(50),
@pessoa_cpf varchar(14),
@pessoa_status int,
@proprietario_agencia int,
@proprietario_conta int,
@imovel_descricao varchar(100),
@imovel_valor money

as 
	declare @id int
	set @id = @@IDENTITY

	insert into Pessoas values (@pessoa_nome, @pessoa_cpf, @pessoa_status)
	
	insert into Proprietarios values (@id, @proprietario_agencia, @proprietario_conta)

	insert into Imoveis (proprietarioId, descricao, valor) values (@id, @imovel_descricao, @imovel_valor)
go

exec cadastra_proprietario_e_imovel 'nome pessoa', '000.454.123-00', 1, 1111, 2323,'descricao do imovel', 1000 --test

/* f)	Fa�a uma procedure para atualizar o valor do aluguel apenas dos im�veis alugados. A taxa de reajuste do aluguel deve ser recebida pela procedure.  */
create procedure altera_valor_aluguel
@taxa_reajuste decimal

as
	UPDATE Imoveis
	SET valor = valor * (@taxa_reajuste  / 10)
	WHERE Imoveis.situacao = 1;
go

exec altera_valor_aluguel 10 --test

/* g)	Crie uma tabela para registrar o hist�rico de reajuste de aluguel, ou seja, toda vez que ocorrer a atualiza��o do valor do aluguel, os dados devem ser guardados em uma tabela, assim como a data que esse reajuste ocorreu e quem foi o usu�rio do sistema que realizou a opera��o. Crie a tabela hist�rico de reajuste para armazenar tais dados. */
