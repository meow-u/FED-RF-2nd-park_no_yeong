import React, { useState } from "react";

// 폰트어썸
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// css불러오기
import "../../css/searching.scss";

// 데이터 불려오기 :캐릭터 리스트 데이터
import { catListData } from "../data/swiper_cat";

// 캐릭터 리스트 결과 컴포넌트
import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
   // kword - 전달받은 키워드
   console.log("kword전달받은키워드:", kword);
   console.log("catListData사용데이터:", catListData);

   //////////////////////////////////////////////
   // 키워드에 따라 검색결과가 달라지므로
   // 핵심데이터인 검색어를 상태관리변수로 만든다!!
   const [kw, setKw] = useState(kword);
   // 초기값으로  전달받은 검색어변수를 넣어준다
   /////////////////////////////////////////////

   // 검색어가 있는 데이터 필터하기
   // filter()는 검색결과가 항상 배열로 나옴
   const newList = catListData.filter((v) => {
      // 속성중 캐릭터 이름 중 검색 (v.cname)
      // 검색어는 모두 영어일 경우 소문자 처리함
      let newVal = v.cname.toLocaleLowerCase();

      //////////////////////////////////////////////
      // 상태변수인 kw로 대체한다!!!
      // let key = kword.toLocaleLowerCase();
      let key = kw.toLocaleLowerCase();
      // 전달받은 키워드(검색한텍스트)도 소문자 처리
      //////////////////////////////////////////////

      if (newVal.indexOf(key) !== -1) return true;

      // 문자열.indexOf(문자) 문자열 위치번호 리턴함
      // 그런데 결과가 없으면 -1을 리턴함
      // 그래서 -1가 아닐경우 true를 리턴하면
      // filter에서 변수에 저장할 배열로 한번에수집된다!
   }); ///////// filter /////////////////
   console.log("newList", newList);

   /* 
    변수 = 배열.filter((v)=>{
        if(v.속성명.indexOf(검색어) != -1) return true
    })
    
    filter는 무조건 배열로 리턴!! 
    전체를돌아서 찾은 데이터 덩어리를 반환함

    find는 하나만 집어와서 값이없으면 undefined를 반환 
    -> 결과는 단어가 있는경우(-1 아닐때) 변수에 모아서 담아준다 
    -> 결과값도 배열, 결과가 없어도 빈 배열 

    
    
    */
   // 코드 리턴구역 ////////////////////////
   return (
      <>
         {/* 전체 검색모듈 코드 */}
         <section className="schbx">
            {/* 1. 옵션선택박스 */}
            <div className="schopt">
               {/* 1-1.검색박스 */}
               <div className="searching">
                  {/* 검색버튼 돋보기 아이콘 */}
                  <FontAwesomeIcon
                     icon={faSearch}
                     className="schbtn"
                     title="Open search"
                  />
                  {/* 입력창 */}
                  <input
                     id="schin"
                     type="text"
                     /* 비엇을떄 뜨는문구 */
                     placeholder="Filter by Keyword"
                     /* 초기에 값집어넣기 */
                     defaultValue={kword}
                     // 엔터키를 눌렀을때 검색실행
                     onKeyUp={(e) => {
                        if (e.key === "Enter")setKw(e.target.value); //input에 입력된 값
                     }}
                  />
               </div>
               {/* 1-2. 체크박스구역 */}
               <div className="chkbx">
                  <ul>
                     <li>
                        {/* 타이틀 */}
                        <h2>
                           ALIGNMENT
                           <span className="spbtn">＋</span>
                        </h2>
                        {/* 체크박스리스트 */}
                        <ol>
                           <li>
                              Heroes
                              {/* 숨긴 체크박스 */}
                              <input
                                 type="checkbox"
                                 id="hero"
                                 className="chkhdn"
                              />
                              {/* 디자인노출 라벨 */}
                              <label htmlFor="hero" className="chklb"></label>
                           </li>
                           <li>
                              It's Complicated
                              {/* 숨긴 체크박스 */}
                              <input
                                 type="checkbox"
                                 id="comp"
                                 className="chkhdn"
                              />
                              {/* 디자인노출 라벨 */}
                              <label htmlFor="comp" className="chklb"></label>
                           </li>
                           <li>
                              Villains
                              {/* 숨긴 체크박스 */}
                              <input
                                 type="checkbox"
                                 id="villain"
                                 className="chkhdn"
                              />
                              {/* 디자인노출 라벨 */}
                              <label
                                 htmlFor="villain"
                                 className="chklb"
                              ></label>
                           </li>
                        </ol>
                     </li>
                  </ul>
               </div>
            </div>
            {/* 2. 결과리스트박스 */}
            <div className="listbx">
               {/* 2-1. 결과 타이틀 */}
               <h2 className="restit">BROWSE CHARACTERS</h2>
               {/* 2-2. 정렬선택박스 */}
               <aside className="sortbx">
                  <select name="sel" id="sel" className="sel">
                     <option value="0">A-Z</option>
                     <option value="1">Z-A</option>
                  </select>
               </aside>
               {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
               <SearchingCat dt={newList} />
            </div>
         </section>
      </>
   );
}

export default Searching;
