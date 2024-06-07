//pages 폴더는 MainArea에서 바뀌어보이는 각각의 페이지
//Main은 기본페이지

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";

export default function Main() {
   // 코드 리턴구역
   return (
      <>
       {/* 1. 배너컴포넌트 
         'main' 이름 뒤이 숫자는 1~3 사이 랜덤수 */}
         {/* <Banner catName="main1" /> */}
         <Banner catName={'main'+Math.ceil(Math.random()*3)} />
         {/* 2. 섹션소개 컴포넌트 */}
         <SecIntro/>

      </>
   );
} //////////// Main ////////////////////////
