// 보그 PJ 메인 JS - main.js
// 모듈파일안에서만 확장자생략가능

// *****************************************
// 상단영역 모듈 불러오기
import TopArea from "./components/TopArea";
// 메인영역 모듈 불러오기
import MainArea from "./components/MainArea";
// 아이템영역 모듈 불러오기
import ItemsArea from "./components/ItemsArea";
// 하단영역 모듈 불러오기
import FooterArea from "./components/FooterArea";
// 갤러리 모듈 불러오기
import Gallery from "./components/Gallery";
// 로그인 모듈 불러오기
import Login from "./components/Login";
// 회원가입 모듈 불러오기
import Member from "./components/Member";
// 부드러운 스크롤 불러오기
import {scrolled, setPos}from "./smoothScroll24";
// *****************************************

// 보통 모아주는 파일은js로 만들고
// 각각의 모듈 하나의 컴포넌트를 구성할떄는 jsx로 파일셋팅함!
// js는 다채로운느낌이들어서(function도있고..)
// -> 리액트는 js든 jsx든 다 리액트문법을 읽을수있어서 뭘로하던 무방!

// [1] 메인페이지 전체 레이아웃 로딩 컴포넌트 ///////////////////
function Layout() {
   // 상태관리 변수 설정구역 /////
   // 1.[1] 메뉴변경 상태변수
   const [menu, setMenu] = React.useState("home");

   /* ***************************************** */
   // 화면 랜더링 직전에 CSS로딩 변경하기 /////
   React.useLayoutEffect(()=>{
       // menu 상태변수에 의존시킨다!
       // 메인 css 대상요소 : #main-css
       document.querySelector("#main-css").href=
       menu=="home" 
       ? "./css/main.css" 
       :menu=="gallery"  //추가
       ? "./css/gallery.css" //추가
       :menu=="login"  //추가
       ? "./css/login.css" //추가
       :menu=="member"  //추가
       ? "./css/member.css" //추가
       : "./css/items.css";
       // menu가 'home'인 경우 메인css를 연결하고 .....
       // 기타메뉴일 경우 items css 연결

       // 페이지 최상단이동코드
       window.scrollTo(0,0);
       //메뉴가바뀔때마다 위 코드들이 실행됨 


       //*************************************************************
       // 부드러운 스크롤 은 홈에서만 적용함!
       if(menu=='home')
       document.addEventListener('wheel',scrolled,{passive:false})
       // 'home'이 아닌경우 모두 이벤트를 해제한다!
       else
       document.removeEventListener('wheel',scrolled,{passive:false})
       
       //*************************************************************
       
    },[menu]);
    /* ***************************************** */

   // 코드리턴구역 ///////
   return (
      <React.Fragment>
         {/* 1. 상단영역 컴포넌트 */}
         <TopArea changeMenu={setMenu}/>
         {/* 2. 메인영역 컴포넌트 */}
         {menu == "home" 
         ? <MainArea /> 
         :menu == "gallery" //추가
         ?  <Gallery/> //추가
         :menu == "login" //추가
         ?  <Login changeMenu={setMenu}/> //추가
         :menu == "member" //추가
         ?  <Member changeMenu={setMenu}/> //추가
         : <ItemsArea catName={menu} />}
         {/* 3. 하단영역 컴포넌트 */}
         <FooterArea />
      </React.Fragment>
   ); ///return
} ///////////Layout 컴포넌트 /////////////////////////////////

// 메인페이지 전체 출력하기
ReactDOM.render(<Layout />, document.querySelector("#root"));

// 각각 따로 불러본다음에 통합함

// 상단
// ReactDOM.render(<TopArea/>,document.querySelector('#top-area'));
// 메인
// ReactDOM.render(<MainArea/>,document.querySelector('#main-area'));
// 하단
// ReactDOM.render(<FooterArea/>,document.querySelector('#footer-area'));
