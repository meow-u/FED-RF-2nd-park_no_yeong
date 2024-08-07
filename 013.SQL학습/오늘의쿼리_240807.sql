-- 오늘의 쿼리 : update
-- update 테이블명 set 컬럼명=값 where 특정항목

UPDATE `friends` SET `ftel`='888',`faddr`='제주도',`fmsg`='여름휴가만세!' WHERE `fnum` = 3
UPDATE `friends` SET `ftel`='010-4252-2267',`faddr`='경기용인',`fmsg`='수정하는중이야!!' WHERE `fnum` = 2
UPDATE `friends` SET `fmsg`='1번의 메세지만 바꿔요~~!' WHERE `fnum` = 1

-- 오늘의 쿼리 삭제 쿼리 : delete 
-- delete from `friends` 테이블명 where 조건항목
DELETE FROM `friends` WHERE `fnum` = 3