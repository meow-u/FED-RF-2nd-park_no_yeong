// 06.Event : 리액트 이벤트

// 나의함수 불러오기
import mFn from "./my_function";

/************************************************************* 
    [ 리액트 이벤트 ]
    1. 일반 HTML DOM 이벤트와 마찬가지로 사용자이벤트 사용가능함
    2. 이벤트 종류: click, change, mouseover 등 일반이벤트
    3. 이벤트 표기법: 캐믈케이스 - 첫글자소문자 단어마다 대문자
    예) onclick -> onClick
    4. 이벤트 핸들러 : 중괄호 안에 작성(중괄호는 JSX표현식영역)
    예) onclick="getIt()" => onClick={getIt}
*************************************************************/

//// 전체 이벤트 적용할 컴포넌트 구성하기 //////////////
function EventShow() {
   // 컴포넌트 리턴 코드 위에서 이벤트 처리를 위한
   // 함수를 만들어서 사용할 수있다!!!
   // 지역함수로 사용되는 것임!

   // 오버시 이벤트 한번만 실행되게 상태변수 만들기
   let onceSts = false;

   // 1. 컴포넌트 내부함수 //////

   // (1) 소원이 무엇이냐 물어보는 함수
   const showAladin = () => {
      // 1. 한번만 실행 분기문
      if (onceSts) return;
      onceSts = true; // 한번만실행

      console.log("알라딘이 누구야!");

      // 2. 알라딘 이미지 출력하기
      // (1) html 출력대상 : #ala
      let alaBox = mFn.qs("#ala");

      // (2) 이미지출력
      ReactDOM.render(<img src="./images/ala4.jpg" alt="알라딘" />, alaBox);

      // 3. 말풍선 박스에 글자넣기 ///
      let titBox = mFn.qs(".tit");
      titBox.innerText = "소원이 무엇이냐?";
      // 4. 말풍선 박스에 인라인 CSS 코드넣기
      titBox.style.cssText = `
        width: 50%;
        padding: 50px 0;
        margin: 0 auto;
        border: 2px solid lime;
        transition: all 2s 1s;
        color: white;
        opacity: 0;
    `;

      // 5. 0.5초 후 CSS 변경으로 타이틀 등장하기
      setTimeout(() => {
         titBox.style.transition = "2s ease-in-out 1s";
         titBox.style.opacity = 1;
         titBox.style.borderRadius = "50%";
         titBox.style.translate = "0 -200px";
         titBox.style.fontSize = "40px";
         titBox.style.backgroundColor = "rgba(0,0,0,0.5)";
      }, 500);

      // 6. 램프가져오기 버튼 3초뒤 보이기
      setTimeout(() => {
         mFn.qsa("button")[0].style.display = "inline-block";
      }, 3000);
   }; ////////////// showAladin 함수 ////////////////

   // (2) 램프가져오기 함수 //////////////
   const getLamp = ()=>{
    console.log('램프가져와');
   };

   // 2. 리턴코드만들기 ////////////
   return (
      <React.Fragment>
         <div id="tbox" style={{ textAlign: "center" }}>
            {/* 스타일 인라인 적용시 바깥중괄호는 표현식
                내부 중괄호는 객체형식의 스타일 설정임! */}
            <img
               src="./images/genie.avif"
               alt="지니"
               /* 마우스 오버시 showAladin 함수 호출 */
               onMouseOver={showAladin}
            />
            {/* 램프가 들어갈 요소  */}
            <div className="lamp"></div>

            {/* 버튼들 */}
            <button onClick={getLamp}>램프가져오기~!</button>
            <button>소원빌기~! 페라리주세요!</button>

            {/* 소원이무엇이냐 말풍선 박스 */}
            <div className="tit"></div>
         </div>
      </React.Fragment>
   );
} ////////// Event Show 컴포넌트 ////////////////////

// 화면출력하기 //////////////////
// ReactDOM.render(넣을코드 , 대상)
ReactDOM.render(<EventShow />, mFn.qs("#root"));
