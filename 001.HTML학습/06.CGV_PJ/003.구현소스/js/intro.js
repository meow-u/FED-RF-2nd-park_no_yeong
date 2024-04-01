// CGV PJ 인트로 페이지 JS - intro.js

// 요구사항: 비디오 플레이가 끝나면 첫페이지인
// main.html.로 자동 이동하기

// 대상선정: #myvid
const myvid = document.querySelector('#myvid');
// console.log(myvid);

// ★ 이벤트: timeupdate -> 동영상 재상중 발생이벤트 
myvid.addEventListener('timeupdate',()=>{
    // 1. 동영상 멈춤여부 알아내기
    // -> ★ 비디오요소.paused => 멈춤상태면 true, 아니면 false
    let isStop = myvid.paused; 
    // 호출확인
    console.log('재생중!',isStop);

    // 2. 멈춤상태(true)면 페이지 이동!
    // -> JS에서 페이지 이동은 location.href= 주소or페이지 

    if(isStop){ // 같은위치라 페이지 이름만 있어도 됨
        location.href = 'main.html';
    } /////////// if ///////

}); ///////// timeupdate 이벤트 함수 ////////////////

