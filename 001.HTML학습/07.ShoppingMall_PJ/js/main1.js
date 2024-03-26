// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
   console.log("로딩완료!");
   //이동버튼 대상: .abtn
   const abtn = qsa(".abtn");
   // 변경대상: #slide
   const slide = qs("#slide");
   // 블릿버튼 : .indic
   let indic = document.querySelector(".indic");
   // console.log(abtn,slide);

   ///////////// 초기셋팅하기 /////////////
   // 5개의 슬라이드와 블릿을 만들어준다!
   for (let i = 0; i < 5; i++) {
      // 슬라이드 넣기
      slide.innerHTML += ` 
        <li data-seq="${i}">
            <img src="images/slide0${i + 1}.jpg" 
            alt="slide">
        </li>
        `;

      // 블릿넣기
      indic.innerHTML += `   
        <li ${i == 0 ? 'class="on"' : ""}>
            <img src="images/dot1.png" alt="흰색">
            <img src="images/dot2.png" alt="회색">
        </li>
         `;
   } ////  for ///////

   // li를 생성한 후 그 li를 다시 수집한다!
   // 블릿의 li까지 수집 indic변수
   indic = document.querySelectorAll('.indic li');


   // 슬라이드 순번 전역변수
   let snum = 0;

   // 2. 버튼을 모두 이벤트 설정하기
   for (let x of abtn) {
      x.onclick = goslide;
   } /// for of ///
   // 2. 오른쪽버튼 클릭시 기능구현
   //abtn[1].onclick = ()=>{
   //};
   // 3. 왼쪽버튼 클릭시 기능구현
   //abtn[0].onclick = ()=>{
   //};

   // 광클 금지변수
   let 나멈춰 = false;

   /*****************************************
     함수명: goslide
     기능: 슬라이드 이동  
     *****************************************/
   function goslide() {
      // 광클금지 설정하기
      ///////////////////////////////////////////
      // 클릭신호를 막아서 못들어오게하고
      // 일정시간후 다시 열어준다!
      if (나멈춰) return; //true -> 리턴! (함수나감!)
      나멈춰 = true; // 잠금 (뒤에 호출막기!)
      setTimeout(() => {
         나멈춰 = false; //0.6초 후 해제
      }, 600);
      ///////////////////////////////////////////

      // 1. 오른쪽 버튼인 .ab2인가??
      let isRbtn = this.classList.contains("ab2");
      // [classList 객체의 contanins()메서드]
      // -> 해당요소의 특정 클래스인지 여부를 리턴함
      // 해당클래스가 있으면 true 없으면 false

      //함수 호출확인
      console.log("나 슬라이드야", this, isRbtn);
      // this는 호출한 버튼자신

      // 2. 버튼별 분기하기 (나눈당)
      // 2-1.오른쪽 버튼일 경우 ///
      if (isRbtn) {
         // (1)먼저 왼쪽으로 이동하기
         slide.style.left = "-100%";
         slide.style.transition = ".6s ease-in-out";

         // (2)이동하는 시간 0.6초간 기다림
         setTimeout(() => {
            // (2-1) 맨앞 li 맨뒤로 이동
            slide.appendChild(slide.querySelectorAll("li")[0]);
            // 슬라이드 left값이 -100%이므로
            slide.style.left = "0";
            // (2-2) left값을 0으로 변경
            // (2-3) left 트랜지션 없애기
            slide.style.transition = "none";
         }, 600);

         // 맨 앞li 맨 뒤로 이동하기
         // appendChild(요소)
         // ->원래  뒤에 요소 추가기능임
         // -> 기존 있는 요소를 선택시
         // 맨뒤로 이동함
         // 맨 앞요소를 선택하여 맨뒤로 보냄
      } ///// if ////

      // 2-2.왼쪽 버튼일 경우 ///
      else {
         // 하위 li 수집하기
         let list = slide.querySelectorAll("li");
         // 맨뒤 li 맨앞으로 이동하기
         // 놈놈놈 시리즈!
         // insetBefore(넣을놈,넣을놈전놈)
         // insertBefore(맨뒤li,맨앞li)
         slide.insertBefore(list[list.length - 1], list[0]);

         // (2) left 값을 -100%로 변경하여
         // 맨뒤 li가 맨앞으로 온것을 숨긴다!
         // 왼쪽에서 슬라이드 들어올 준비!!!
         slide.style.left = "-100%";
         // 트랜지션이 한번 버튼클릭후 생기므로 없애줌
         slide.style.transition = "none";

         /////////////////////////////////////////////
         // 같은 left 값을 변경하기 떄문에
         // 코드 처리구역을 분리하여 준다!
         // 이때 사용되는 메서드는 셋 setTimeout()!
         // 시간차는 어쩌죠? -> 0을줘도 코드를 분리하여 처리하므로
         // 동시처리가 아니고, 비동기처리하기때문에 코드가 잘 작동한다.
         setTimeout(() => {
            // (3) left 값을 0으로 트랜지션하여 들어옴
            slide.style.left = "0";
            slide.style.transition = ".6s ease-in-out";
         }, 0);
      } //// else ////
      
      // 3. 불릿을 위해 읽어올 슬라이드순번 구하기 
      // 현재순번은 몇번째 슬라이드의
      // data-seq 속성값이다!
      // 오른쪽 버튼은 이동후 잘라내므로 두번째순번 [1]
      // 왼쪽버튼은 먼저 앞에 붙이고 이동함으로 첫번째 순번 [0]
      let seq = 
      slide.querySelectorAll('li')[isRbtn ? 1 : 0]
      .getAttribute('data-seq');
      console.log('블릿이 읽어올 슬라이드 순번:',seq,'데이터형:',typeof seq);
      // string > 문자형 number >숫자형
      // 4. 블릿변경하기 /////////////////

         // 모든 클래스 on지우기 + 현재 순번 클래스 넣기
         
         indic.forEach((ele,idx) => {
             // 현재순번은 몇번째 슬라이더의 data-seq속성값이다!

            // ele -각각의 li, idx- 각각의순번 
            if(idx==seq){ //현재순번 on넣기 ( ==으로 비교해야 결과가 나옴. 
                //data-seq는 문자형숫자이므로 . ===은 형까지 비교)
                ele.classList.add('on');
            }
            else{ //나머지는 on빼기
                ele.classList.remove('on');
            } /////else ////
    
           }); //// for Each ////


   } /////////// goslide함수 ///////////////////
   ////////////////////////////////////////////
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
