// Pilot PJ 전체메뉴 컴포넌트

// 컨텍스트 API 호출
import { pCon } from "./pCon";
import { useContext } from "react";

export function TotalMenu() {
   const myCon = useContext(pCon);

   // 서브페이지 이동함수 ( 햄버거 클릭후 men눌러도 이동하기 )
   const goSub = (e) => {
      /* 1. 기본이동막기 */
      e.preventDefault();

      // 2. 이동할 서브페이지 명 : a요소의 글자를 소문자로!!
      let pgName = e.target.innerText.toLowerCase();

      // 3. 서브페이지 이동위해  상태변수 업데이트
      myCon.setPgName(pgName); // 이부분을 하나하나 하면비효율적이라 함수만듬 
      /* 4. 서브메뉴 클릭후 전체 메뉴닫기위해 강제로 햄버거 클릭시키기 */
      document.querySelector(".ham").click();
   }; //////////// go sub ///////////

   // 코드 리턴 //////////////////////
   return (
      <>
         <div className="mbox">
            <video
               src="./images/disc2018.mp4"
               loop="loop"
               muted="muted"
               className="bgm"
            ></video>
            <nav className="mlist">
               <dl>
                  <dt>
                     <a href="#" onClick={goSub}>
                        MEN
                     </a>
                  </dt>
                  <dd>
                     <a href="#">T-SHIRT</a>
                  </dd>
                  <dd>
                     <a href="#">JACKET</a>
                  </dd>
                  <dd>
                     <a href="#">TRAINING WARE</a>
                  </dd>
                  <dd>
                     <a href="#">BEACH WARE</a>
                  </dd>
               </dl>
               <dl>
                  <dt>
                     <a href="#" onClick={goSub}>WOMEN</a>
                  </dt>
                  <dd>
                     <a href="#">T-SHIRT</a>
                  </dd>
                  <dd>
                     <a href="#">JACKET</a>
                  </dd>
                  <dd>
                     <a href="#">TRAINING WARE</a>
                  </dd>
                  <dd>
                     <a href="#">BEACH WARE</a>
                  </dd>
               </dl>
               <dl>
                  <dt>
                     <a href="#" 
                     onClick={goSub}
                     >STYLE</a>
                  </dt>
                  <dd>
                     <a href="#">COLLECTION</a>
                  </dd>
                  <dd>
                     <a href="#">SEASON AD</a>
                  </dd>
                  <dd>
                     <a href="#">STAR &amp; NEWS</a>
                  </dd>
                  <dd>
                     <a href="#">MAIN ITEM</a>
                  </dd>
               </dl>
            </nav>
         </div>
      </>
   );
} ///////// TotalMenu 컴포넌트 //////////
