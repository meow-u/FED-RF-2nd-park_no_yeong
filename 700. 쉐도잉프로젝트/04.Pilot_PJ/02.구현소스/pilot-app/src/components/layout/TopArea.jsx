import React from "react";

// 메뉴 데이터 불러오기
import { gnbData } from "../../js/data/gnb.js";
import { TotalMenu } from "../modules/TotalMenu.jsx";
// 제이쿼리 불러오기
import $ from "jquery";

function TopArea(props) {
   // 전체메뉴 열기닫기 함수 //
   // 요소를 화면 가득채워놓고 display none 해두면 준비완료
   const showHideMenu = (e) => {
      console.log(e.currentTarget);
      // 전체 메뉴대상 : .mbox
      // 1. 보이기 숨기기 전환하기
      $(".mbox").fadeToggle(300);
      // fadeIn 서서히 나타남
      // fadeOut 서서히 사라짐  -> display:none 됨
      // fadeToggle 서서히 나타남/사라짐 전환

      // 2. 햄버거버튼에 클래스 'on'넣기 /빼기
      $(e.currentTarget).toggleClass("on");
      // addClass() 클래스넣기
      // removeClass() 클래스빼기
      // toggleClass() 넣고빼기 토글
      // console.log($(e.currentTarget).is(".on"));

      // 3. 비디오 재생/멈춤하기
      // 대상 : .bgm
      let bgm = $(".bgm");
      // 제이쿼리의 미디어를 선택후 실제 사용할때는
      // get(0) 하고 난 후 사용한다! (컬렉션에담음)

      // 햄버거 버튼에 클래스 'on'있으면 재생
      // $(e.currentTarget).is(".on") ? bgm.get(0).play() : bgm.get(0).pause();

      // 비교해서 js는 선택후 바로 play(), pause()를 사용함
      $(e.currentTarget).is(".on")
         ? document.querySelector(".bgm").play()
         : document.querySelector(".bgm").pause();
   }; ///////// showHideMenu ////////////
   // 코드리턴구역 /////////
   return (
      <>
         <div id="top-area">
            <header className="top-area ibx">
               <h1 id="logo">
                  <a href="#">
                     <img src="/images/main_logo.png" alt="파일럿로고" />
                  </a>
               </h1>
               <nav className="gnb">
                  <ul>
                     <li className="bld">배너순번 li 숨기기</li>
                     {gnbData.main.map((v, i) => (
                        <li key={i}>
                           <a href="#">{v}</a>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="ham" onClick={showHideMenu}>
                  <span></span> <span></span> <span></span>
               </div>
               {/* 전체메뉴 컴포넌트 */}
               <TotalMenu />
            </header>
         </div>
      </>
   );
}

export default TopArea;
