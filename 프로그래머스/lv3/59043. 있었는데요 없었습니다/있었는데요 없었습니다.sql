-- 코드를 입력하세요
SELECT DISTINCT t1.ANIMAL_ID, t1.NAME
FROM ANIMAL_INS AS t1
INNER JOIN ANIMAL_OUTS AS t2
WHERE t1.ANIMAL_ID = t2.ANIMAL_ID AND t1.DATETIME > t2.DATETIME  
ORDER BY t1.DATETIME;
