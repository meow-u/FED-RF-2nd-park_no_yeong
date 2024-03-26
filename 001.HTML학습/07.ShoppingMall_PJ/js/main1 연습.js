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

// 1. 5개의 슬라이드와 블릿을 만들어준다!
   for (let i = 0; i <5 ;i++){
    slide.innerHTML += ` 
    <li data-seq="${i}">
    <img src="images/slide0${i + 1}.jpg" 
    alt="slide">
    </li>
    `;

        indic.innerHTML += `   
        <li ${i == 0 ? 'class="on"' : ""}>
            <img src="images/dot1.png" alt="흰색">
            <img src="images/dot2.png" alt="회색">
        </li>
        `;
    }//// for ///
    
    let block =false;

// 2. 버튼'들'에 이벤트걸기
abtn.forEach((ele,idx)=>{
    ele.onclick = (e)=>{


        //광클방지
        if(block){return};
        block = true;
        setTimeout(() => {
        block=false
        }, 600);


        let li = slide.querySelectorAll('li');

        // this는 화살표함수에서 사용불가.  
        //e.currentTarget 쓰샘 
        //this 쓸려면 선언적함수에서..

        //왼쪽버튼인지 확인 
        let isRbtn = e.currentTarget.classList.contains('ab2');
        console.log(isRbtn);

     if(isRbtn){
        slide.style.left ='-100%';
        slide.style.transition = '0.6s';
        setTimeout(() => {
        slide.appendChild // 부모요소의 자식으로 맨뒤에넣음
        (slide.querySelectorAll('li')[0]);
        slide.style.left = '0';    
        slide.style.transition = 'none';
        }, 600);
        } ///if///

    else {
        slide.insertBefore(li[li.length - 1],li[0]);
        slide.style.left = '-100%';
        slide.style.transition = 'none';
        setTimeout(() => {
            slide.style.left = "0";
            slide.style.transition = ".6s ease-in-out";
         }, 0);
        
    } ///else///


    }; /// 이벤트함수 ///
}); // forE ach///

} //////////////// loadFn 함수 ///////////////

