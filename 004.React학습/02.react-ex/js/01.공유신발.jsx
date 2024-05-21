// 01. 공유신발 JSX

// 상품리스트 서브 컴포넌트 불러오기
import GoodsList from "./components/goods_list";
// 상품상세보기 서브 컴포넌트 불러오기
import GoodsDetail from "./components/goods_detail";
// 공통함수 불러오기// comFn은 여기서 지음
import * as comFn from './common/com_fn';  

// 주의사항!! cdn에서 import 대상은 모두 html페이지에서
// 불러와야 사용할 수 있다.

// [ 메인 컴포넌트 ] ///////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!

// 그렇다면 컴포넌트란?
// 특정 모듈로 구성된 HTML 코드를 리턴하는 객체

// 함수형 컴포넌트는 첫글자 대문자인 함수키워드로 만든다
function MainComponent() {
   // [ 후크 상태관리 변수 셋팅!!] //
   // 1. 리스트 / 상세보기 전환용 상태관리 변수 (감시용변수)
   const [viewList, setViewList] = React.useState(true);
   // 2. 상품 데이터 인덱스 값 상태관리 변수
   const [idx, setIdx] = React.useState(0);
   // 3. 선택 아이템 고유이름 상태관리변수
   const [selItem, setSelItem] = React.useState("공유");
   // 4. 테스트용 상태관리변수 (의존성 테스트용)
   const [test,setTest] = React.useState(true);
   /************************************
     *  [ 코드구성 ]
     * 1. 타이틀 : h1.tit
     * 2. 내용박스 : section 
        > 제목 : h2
        > 이미지박스 : div.img-box > img
     * 3. 기능버튼박스 :  div.btn-box
        > 기능버튼 : button
     * 4. 상품리스트박스 : div.gwrap
        > 상품리스트 : ul > li > ol > li > (img/text)
        > 상품 상세보기 : ol > li > (img/text/button)    
     ************************************/
   // usEffect 테스트함수 ///

   // <button onClick={testFn}>useEffect의존성테스트</button> 
   // 이렇게 설정되어있음 
   const testFn = () => {
      setTest(test?false:true) 
      //의존성 테스트를 위한 상태변수 업데이트
      console.log("테스트중 test상태변수값:",test);
      // true/false값 상호전환변경

   }; //////testFn ////////

   // ->>> useEffect : 컴포넌트 생성,변경,삭제전 DOM완성후
   // 매번 실행되는 코드구역!

   // [ 1. useEffect : 의존성이 없는경우 ]
         React.useEffect(() => {
            console.log("DOM이 완성되었어~");
         });

   // [ 2. useEffect : 의존성이 있는경우 ]
         // selItem 는 초이스버튼클릭시변경, 
         // test 는 의존성버튼클릭시 변경
         React.useEffect(()=>{
            console.log('의존성useEffect 실행: selItem')
            // 초이스 인트로 애니함수 호출
           comFn.choiceIntroAni();

         },[selItem,test]);
         // -> React.useEffect(함수,[의존성변수])
         // -> 의존성변수는 반드시 상태관리변수여야 효과가 있다 
         // -> 의존성변수는 배열안에 여러개 셋팅가능!
         // -> [변수1, 변수2, 변수3]
         // -> 공유초이스와 효진초이스가 변경될 경우에만 실행하려면?
         // useState변수중 원하는 변경에 해당하는 것을 선택하여
         // 의존성 옵션을 주면 해당변수가 변경될 때만  실행하는
         // 랜더링 실행구역이 만들어진다!

   // [ 3. useEffect : 의존성이 있으나 빈경우 ]
         React.useEffect(()=>{
            console.log("useEffect 의존성비어서 한번만실행!");
           // 로고애니함수 호출
           comFn.logoAni();
         },[]);
         // -> React.useEffect(함수,[])
         // -> 최초로딩시 한번만 실행한다!

   // [ 4. useLayoutEffect : 화면 업데이트 되기 전 실행구역 ]
   // -> 매번 화면 업데이트시 사용할 경우 의존성을 셋팅하지 않는다!
   // -> 별도로 화면업데이트 시 특정한 경우에만 사용하기 위해 
   // -> 의존성 셋팅을 통하여 useEffect와 같은 방법을 사용한다.
   React.useLayoutEffect(()=>{
      console.log('useLayoutEffect 화면업데이트 직전 실행구역')
      // (투명하게) 초기화 함수 호출
      comFn.initFn();
      
 // 초이스버튼누를때 값바뀜!
   },[selItem]);


   //////////////////////////////////////////////////////////////
   // 코드 리턴구역 ///////////////////////////////////////////////
   return (
      <React.Fragment>
         {/* 1. 타이틀  */}
         <h1 className="tit">
            <img 
               id='logo'
               style={{
                  width: "70px",
                  verticalAlign: "bottom",
                  marginRight: "10px",
               }}
               src="./images/logo.png"
               alt="로고"
            />
            <span>
               {selItem == "공유"
                  ? "공유가 신고 다닌다는!"
                  : selItem == "효진"
                  ? "효진이 입고 다닌다는!"
                  : "없음"}
            </span>
         </h1>
         {/* 2. 내용박스 */}
         <section>
            <h2 className="stit">
               {selItem == "공유"
                  ? "공유는 오늘도 멋집니다!"
                  : selItem == "효진"
                  ? "효진은 오늘도 예뻐요!"
                  : ""}
            </h2>
            <div className="img-box">
               {selItem == "공유" ? (
                  <img
                     src="./images/vans/gongyoo.jpg"
                     alt="멋진공유"
                  />
               ) : selItem == "효진" ? (
                  <img
                     src="./images/gallery/hyo.jpg"
                     alt="엘레강스한 효진"
                  />
               ) : (
                  "없음"
               )}
            </div>
         </section>
         {/* 3. 기능버튼박스 */}
         <div className="btn-box">
            <button
               onClick={() => {
               // 초이스 종류 변경하기
               setSelItem(selItem == "공유" ? "효진" : "공유");
               // 초이스 변경시 무조건 리스트 페이지보기
               // -> viewlist 업데이트하기
               setViewList(true);
               }}>
               {selItem == "공유" ? "효진" : "공유"}초이스 바로가기
            </button>
            {/* 테스트버튼 */}
            <br />
            <button onClick={testFn}>useEffect의존성테스트</button>
         </div>
         {/* 4. 상품리스트박스 */}
         <div className="gwrap">
            {
               // 상태관리변수 viewList값이 true 이면 리스트보기 (삼항연산자)
               // const [viewList,setViewList] = React.useState(true);
               // 이 setViewList 훅 메서드를 객체구조분해할당한 변수에 넣어보내줌. 서브컴포넌트에서 직접 접촉할수 없어서 보내주는것

               viewList ? (
                  <GoodsList
                     viewDetail={setViewList}
                     updateIdx={setIdx}
                     selItem={selItem}
                  />
               ) : (
                  <GoodsDetail
                     backList={setViewList}
                     gNo={idx}
                     selItem={selItem}
                  />
               )
               // false이면 상품 상세리스트 보기
            }
         </div>
      </React.Fragment>
   );
} //////// MainComponent 컴포넌트 //////////////////

// 메인 컴포넌트 출력하기
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
