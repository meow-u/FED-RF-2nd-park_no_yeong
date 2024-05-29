
export default function validateFn(){
    console.log("검사해~!!!");
    /********************************************** 
    [ 사용자 입력폼 유효성 검사 ]
    - 이벤트 종류 : blur(포커스가 빠질때 발생)
    - 제이쿼리 이벤트 메서드 :  blur()
    - 이벤트 대상: 
    ->입력요소 중 text(아이디email2제외),password
        form.logF input[type=text][id!=email2],
        form.logF input[type=password],
    -> 요소뒤 대괄호는 속성선택자(CSS원래문법)
    [id!=email2] !=은 같지않다(제이쿼리용문법)

**********************************************/
//form태그의 클래스가 logF인 요소에 속한 Input태그 안에서
// type가 text or password 이거나 id가 email2 가 아닌것.

$(`form.logF input[type=text][id!=email2],
form.logF input[type=password]`)
.blur(function(){

    /****************************************** 
        1. 현재 블러가 발생한 요소의 아이디는?
    ******************************************/
   let thisId = $(this).attr("id");
   // attr(속성명) -> 속성값읽어오기
   // thisId는 current id 즉, 현재 아이디
   console.log("현재아이디:",thisId);
    /****************************************** 
        2. 현재 블러가 발생한 요소의 값은?
    ******************************************/
   let thisVal = $(this).val()
//    .trim();  // 이건 맨 앞뒤 공백만 제거함. 

   // val() -> 입력값 읽어오기
   // trim() => 앞뒤공백제거
   // thisVal는 current value 즉, 현재값
   
   // trim()은 중간 공백 제거는 안하므로
   // 모든 공백을 제거하는 함수를 만들어 쓴다!
   const groSpace = x => x.replace(/\s/g,'');
   // replace 기존 문자열에서 발견되는 모든 문자 집합을 다른 지정 문자로 변경
   // 정규식은 슬래쉬(/)사이에 쓰며
   // \s는 스페이스 기호이고  g는 전역(global) 플래그다!
   // 플래그(flag)는 기술용어로 '처리표시기호'를 뜻함

   // 이름 입력칸(#mnm)일 경우 중간공백은 있어야 하므로
   // trim()을 사용한다! (삼항연산자로 분기)
   thisVal = thisId == "mnm" ? thisVal.trim() :groSpace(thisVal);

   // 공백제거후 '입력창에도 반영'시켜준다! (초점나갈떄 공백제거댐)
   $(this).val(thisVal);
   console.log('현재아이디:',thisId,'\n값:',thisVal);

    /************************************* 
        3. 빈값 여부 검사하기 (필수입력항목)
    *************************************/
   if(thisVal==""){
    // 메시지출력하기
    $(this).siblings('.msg').text('필수입력');
    // 형제 요소들중 .msg인 요소에 글자를 출력함
    // 형제요소 선택은 siblings(특정이름) 씨블링스~
   }
    /**************************************** 
        4. 아이디일 경우 유효성 검사
        - 검사기준: 
        영문자로 시작하는 6~20글자 영문자/숫자
    ****************************************/
   else if(thisId == 'mid'){
    // 검사결과
    // console.log(vReg(thisVal,thisId)); ->결과는불린값
    if(!vReg(thisVal,thisId)){// 아이디검사 불통과시
    // false 결과시 들어와야 하므로 Not(!)연산자사용

    // 메시지 지우기
    $(this).siblings('.msg')
    .text('영문자로 시작하는 6~20글자 영문자/숫자')
    .removeClass('on'); // 이미 on있음 빼기
    } ////// if ///////

    else{ //아이디검사 통과시 
    // 1. DB에 조회하여 같은 아이디가 있다면
    // '이미 사용중인 아이디입니다' 와 같은 메시지출력
    // 2. 만약 DB조회하여 같은 아이다가 없다면
    // '멋진 아이디네요~!'와 같은 메시지출력
    // 여기서 우선은 DB조회 못하므로 통과시 메시지로 출력
        
    $(this).siblings('.msg')
    .text('멋진 아이디네요!').addClass('on'); 
    // 클래스 on 넣으면 녹색글자 임!

    } /// else ///

   } //////////// else if /////////////

   /**************************************** 
    5. 비밀번호일 경우 유효성 검사
    - 검사기준: 
    특수문자,문자,숫자포함 형태의 5~15자리
    ****************************************/
   else if(thisId == 'mpw'){

   } //////////// else if /////////////

   /**************************************** 
    6. 비밀번호확인일 경우 유효성 검사
    - 검사기준: 비빌번호 항목과 일치여부
    ****************************************/
   else if(thisId == 'mpw2'){

   } //////////// else if /////////////

   /**************************************** 
    7. 이메일 유효성 검사
    - 검사기준: 이메일 형식에 맞는지 여부
    ****************************************/
   else if(thisId == 'eml'){

   } //////////// else if /////////////

    /**************************************** 
        8. 모두 통과일 경우 메세지 지우기
    ****************************************/
else { //thisVal에 위 조건을 모두 통과한 값이 생기면 
    //'필수입력' 지울수있도록 메시지 지우기
    $(this).siblings('.msg').text('');
    }///else////


}); //////////////// blur함수 ////////////////



// [ replace ]
// // "태국"->"코리아"로 변경
// rep1 = rep1.replace('태국','코리아');
// console.log(rep1); 

// // 콤마(,)를 별(☆)로 변경
// rep1 = rep1.replace(',','☆');
// console.log(rep1); 

// // 일반적으로 replace는 한개의 값을 다른값으로 변경함!
// // 여러개를 모두 찾아 바꾸려면 정규표현식을 써야함!


} //////////// validateFn /////////////

/*//////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*///////////////////////////////////////////////////////
function vReg(val, thisId) {
    // val - 검사할값, thisId - 처리구분아이디
    // console.log("검사:"+val+"/"+thisId);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (thisId) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴! (true/false)

} //////////// vReg 함수 //////////////////////////////
///////////////////////////////////////////////////////

