//옷소매 갤러리 JS-main_Jquery.js


import mFn from './my_function.js';
/*********************************************************** 
1. 기능정의: 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
    -> 제이쿼리 append(맨앞자식div)

1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
    -> 제이쿼리 prepend(맨뒤자식div)
 ***********************************************************/

// 1.대상선정
// 1-1.이벤트대상 : .abtn (이동버튼들)
// 1-2 변경대상 :: .gbx (갤러리부모박스)

// 2. 변수설정하기 //////////
// 광클금지변수(true면 금지 false허용)
let stopClick = false;
// 애니시간(잠금시간)
const TIME_SLIDE = 400;
// 변경대상
let gbx =  $('.gbx');

// 3. 이벤트 설정 및 기능구현하기 /////////////
$('.abtn').click(function(){
      // 0. 광클금지 (js랑 똑같음) ////
      if(stopClick) return
      stopClick = true;
      setTimeout(() => stopClick=false , TIME_SLIDE);

    // 버튼자신은 this키워드 사용
    console.log('나야나' , $(this).is('.rb'));
    // is()메서드는 선택요소의 클래스 등 확인기능

    // find() ->> 하위요소를 '모두' 선택한다!
    // children() ->> 직계요소만 선택할때 사용!

    // first() -> 첫번째 
    // last() -> 마지막째
    // eq(n) -> n번째 요소를 선택함!

    // 1. 오른쪽버튼 분기하기
    if($(this).is('.rb')){
        gbx.append(gbx.find('div').first());

    } /// if ////
    else{
        gbx.prepend(gbx.find('div').last());
    }/// else ///
}); ////// click ////
