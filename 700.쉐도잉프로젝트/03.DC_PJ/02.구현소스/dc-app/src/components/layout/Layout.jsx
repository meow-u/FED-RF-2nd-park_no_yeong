// 전체 레이아웃 컴포넌트

/* 각영역 불러오기 */
import { TopArea } from "./TopArea";
import MainArea from "./MainArea";
import { FooterArea } from "./FooterArea";
import { useCallback, useEffect, useState } from "react";

// 컨텍스트 API 불러오기
import { dCon } from "../modules/dCon";
import { useNavigate } from "react-router-dom";

export default function Layout() {
   // [ 상태관리 변수 ] /////////
   // 1. 로그인 상태관리변수 (로그인후,로그아웃,처음랜더링시 셋팅,
   // loginSts는 상단영역 로그인 상태 null여부확인하여 로그인/아웃버튼 노출시 사용)
   const [loginSts, setLoginSts] =
      // useState("loginSts 초기값 test 나야나");
      useState(sessionStorage.getItem("minfo"));

// 상태관리변수 변경함수도 전달시 콜백처리해야 메모이제이션됨!
  // const 콜백처리함수 = useCallback((x)=>{setLoginSts(x)},[loginSts])


   // -> 초기값으로 로컬 스토리지 "minfo"를 할당함!

   // 2. 로그인 환영메세지 상태변수 (환영메세지생성 공통함수내 , 로그아웃시 초기화셋팅
   // loginMsg는 상단영역 환영메세지박스 요소에서 읽기위해쓰임)
   const [loginMsg, setLoginMsg] = useState(null);
   // console.log('랜더링후loginMsg :',loginMsg);

   // [ 공통 함수 ] //
   // (로그인페이지, 로그아웃시 셋팅)
   // 1. 라우팅 이동함수 : 라우터 이동후크인 useNavigate는 다른 useCalllback()후크로 처리할수 없다!
   const goNav = useNavigate();
   // 따라서 별도의 함수를 만들고 이것을 콜백처리 해준다!
   // 함수메모처리 위해 useCallback()에 넣어준다!
   // useCallback: 기록해놨다가 나중에 읽어~
   const goPage = useCallback((pm1, pm2) => {
      goNav(pm1, pm2);
   },[]);
   // 2. 로그인 환영메세지 생성함수 (로그인후 셋팅)
   const makeMsg = useCallback((name) => {
      // 유저아이콘
      const usrIcon = ["🙍‍♂", "🧏‍♀", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
      // 랜덤수 : 0~4사이의 수
      let rdm = Math.floor(Math.random() * 5);

      setLoginMsg(`welcome ${name} ${usrIcon[rdm]}`);
   },[]);
   // 3. 로그아웃 함수 ////// (상단영역 로그아웃버튼 온클릭 이벤트로 호출)
   const logoutFn = useCallback(() => {
      console.log("로그인상태null/세션스지워!/루트로 돌아가!");
      // 1. 로그인 상태값 null
      setLoginSts(null);
      // 2. 세션스 지우기 : 'minfo'만 지우기
      sessionStorage.removeItem("minfo");
      // 3. 로그인환영메세지 초기화
      setLoginMsg(null);
      // 4. 메인페이지로 돌아가기
      goPage("/");
   },[]); ///// logoutFn 함수 /////

   // 화면 랜더링 구역 ////////
   useEffect(() => {
      // -> [ 로그인상태 체크함수 ] //

      // (새로고침시에도 로그인이 유지되도록)
      // 만약 세션스(minfo)의 값이 null 이 아니면
      // 로그인 상태변수를 업데이트한다!
      // -> null이 아니면 조건문이 true처리 된다!
      if (sessionStorage.getItem("minfo")) {
         // 세션스 변수할당
         let ss = sessionStorage.getItem("minfo");
         // 로그인상태값
         setLoginSts(ss);
         // 로그인 메세지 업데이트 :
         // -> 세션스값의 unm(이름값)을 보내준다!
         makeMsg(JSON.parse(ss).unm);
      } ////// if ////
   }, []); // 랜더링후 처음한번만체크

   // 코드 리턴구역
   return (
      // Provider value 속성으로 전역노출 변수를 설정함!
      <dCon.Provider
         value={{ loginSts, setLoginSts, loginMsg, goPage, makeMsg, logoutFn }}
      >
         {/* 로그인상태, 로긴상태셋팅, 환영메세지, ㅡ전역변수
            nav라우터, 환영메세지생성 , 로그아웃함수 ㅡ공통함수 */}

         {/* setLoginMsg 사용안돼서 지움 */}

         {/* 1. 상단영역 : 메모이제이션을 위해 직접 값전달 */}
         <TopArea loginMsg={loginMsg} loginSts={loginSts} logoutFn={logoutFn} goPage={goPage} />
         {/* 2. 메인영역  */}
         <MainArea />
         {/* 3. 하단영역  */}
         <FooterArea />
      </dCon.Provider>
   );
} //////////// layouts ////////////////////////
