// 패션 인트로 컴포넌트

import React from "react";
// 데이터 불러오기
import { fsData } from "../../js/data/fashion_intro";
// css불러오기
import "../../css/fashion_intro.scss";

function FashionIntro({ catName, subCat, opt }) {
   // 1. CatName은 카테고리명
   // 2. subCat은 서브카데고리명
   // (서브가 아닌경우 subCat의 값은 "etc"임)

   // 3. opt 는 방향옵션 (역방향은 true 정방향은 false)

   // 선택 데이터 변수할당
   const selData = fsData[catName];
   return (
      <div id={catName} className="fs-page">
         <ul
            className="pgc"
            style={{
               flexDirection: opt ? "row-reverse" : "row",
            }}
         >
            {/* 첫번째 이미지박스 */}
            <li className="imgc">
               <img src={selData.isrc[0]} alt={selData.ialt[0]} />
            </li>
            {/* 두번째 글자박스 */}
            <li className="txtc">
               <h2 className={catName == "style" ? "tm" : ""}>
                  <a
                     href="#"
                     /* 데이터에 태그가 있어서 이를 html로 넣으려면? 아래속성사용 */
                     //  dangerouslySetInnerHTML={{__html:데이터}}
                  >
                     {selData.tit[0][0]}
                     <br />
                     {selData.tit[0][1]}
                  </a>
               </h2>
               {
                  // 스타일인 경우 글자박스 하나더 출력됨
                  catName == "style" && (
                     <h2 className="tw">
                        <a href="#">
                           {selData.tit[1][0]}
                           <br />
                           {selData.tit[1][1]}
                        </a>
                     </h2>
                  )
               }
            </li>
            {/* 3. 세번째 이미지박스 : 스타일만! */}
            {
               // 스타일인 경우 Li 이미지박스 생성
               catName == "style" && (
                  <li className="imgc">
                     <img 
                     src={selData.isrc[1]} 
                     alt={selData.ialt[1]} />
                  </li>
               )
            }
         </ul>
      </div>
   );
}

export default FashionIntro;
