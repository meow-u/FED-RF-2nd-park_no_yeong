// 상단영역 컴포넌트

/* 3 */
// 어느하위컴포넌트에 있어도 이걸로 작동시킴
import { Link } from "react-router-dom";
//gnb 데이터 불러오기
import { menu } from "../data/gnb";

// 상단영역 css불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";

export default function TopArea() {
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
                     <Link to="/">
                        <Logo logoStyle="top" />
                     </Link>
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
               </ul>
            </nav>
         </header>
      </>
   );
} //////////// TopArea ////////////////////////
