-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

SELECT 
    rating, AVG(length) AS 'avg_duration'
FROM
    sakila.film
GROUP BY rating
HAVING avg_duration BETWEEN 115 AND 121.50
ORDER BY avg_duration DESC;

-- Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
SELECT 
    rating, SUM(replacement_cost) AS 'sum_replacement_cost'
FROM
    sakila.film
GROUP BY rating
HAVING sum_replacement_cost > 3950.50
ORDER BY sum_replacement_cost ASC;

