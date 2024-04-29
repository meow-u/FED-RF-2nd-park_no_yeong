// 09. 중간스크롤 가로이동 JS - dance.js

/*  핵심은 스티키 부모박스를 100vh+ x px
    움직일 스티키 자식요소를 100vw+ x px 로 맞추고 
    (px이 스크롤가능범위)

    스티키의 부모박스 getBoundingClientRect().top값을
    움질일 요소 px로 주면 됨 
   
*/

// 나의함수 불러오기
import mFn from "./my_function.js";

// [1] 태그 셋팅하기 //////////////////////

// 1. 3번 스테이지에 ul> li 구조 이미지 넣기
// 대상 : .slidePg (스티키박스)
const slidePg = mFn.qs(".slidePg");

// 2.코드변수에 태그 만들어넣기
let hcode = "<ul>";
for (let i = 1; i <= 7; i++) {
   hcode += `
    <li>
    <img src="./images/dance/${i}.jpg"
    alt="dance image" />
    </li>
    `;
} /////// for //////////

// 3. 코드 출력하기
slidePg.innerHTML = hcode;

/////////////////////////////////////////////////////////
// [2] 3번째 영역에 도달한 경우 내용 ul박스 가로방향 이동하기

// 1. 대상선정하기 //////////////
// 이벤트대상: window
// 이벤트종류: scroll
// 위치기준대상: .tpg ( -> 스티키의 부모박스 /세로로 긴박스)
const tpg = mFn.qs(".tpg");
// 움직일 대상: .slidePg>ul ( -> 스티키의 자식박스 /가로로 긴박스)
const target = mFn.qs(".slidePg>ul");
// 추가 대상: .slidePg>ul>li
const eachList = mFn.qsaEl(target, "li");

// console.log(tpg,target,eachList);

// 2. 이벤트설정하기 //////////////
mFn.addEvt(window, "scroll", moveSlide);

//3. 함수 만들기 /////////////////////////////
function moveSlide() {
   // 1. 스티키 부모박스 바운딩top값
   let bTop = mFn.getBCR(tpg);
   // console.log('바운딩top:',bTop);

   // 2. 이동할 타겟박스 left값으로
   // 부모 바운딩top값 넣기
   // (1) 바운딩 top값이 0초과일때 처음위치 재설정하기
   if (bTop > 0) {
      target.style.left = "0px";
   }
   // (2) 바운딩 top값이 0이하 ~ -3000보다 크거나 같을 때
   // 부모 바운딩top값으로 위치이동하기
   else if (bTop <= 0 && bTop >= -3000) {
      target.style.left = bTop + "px";
   }
   // (3) 마지막 한계 이후엔 한계값으로 셋팅
   else {
      target.style.left = "-3000px";
   }
   // 3. 개별리스트 상하 이동함수 호출하기

   eachList.forEach((ele,idx) => upDownFn(ele,idx));
   // ele는 해당리스트 li대상자신, idx는 li자신의 순번

} //////// moveSlide함수 /////////////////////



// (2) 리스트 상하 이동함수 /////////
function upDownFn(ele,idx) { //각요소 (이름맘대로)
    // ele는 해당리스트 li대상자신, idx는 li자신의 순번

   // 스티키 박스 하위 li가 보이는화면 left 기준선
   // 에 대한 위치값 바운딩 left값을 이용하여
   // 자기위치에서 위/아래로 이동하는 수치 변경하기

   // 1. 바운딩 left값 구하기
   let mVal = mFn.getBCR2(ele);

   // 2. 위치값을 양수로 만들고 윈도우 크기로 나눈후 백분율
   // 수치가 크므로 2로 나누어줌..
   mVal = (Math.abs(mVal / window.innerWidth) * 100) / 3;
   // console.log('바운딩left:',mVal);

   // 3. 들어온 li순번이 짝수일 경우 마이너스 처리하기 
   // 짝수일 경우 마이너스를 곱하여 방향을 반대로 해준다
   // 짝수는 % 연산자사용 : 숫자%2==0이면 짝수임
   if(idx%2==0) mVal = -mVal;
   console.log('순번을 2로나눈 나머지:',idx%2);

   // 4. 실제 위치이동 CSS 적용하기
   ele.style.translate = `0 ${mVal}%`;
   
}

/* 이상하니 고쳐쓰자 */
