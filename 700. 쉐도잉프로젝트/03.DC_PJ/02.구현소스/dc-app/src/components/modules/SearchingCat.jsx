// DC PJ 캐릭터 검색결과 리스트 컴포넌트

// CSS 불러오기
import "../../css/searching_cat.scss";
//라우터 돔 link
import { Link } from "react-router-dom";
import React from "react";

function SearchingCat({dt}) {
   //dt - 검색된 배열데이터
   
   //total - 검색된 배열데이터 개수
   const total = dt.length;
   console.log('데이터수:',total)

   return (
      <>
         {
            // 데이터 갯수가 0이 아닐때만 출력
            total > 0 && (
               <ul className="clist">
                  {dt.map((v, i) => (
                     <li key={i}>
                        <Link
                           to="/detail"
                           //////////////////////////////////
                           /* state로 3가지 값을 넘겨준다! */
                           state={{
                              cname: v.cname, // 캐릭터이름
                              cdesc: v.cdesc, // 캐릭터설명
                              facts: v.facts, // 캐릭터상세
                           }}
                           //////////////////////////////////
                        >
                           <img src={v.tmsrc} alt={v.cname} />
                           <h3>{v.cname}</h3>
                        </Link>
                     </li>
                  ))}
               </ul>
            )
         }
         {
            // 선택 데이터가 0개이면 아래출력
            total == 0 && (
               <h2 style={{ textAlign: "center" }}>
                  Sorry, we don't have any matches for that. But there's plenty
                  more to see on DC!
               </h2>
            )
         }
      </>
   );
}

export default SearchingCat;
