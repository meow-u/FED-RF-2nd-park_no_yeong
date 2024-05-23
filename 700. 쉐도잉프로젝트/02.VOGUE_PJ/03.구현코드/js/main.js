// 보그 PJ 메인 JS - main.js

// 보통 모아주는 파일은js로 만들고
// 각각의 모듈 하나의 컴포넌트를 구성할떄는 jsx로 파일셋팅함!
// js는 다채로운느낌이들어서(function도있고..)
// -> 리액트는 js든 jsx든 다 리액트문법을 읽을수있어서 뭘로하던 무방!

// [1] 메인페이지 전체 레이아웃 로딩 컴포넌트 ///////////////////
function Layout(){
    <div>
        // 1. 상단영역 컴포넌트
        <TopArea/>    
        // 2. 메인영역 컴포넌트
        <MainArea/>
        // 3. 하단영역 컴포넌트
        <FooterArea/>
    </div>
} ///////////Layout 컴포넌트 /////////////////////////////////

// 레이아웃 영역 넣어보기
// ReactDOM.render(어쩌구,저쩌구);

// 상단
ReactDOM.render(<TopArea/>,document.querySelector('#top-area'));
// 메인
ReactDOM.render(<MainArea/>,document.querySelector('#main-area'));
// 하단
ReactDOM.render(<FooterArea/>,document.querySelector('#footer-area'));

// [2] 상단영역 서브 컴포넌트 /////////////
function TopArea(){//붙여넣고 주석>주석다시달고, className으로바꾸고.
    // 코드리턴구역 /////
    return(
    <header className="top-area ibx common-area">
        {/* <!-- 1-1.상단메뉴 --> */}
        <div className="tmenu">
        {/* <!-- 1-1-1.sns박스 --> */}
        <div className="sns">
            <a href="#" className="fi fi-instagram" title="인스타그램">
            <span className="ir">인스타그램</span>
            </a>
            <a href="#" className="fi fi-facebook" title="페이스북">
            <span className="ir">페이스북</span>
            </a>
            <a href="#" className="fi fi-twitter" title="트위터">
            <span className="ir">트위터</span>
            </a>
            <a href="#" className="fi fi-youtube-play" title="유튜브">
            <span className="ir">유튜브</span>
            </a>

            <a href="#" className="fi fi-laptop" title="로그인">
            <span className="ir">로그인</span>
            </a>
            <a href="#" className="fi fi-user-secret" title="회원가입">
            <span className="ir">회원가입</span>
            </a>
            <a href="#" className="fi fi-camera" title="갤러리">
            <span className="ir">갤러리</span>
            </a>
            <a href="#" className="fi cas" title="카카오스토리">
            <span className="ir">카카오스토리</span>
            </a>
        </div>
        {/* <!-- 1-1-2.사이드메뉴 --> */}
        <div className="sideMenu">
            <ul className="smbx">
            <li>
                <a href="#">SIDE MENU</a>
                {/* <!-- 서브메뉴 --> */}
                <ol className="smsub">
                <li>
                    <a href="#">회사 소개</a>
                </li>
                <li>
                    <a href="#">광고 및 제휴</a>
                </li>
                <li>
                    <a href="#">개인정보 처리방침</a>
                </li>
                </ol>
            </li>
            <li>
                <a href="#">SUBSCRIBE</a>
            </li>
            </ul>
        </div>
        </div>
        {/* <!-- 1-2.로고박스 --> */}
        <h1 className="logo">
        <a href="#">
            <img src="./images/mlogo.png" alt="메인로고" />
        </a>
        </h1>
        {/* <!-- 1-3.GNB박스 --> */}
        <nav className="gnb">
        <ul>
            <li>
            <a href="#">FASHION</a>
            </li>
            <li>
            <a href="#">BEAUTY</a>
            </li>
            <li>
            <a href="#">LIVING</a>
            </li>
            <li>
            <a href="#">PEOPLE</a>
            </li>
            <li>
            <a href="#">VIDEO</a>
            </li>
            <li>
            <a href="#">RUNWAY</a>
            </li>
            <li>
            <a href="#">TIME &amp; GEM</a>
            </li>
            <li>
            <a href="#">SHOPPING</a>
            </li>
            <li>
            {/* <!-- 돋보기 검색버튼 --> */}
            <i href="#" className="fi fi-search">
                <span className="ir">search</span>
            </i>
            </li>
        </ul>
        </nav>
    </header>
    
    ); /////return

} //////// TopArea 컴포넌트 //////////////


// [3] 메인영역 서브 컴포넌트 /////////////
function MainArea(){
    // 코드리턴구역 /////
    return(
        
        <main className="main-area ibx">
        {/* <!-- 컨텐츠1 --> */}
        <section className="pt1">
           <div className="cbx bgi bg1">
              <h2>복싱과 맺은 모델 수주의 이야기</h2>
           </div>
        </section>
        {/* <!-- 컨텐츠2 --> */}
        <section className="pt2">
           <div className="cbx bgi bg2">
              <h2>안현모,홍지민,강주은 써마지 더 리얼 인터뷰</h2>
           </div>
           <div className="cbx bgi bg3">
              <h2>손 번쩍! 잘 때 ‘만세 자세’가 해로운 이유</h2>
           </div>
           <div className="cbx bgi bg4">
              <h2>아미(Ami)와 장폴구드(Jean-Paul Goude)의 컬래버레이션</h2>
           </div>
        </section>
        {/* <!-- 컨텐츠3 --> */}
        <section className="pt1">
           <div className="cbx bgi bg5">
              <h2>
                 &lt;퀸스 갬빗&gt; 이후 엄청난 신작을 준비 중인 안야 테일러
                 조이
              </h2>
           </div>
        </section>
        {/* <!-- 컨텐츠4 --> */}
        <section className="pt2">
           <div className="cbx bgi bg6">
              <h2>마리아 그라치아 치우리의 디올 크루즈 2022 컬렉션 쇼</h2>
           </div>
           <div className="cbx bgi bg7">
              <h2>약, 그렇게 버리면 되돌아옵니다</h2>
           </div>
           <div className="cbx bgi bg8">
              <h2>셀럽들이 하는 여름 주얼리</h2>
           </div>
        </section>
        {/* <!-- 컨텐츠5 --> */}
        <section className="pt1">
           <div className="cbx bgi bg9">
              <h2>김여진이 감행하는 변화에 대하여</h2>
           </div>
        </section>
        {/* <!-- 컨텐츠6 --> */}
        <section className="pt2">
           <div className="cbx bgi bg10">
              <h2>모델 아이린이 선택한 여름 원피스 Best</h2>
           </div>
           <div className="cbx bgi bg11">
              <h2>김여진이 감행하는 변화에 대하여</h2>
           </div>
           <div className="cbx bgi bg12">
              <h2>샛노란 ‘자무 주스’가 뜬다!</h2>
           </div>
        </section>
        {/* <!-- 컨텐츠7 --> */}
        <section className="pt2">
           <div className="cbx bgi bg13">
              <h2>체커보드의 색다른 매력</h2>
           </div>
           <div className="cbx bgi bg14">
              <h2>‘손꾸’의 끝, 핑거 타투와 네일의 조합</h2>
           </div>
           <div className="cbx bgi bg15">
              <h2>지속 가능한 변화를 이끄는 백 브랜드 6</h2>
           </div>
        </section>
     </main>
  
    );

} //////// MainArea 컴포넌트 ////////////


// [4] 하단영역 서브 컴포넌트 /////////////
function FooterArea(){ 
    // 코드리턴구역 /////
    return(
        
    <footer className="footer-area ibx common-area">
    {/* <!-- 3-1.하단로고 --> */}
    <div className="blogo">
        <img src="./images/footer_logo.png" alt="하단로고" />
    </div>
    {/* <!-- 3-2.회사주소 --> */}
    <address className="addr">
        WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
        VOGUE.COM KOREA IS OPERATED BY DOOSAN MAGAZINE.
    </address>
    {/* <!-- 3-3.하단링크 --> */}
    <ul className="blink">
        <li>
            <a href="#">정기구독</a>
        </li>
        <li>
            <a href="#">회사소개</a>
        </li>
        <li>
            <a href="#">광고 및 제휴</a>
        </li>
        <li>
            <a href="#">개인정보 처리방침</a>
        </li>
    </ul>
    </footer>
      
    );

} //////// FooterArea 컴포넌트 ///////////
