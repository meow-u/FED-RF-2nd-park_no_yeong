// 상단영역 컴포넌트

/* 3 */
// 어느하위컴포넌트에 있어도 이걸로 작동시킴
import { Link, useNavigate } from "react-router-dom";
//gnb 데이터 불러오기
import { menu } from "../data/gnb";

// 상단영역 css불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";
// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function TopArea() {
   // 이동함수
   const goNav = useNavigate();
   // 사용시 goNav(라우터주소, {전달객체})
   // 전달객체 없으면 비워놓음!
   // 사용법: 반드시 useNavigate()메서드를 변수에 담아
   // 이동할 라우터 주소를 쓰면 이동한다
   // 예) goNav('/news') -> 뉴스페이지이동
   // 예) goNav('/') -> 첫페이지이동
   // 이동주소는 대소문자 구분없음!
   // 슬래쉬 없이 써도 루트로 인식함
   // --> 알고있어야하지만 link to가 좋다..

   // 코드 리턴구역
   return (
      <>
         {/* 1.상단영역 */}
         <header className="top-area">
            {/* 로그인 환영메시지 박스 (아직없음) */}

            {/* 네비게이션 GNB파트 */}
            <nav className="gnb">
               <ul>
                  {/* 1. 로고 컴포넌트 */}
                  <li>
                     <a
                        href="#"
                        onClick={(e) => {
                           e.preventDefault(); /* #출력안되게 기본기능막 */
                           goNav(""); /* 슬래쉬없어도 루트로인식 */
                        }}
                     >
                        <Logo logoStyle="top" />
                     </a>
                     {/* <Link to="/">
                        <Logo logoStyle="top" />
                     </Link> */}
                  </li>
                  {/* 2. Gnb메뉴 데이터 배열로 만들기 */}
                  {menu.map((v, i) => (
                     <li key={i}>
                        {
                           //하위메뉴가 있으면 일반 a요소에 출력
                           //없으면 link 라우팅 출력
                           v.sub ? (
                              <a href="#">{v.txt}</a>
                           ) : (
                              <Link to={v.link}>{v.txt}</Link>
                           )
                           //link to -> 라우터에서 a링크대신 지원함
                        }
                        {
                           // 서브 메뉴 데이터가 있으면 하위그리기
                           v.sub && (
                              <div className="smenu">
                                 <ol>
                                    {v.sub.map((v, i) => (
                                       <li key={i}>
                                          <Link to={v.link}>{v.txt}</Link>
                                       </li>
                                    ))}
                                 </ol>
                              </div>
                           )
                        }
                     </li>
                  ))}
                  {/* 3. 검색,회원가입, 로그인 링크 */}
                  <li style={{
                     marginLeft:'auto', /* 끝에붙이기  */
                     marginRight:'25px'
                     }}>
                        {/* 검색입력박스 */}
                        <div className="searchingGnb"
                        style={{display:'block'}}>
                           {/* 검색버튼 돋보기 아이콘 */}
                           <FontAwesomeIcon 
                           icon={faSearch} 
                           className="schbtnGnb"
                           title="open search"
                           />
                           {/* 입력창 */}
                           <input 
                           type="text" 
                           name="schinGnb"
                           id="schinGnb"
                           placeholder=""
                           />
                        </div>

                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
} //////////// TopArea ////////////////////////
