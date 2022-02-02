SELECT * FROM hr.employees;

-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
SELECT 
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Funcionário',
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Gerente'
FROM
    hr.employees AS e
        JOIN
    hr.employees AS m ON e.MANAGER_ID = m.EMPLOYEE_ID
WHERE
    e.DEPARTMENT_ID <> m.DEPARTMENT_ID;
    
-- Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT 
    CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'GERENTE',
    COUNT(*)
FROM
    hr.employees AS m
        JOIN
    hr.employees AS e ON e.MANAGER_ID = m.EMPLOYEE_ID
GROUP BY GERENTE;