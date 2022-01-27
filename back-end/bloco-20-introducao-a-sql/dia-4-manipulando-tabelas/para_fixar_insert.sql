-- Insira um novo funcionário na tabela sakila.staff .
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
VALUES('Ned', 'Stark', 5, 2, 1, 'Ned');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)VALUES
('Arya', 'Stark', 5, 2, 1, 'Nobody'),
('Brandon', 'Stark', 5, 2, 0, 'Bran');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor(first_name, last_name)
	SELECT staff.first_name, staff.last_name
    FROM sakila.staff;
    
-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category(name) VALUES
('Dev'), ('Hero'), ('War');

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store(manager_staff_id, address_id)
VALUES(3, 3);

SELECT * FROM sakila.store;
