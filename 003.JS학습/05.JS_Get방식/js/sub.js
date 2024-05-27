// JS 페이지간 데이터 전달하기 : 서브페이지 JS - sub.js

// 내함수 불러오기
import mFn from "./my_function.js";

// 넘어온 URL 파라미터값 받기
// location.href를 오른쪽에 쓰면 상단의 URL값을 읽어온다!
let pm = location.href;

// 기본 Get방식 파라미터의 물음표시그널이 있는지 확인하여
// 없으면 자르기전에 첫 페이지로 돌려보낸다!
// indexOf('?') -> 물음표 문자열의 순번리턴
// 찾는문자열이 없으면 -1리턴함 -> 이것으로 존재유무 판별함
if(pm.indexOf('?') == -1){
alert('올바른 접근이 아닙니다.');
// 원래 첫페이지로 돌려보냄
location.href = 'Get01.html';
}/////// if //////////
console.log(pm.indexOf('?'));

console.log("pm",pm);

// ?(물음표) 로 잘라서 뒤엣것!
// split(자를기준문자열) -> 배열데이터가 됨!
// pm = pm.split('?')[1];
// console.log("pm.split('?')[1]",pm);

// =(이퀄) 로 잘라서 뒤엣것!
pm = pm.split('=')[1];
console.log("pm.split('=')[1]",pm);
// console.log("pm.split('=')[0]",pm);


// 인코딩 처리된 문자열 디코딩하기!
pm = decodeURIComponent(pm);
console.log("decodeURIComponent(pm)",pm);

// 순서정리
// 1. 링크 클릭시 innerText를 읽어서 
// Get방식으로 정보 가공해서 넘기기 (인코딩필요) 
// -> lotation.href='sub.html?shop='+encodeURIComponent(메뉴명);

// 2. 서브페이지에서 Get방식으로 넘어온 정보 받기
// -> let pm = location.href;

// 3. 받은 정보를 재가공하기
// -> pm = pm.split('=')[1]; (=을 기준으로 뒤에것만)
// -> pm = decodeURIComponent(pm); (인코딩된 문자열 디코딩하기)
// 결과는 pm변수에 메뉴명이 담김!

// 4. 정보와 같은 데이터를 가진 객체를 만들어서 데이터를 매칭하기
// -> let sdata = {메뉴명:{배경색:색상,이미지:이미지경로},...};
// -> 사용: sdata[pm].배경색, sdata[pm].이미지 
// 이떄의 pm은 링크클릭시 innerText값이다!

/// 데이터 셋업하기! //////
let sdata = {
    레드샵: {
        배경색: "red",
        이미지: "shop_red.jpg",
    },
    오렌지샵: {
        배경색: "orange",
        이미지: "shop_orange.jpg",
    },
    블루샵: {
        배경색: "blue",
        이미지: "shop_blue.jpg",
    },
    블랙샵: {
        배경색: "black",
        이미지: "shop_black.jpg",
    },
    그린샵: {
        배경색: "green",
        이미지: "shop_green.jpg",
    },
}; ///////// sdata객체 /////////////

console.log('매칭data:',sdata[pm])

// 데이터 매칭하여 페이지 데이터 구성하기 ///////
// 1. 대상선정 : #title, #main
const title = mFn.qs('#title');
const main = mFn.qs('#main');


// 2. 변경반영하기
// 2-1. 타이틀 넣기
title.innerText = pm;

// 2-2. 타이틀 배경색 넣기
title.style.backgroundColor = sdata[pm].배경색;

// 2-3. 메인 배경이미지 변경하기 (경로주의!)
main.style.backgroundImage = 
`url(./images/${sdata[pm].이미지})`;