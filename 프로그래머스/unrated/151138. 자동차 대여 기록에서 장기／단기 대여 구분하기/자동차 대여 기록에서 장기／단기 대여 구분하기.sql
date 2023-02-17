-- 코드를 입력하세요
SELECT HISTORY_ID, CAR_ID, DATE_FORMAT(START_DATE, '%Y-%m-%d'), DATE_FORMAT(END_DATE, '%Y-%m-%d'),
                        # 날짜 형식 맞춰줘야 함
    CASE 
        WHEN DATEDIFF(END_DATE, START_DATE) + 1 >= 30 THEN '장기 대여'
        # 만약 9/2일날 빌려서 9/2일날 반납하면 1일 대여를 한거니까 (반납일-렌트일) + 1, 
        # 이 값이 30일 이상이면 '장기대여' 아니면 '단기대여'
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
WHERE START_DATE BETWEEN '2022-09-01' AND '2022-09-30'
ORDER BY HISTORY_ID DESC;