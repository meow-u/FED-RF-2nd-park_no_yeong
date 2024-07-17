// 하단영역 컴포넌트

import Logo from "../modules/Logo";

// 하단메뉴 데이터불러오기
import { bmData } from "../data/bmenu";

// 하단영역 css불러오기
import "../../css/footer_area.scss";
import { memo } from "react";
import Weather from "../modules/Weather";

// React.memo()를 사용한 컴포넌트 메모이제이션
// -> 컴포넌트를 할당형을 변경한다!

// export default function FooterArea() {
export const FooterArea = memo(() => {
   console.log('하단영역 랜더링!')
   // 코드 리턴구역
   return (
      <footer className="info">
         <ul>
            <li>
               <Logo logoStyle="bottom" />
            </li>
            <li>
               {/* 하단링크박스 */}
               <ol className="bmenu">
                  {bmData.map((v, i) => (
                     <li key={i}>
                        <a href={v.link} target="_blank">
                           {v.txt.toUpperCase()
                           // toUpperCase() 대문자변환
                           // toLowerCase() 소문자변환
                           }
                        </a>
                     </li>
                  ))}
               </ol>
            </li>
            <li>© & ™ DC. ALL RIGHTS RESERVED</li>
         </ul>
         {/* 날씨정보 컴포넌트  */}
         <Weather/>
      </footer>
   );
}); //////////// FooterArea ////////////////////////
