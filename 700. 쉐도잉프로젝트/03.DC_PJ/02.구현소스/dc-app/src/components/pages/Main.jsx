//pages 폴더는 MainArea에서 바뀌어보이는 각각의 페이지
//Main은 기본페이지

import Banner from "../modules/Banner";

export default function Main() {
   // 코드 리턴구역
   return (
      <>
         {/* 1. 배너컴포넌트 */}
         <Banner catName="main1" />
         {/* 배너컴포넌트 */}
         <Banner catName="CHARACTERS" />
      </>
   );
} //////////// Main ////////////////////////
