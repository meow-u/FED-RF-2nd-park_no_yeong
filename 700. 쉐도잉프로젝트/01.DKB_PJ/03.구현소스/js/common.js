// 공통처리 JS - common.js

// 나의함수 불러오기
import mFn from "./my_function.js";

// 공통처리 데이터 불러오기
import comData from "../data/common_data.js";







// 모듈로 호출된 JS에서는 다른 외부 JS를 import로 호출가능!
// import 하려는 파일에서 반드시 함수,변수등을 export해야함!
import slideFn from "./slide.js";

// GNB 메뉴 데이타 불러오기 ///
import gnbData from "../data/gnb_data.js";
console.log(gnbData);













export default function setElement(){
    // 대상선정: #top-area,#ban-area,
    //          #spart-menu,#footer-area
    const topArea = mFn.qs('#top-area');
    const banArea = mFn.qs('#ban-area');
    const spartMenu = mFn.qs('#spart-menu');
    const footerArea = mFn.qs('#footer-area');

    // 2. 코드넣기 ////////

    topArea.innerHTML = comData.topArea;
    banArea.innerHTML = comData.banArea;
    spartMenu.innerHTML = comData.spartMenu;
    footerArea.innerHTML = comData.footerArea;




    // 3. 기능처리함수 호출하기 :main js에서 옮겨옴 
/* *************************************** */
// 3-1. GNB 메뉴 만들기 함수 호출 (여기서만들어서 슬라이드만넣음)
makeMenu();
// 3-2. slideFn 슬라이드 기능함수 호출 !
slideFn();

/* *************************************** */


}; ///////////// setElement 함수 //////////

// GNB 메뉴코드 만들기 함수 /////////////
function makeMenu() {

    
// 3-1 Gnb메뉴 코드넣기
// 대상: .gnb
// 데이터 :gnbData는 객체니까 배열용메서드 map()을 못씀!
// 그래서 gnbData를 키배열로 변환해서 사용함!
// 그리고 이 객체의 key는 상위메뉴 이기도 함!
// Object.keys(객체) -> 해당객체의 속성명(키) 배열생성 
console.log(Object.keys(gnbData));


//서브메뉴가 "없음"이면 빈값 
//아니면 서브메뉴 출력 
// ( ${} 는 표현식자리라서 if문사용불가.
// 바로출력되는 삼항연산자사용 
// gnbData[키] -> 값을가져옴! 

mFn.qs(".gnb").innerHTML = `
<ul>
   ${ Object.keys(gnbData).map(v=>`
      <li>
         <a href="#">${v}</a>
         ${ gnbData[v]=="없음" ? "" : `
         <!-- 서브메뉴 -->
         <div class="smenu">
            <div class="swrap">
            <h2>${v}</h2>
               <ol>
                  ${ gnbData[v].map(vSub=>`
                     <li>
                        <a href="#">${vSub}</a>
                     </li>
                     `).join('')
                  }
               </ol>
            </div>
         </div>
         `}
      </li>
    `).join('')
   }
</ul>
`;


} /////////// makeMenu 함수 ////////////