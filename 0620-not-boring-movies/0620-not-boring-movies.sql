# Write your MySQL query statement below

SELECT * 
FROM Cinema c
WHERE NOT c.description = 'boring' AND MOD(c.id, 2) = 1
ORDER BY rating DESC;