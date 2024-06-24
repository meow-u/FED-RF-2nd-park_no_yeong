// 시리즈 페이지 컴포넌트

import Banner from "../modules/Banner";
import VidSwipe from "../modules/VidSwipe";
import VidIntro from "../modules/Vidintro";

export default function Series() {
   // 코드 리턴구역
   return (
      <>
         <h1>Series</h1>
         {/* 배너컴포넌트 */}
         <Banner catName="SERIES" />
         {/* 2. 시리즈페이지 비디오소개 */}
         <VidIntro catName="MOVIES" clsName="on" />
         {/* 3.비디오 스와이프 컴포넌트 */}
         <VidSwipe catName="movies" />
      </>
   );
} //////////// Series ////////////////////////
