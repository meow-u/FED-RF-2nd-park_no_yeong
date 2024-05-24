// 아이템 페이지영역 컴포넌트 /////////////

// 아이템 카테고리 데이터 불러오기
import catData from "../data/category";

export default function ItemsArea({ catName }) { 
  //item.js에서 <ItemsArea catName="living"/> 이런식으로 보내줌
  
  // catName 카테고리 분류 이름

   // 해당 카테고리 데이터 선택하여 담기
   const selData = catData[catName];
   console.log(selData);

   // 코드리턴구역 /////
   return (
      <React.Fragment>
         <div id="main-area">
            {/* 데이터적용1 : 최상위 클래스명 추가하기  */}
            <main className={"main-area ibx " + selData.경로}>
               {/* <!-- 2-1. 카테고리 페이지 상단영역 --> */}
               <header className="cat-top-area">
                  {/* <!-- 2-1-1. 서브타이틀 --> */}
                  {/* 데이터적용2: 제목넣기 */}
                  <h2 className="cat-tit">{selData.제목}</h2>
                  {/* <!-- 2-1-2. 서브메뉴(LNB:Local Navigation Bar) --> */}
                  
                  { 
                  //메뉴가 "없음" 이 아닐때만 배열돌아 출력함!
                  selData.메뉴 != "없음" && (
                  <nav className="lnb">
                      <ul>
                        {selData.메뉴.map((v) => // {selData.메뉴.map(v=>(v 반복코드 ) )}
                            <li>
                               <a href="#">{v}</a>
                            </li>
                          )}
                      </ul>
                  </nav>
                )
              }

               </header>
               {/* <!-- 2-2. 카테고리 페이지 컨텐츠영역 --> */}
               <div className="cat-cont-area">
                  <section className="pt2">
                     <div className="cbx bgi bg1-1">
                        <h2></h2>
                     </div>
                     <div className="cbx bgi bg1-2">
                        <h2></h2>
                     </div>
                     <div className="cbx bgi bg1-3">
                        <h2></h2>
                     </div>
                  </section>
                  <section className="pt2">
                     <div className="cbx bgi bg2-1">
                        <h2></h2>
                     </div>
                     <div className="cbx bgi bg2-2">
                        <h2></h2>
                     </div>
                     <div className="cbx bgi bg2-3">
                        <h2></h2>
                     </div>
                  </section>
               </div>
            </main>
         </div>
      </React.Fragment>
   ); ////return
} //////// ItemsArea 컴포넌트 ////////////
