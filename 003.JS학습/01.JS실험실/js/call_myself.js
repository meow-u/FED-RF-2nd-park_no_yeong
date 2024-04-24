// 08. 재귀호출 JS - call_myself.js

import mFn from "./my_function.js";

// 초기셋팅하기
// 대상 : .gbox

const gbox = mFn.qs(".gbox");

// 코드변수
let hcode = "<ul>";

// for문으로 코드만들기 : ul>li>img
for (let i = 1; i <= 7; i++) {
   hcode += `
        <li>
        <img src="./images/auto_scroll/m${i}.jpg" alt="갤러리이미지">
        </li>
    `;
} ////// for //////
hcode += "</ul>";

// 대상에 코드 넣기
gbox.innerHTML = hcode;

//// 갤러리 박스를 왼쪽으로 계속 움직이게하는
// 재귀호출 함수 만들기

// 움직일대상 : .Gbox ul
let target = mFn.qsEl(gbox, "ul");

// 기준값 업데이트 함수
// mFn.qsaEl(target,'li')[0] <- 변수에 담으면 안됨 (계속 변경되니까!) 
const updateCriteria = () => mFn.qsaEl(target,'li')[0].offsetWidth;
// 기준값 (대상 li의 가로크기값)
let criteria = updateCriteria();

// 리사이즈  업데이트
mFn.addEvt(window, "resize", () => {
    criteria = updateCriteria()
    console.log('기준값업데이트',criteria)
});
console.log("기준값:", criteria);

// 현재 translate 값
let currVal = 0;

function moveGallery() {
    // 현재값 1씩감소
    target.style.translate = --currVal+'px';

    // Math.floor() -> 기준값을 마이너스로하고 소수점아래버림  
    
    // currVal(translate)이 li 하나 크기만큼 나가면
    // == 비교보다는 <=로 해야 안전함 
    if(currVal <= Math.floor(-criteria)){ 
        // 1.맨앞 li 맨뒤로 이동!
        // appendChild(맨앞 li)
        target.appendChild(
            mFn.qsaEl(target,'li')[0]);

        // 2. li 하나값 나가자마자 translate값 초기화 
        // 이거안하면 튀는현상..(왜?)
        target.style.translate = '0px';
       
        // 3. 하나 크기만큼 나가면 currVal값 초기화
        currVal = 0;
    }


    // 재귀호출!(타임아웃 함수로 호출함)
    //  stopSts변수값이 false일때만 실행하기 (안멈췄을때)
    if(!stopSts)setTimeout(moveGallery,10);
} /////////// moveGallery함수 //////////

// 대상에 마우스 오버시 멈추고 아웃시 다시 흘러가게 하기
// 대상: .gbox-> gbox변수

// 멈춤상태변수
let stopSts = false;

// 1. 멈추기
mFn.addEvt(gbox,'mouseenter',()=>{
    // 멈춤 상태변수 true로 변경
    stopSts = true;
}); //////// mouseenter 함수 ///////
// 1. ektl 흘러가기
mFn.addEvt(gbox,'mouseleave',()=>{
    // 멈춤상태변수 false로 변경
    stopSts = false;
    // 멈춰버렸으니 재귀호출함수 다시호출!
    moveGallery();


}); //////// mouseenter 함수 ///////





/* 이동함수 2초뒤 첫호출(이후 무한반복) */
setTimeout(moveGallery, 2000);


