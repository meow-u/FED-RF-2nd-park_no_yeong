-- [ 오늘은 Insert into ]
-- INSERT INTO 테이블명(항목명)
-- VALUES (값);

-- 먼저 테이블 만들기 : mydb 데이터 베이스에 생성
CREATE TABLE `friends`(
   fnum int NOT null AUTO_INCREMENT,
    fname varchar(20),
    ftel char(11),
    faddr varchar(200),
    fmsg text(1000),
    fdate timestamp,
    PRIMARY KEY (fnum)
);

-- 첫번째 레코드 입력 
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("이도","01011112222","서울시 종로구","세종대왕 만만세~!!!");

-- 두번째 레코드 입력 
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("김종서","01011114444","서울시 종로구","임금께 충성~!! ");

-- 세번째 레코드 입력 
INSERT INTO `friends` (`fname`,`ftel`,`faddr`,`fmsg`) 
VALUES ("공유","01088887777","서울시 노원구","도꺠비 만세~~!! ");

-- 선택쿼리 
SELECT fname FROM `friends` WHERE '공유';
    SELECT `fname` as "이름",`faddr` as "주소",`ftel` as "전화번호" FROM `friends` WHERE  `faddr` like '%은평구';