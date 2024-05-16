// 가로 방향 스크롤 구현 JS

// 모바일은 ??? 아래미디어쿼리만 CSS에서 주면 됨

///* 휠 대용 모바일 미디어쿼리 */
//@media screen and (max-width:800px) {
//    html, body{
//        overflow: auto;
//    }
//}


// 1.대상요소: html,body
const scTarget = $("html,body");

// 2. 스크롤 이벤트 설정 및 기능구현 하기
// 제이쿼리에서 전체 스크롤/ 휠 이벤트 작성시
// 대상은 항상 html,body로 두개모두 잡아준다!
// 참고로 document나 window는 사용안됨!
// 이벤트 메서드: on(이벤트명,함수)

// 유의사항: 휠 이벤트는 모바일과 무관하다!
// 따라서 모바일 터치 가로스크롤은 그냥
// 가로 스크롤바만 살려주면 자연스럽게 된다!

// winW : 윈도우가로크기
// maxLimit : 최대한계값
let winW, maxLimit;

// 한번에 움직일 스크롤 이동크기 
// (상수는 모두 대문자로 쓰고 중간에 언더바로 구분함)
const MOVE_NUM = 100;

// 스크롤 위치값변수
let scPos = 0;
// 페이지개수
let pgCnt = $(".page").length;

// 한계값 계산함수 ///
const chgLimit = () => {
   winW = $(window).width();

   maxLimit = winW * pgCnt - winW;
   // 최대 한계값 : 전체이동박스크기(화면가로크기x페이지수) - 화면가로크기
   //             = 밖으로 나가있는 스크롤가능크기

   // 리사이즈시 콘솔 쫙 찍기
   console.log(
      "window크기:",
      winW,
      "/페이지수:",
      pgCnt,
      "최대한계값:",
      maxLimit
   );
};

// 최초 한계값 계산함수 호출
chgLimit();

// 윈도우 사이즈 변경시 한계값 업데이트
$(window).resize(chgLimit);
// resize() 메서드 : 리사이즈 이벤트 함수

/////////////////////////////////////////////////////
// 스크롤 이벤트 함수 구현하기 ////////////////////////
/////////////////////////////////////////////////////
scTarget.on("wheel", (e) => {
   // console.log('휠~~~~~');
   // 스크롤 이동을 위한 제이쿼리 속성
   // 1. scrollTop : 세로 스크롤바 위치
   // 2. scrollLeft : 가로 스크롤바 위치

   // 휠 방향 알아내기(전체이벤트객체로 부터 얻어옴)
   // (1) event.wheelDelta 값 :
   // 기본이동 100px +앞뒤 예비공백 10px*2 = 20px
   // 전체 표시수치 120 -> 120px을 의미함
   // 방향->> 음수가 아랫방향

   // let delta = event.wheelDelta;

   // (2) event.deltaY
   // 기본이동크기만 표시함. 즉 100px 이동값표시
   // 방향->> 양수가 아랫방향
   // -> wheelDelta보다 나중에나온 실질적 표시객체임

   let delta = event.deltaY;

   // 방향에 따른 증감은
   // deltaY는 양수가 아랫방향 // WheelDelta는 음수가 아랫방향!
   if (delta > 0) scPos += MOVE_NUM;
   else scPos -= MOVE_NUM;

   // [ 한계값 체크 ]
   // (1) 최소한계 : 0

   if (scPos <= 0) scPos = 0;
   // (2) 최대한계 : 전체이동박스크기 - 화면가로크기
   if (scPos >= maxLimit) scPos = maxLimit;

   // scPos += scPos +200; (대입연산자)
   console.log("스크롤위치변수:", scPos, "\n", "delta:", delta);

   // scTarget.animate({css설정},시간,이징,함수);

   // stop() 메서드 : 큐에 쌓인 애니메이션을 지운다!
   // 중간에 쌓인애니를 지우고 최종 애니만 실행한다!
   scTarget.stop().animate(
      // css설정
      { scrollLeft: scPos + "px" },
      // 시간 (1/1000초)
      2000,
      // 이징 : https://easings.net/ko (처음빠르게 나중에 천천히)
      "easeOutQuart"
   );
}); /////// wheel 이벤트 구역 /////////////
