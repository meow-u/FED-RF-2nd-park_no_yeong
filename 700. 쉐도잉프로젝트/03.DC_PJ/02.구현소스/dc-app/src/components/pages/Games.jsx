// 게임 페이지 컴포넌트

import Banner from "../modules/Banner";
import VidIntro from "../modules/Vidintro";

export default function Games() {
   // 코드 리턴구역
   return (
      <>
         <h1>Games</h1>
         {/* 배너컴포넌트 */}
         <Banner catName="GAMES" />
         {/* 1. 비디오 소개 컴포넌트 */}
         <VidIntro catName="VIDEO" clsName="on" />
      </>
   );
} //////////// Games ////////////////////////
