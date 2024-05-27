// 보그 PJ 아이템페이지 JS - items.js
// 모듈파일안에서만 확장자생략가능

// *****************************************
// 상단영역 불러오기
import TopArea from "./components/TopArea";
// 아이템영역 불러오기
import ItemsArea from "./components/ItemsArea";
// 하단영역 불러오기
import FooterArea from "./components/FooterArea";
// *****************************************

// 보통 모아주는 파일은js로 만들고
// 각각의 모듈 하나의 컴포넌트를 구성할떄는 jsx로 파일셋팅함!
// js는 다채로운느낌이들어서(function도있고..)
// -> 리액트는 js든 jsx든 다 리액트문법을 읽을수있어서 뭘로하던 무방!

// [1] 아이템 페이지 전체 레이아웃 로딩 컴포넌트 ///////////////////
function Layout(){
    // 코드리턴구역
    return (
    <React.Fragment>
        {/* 1. 상단영역 컴포넌트 */}
        <TopArea/>    
        {/* 2. 메인영역 컴포넌트 */}
        <ItemsArea catName="fashion"/> {/* <<--- 여기서  catName="living"이렇게  catdata의 키값을 보내줌 */}
        {/* 3. 하단영역 컴포넌트 */}
        <FooterArea/>
    </React.Fragment>
    );///return
} ///////////Layout 컴포넌트 /////////////////////////////////

// 메인페이지 전체 출력하기
ReactDOM.render(<Layout/>,
document.querySelector('#root'));

// 각각 따로 불러본다음에 통합함

// 상단
// ReactDOM.render(<TopArea/>,document.querySelector('#top-area'));
// 메인
// ReactDOM.render(<MainArea/>,document.querySelector('#main-area'));
// 하단
// ReactDOM.render(<FooterArea/>,document.querySelector('#footer-area'));
