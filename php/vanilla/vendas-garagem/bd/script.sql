CREATE TABLE `pessoas` (
  `id` int(11) NOT NULL AUTO_INCREMENT primary key,
  `nome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `produtos` (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200) not null,
  descricao text NOT NULL,
  preco decimal(10,2) NOT NULL,
  status int(11) NOT NULL,
  foto blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE table interesses (
    id int not null AUTO_INCREMENT PRIMARY key,
    idInteressado int not null REFERENCES pessoas(id),
    idProduto int not null REFERENCES produtos(id),
    data date DEFAULT now()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE table mensagens (
    id int not null AUTO_INCREMENT PRIMARY key,
    idInteresse int not null REFERENCES interesses(id),
    idVendedor int not null REFERENCES pessoas(id),
    idComprador int not null REFERENCES pessoas(id),
    mensagem text not null,
    data date DEFAULT now()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;