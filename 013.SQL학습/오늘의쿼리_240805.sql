-- 주석  (시퀄은 대소문자 구분안함 테이블명은 대소문자 구분함)
-- DB는 크게 2가지 DDL / DML 이 있다! 
-- DML은 크루드! CRUD -> Create(Insert)/Read(Select)/Update/Delete
-- [ select 선택항목 from 테이블명  where 조건절 ] 
-- SELECT * FROM Customers;
-- SELECT city FROM Customers;
-- SELECT ContactName,city FROM Customers;
-- SELECT ContactName,city FROM Customers where city= 'Madrid';
-- like 검색하기: % 있는 부분이 자유로운 부분임!
-- select * from Customers where city like "a%"
-- select * from Customers where city like "%co%"
select * from Customers where city like "%n"

--https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_columns
