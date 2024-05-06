// 01.시작하기 리액트 JS

// JSX에서의 속성 작명은 JavaScript의 관례를 따르며 (camelCase), 일부 HTML 속성과의 차이점이 있을 수 있습니다.

/* 
    html 태그와 JS문법을 ★따옴표없이 사용하는 JSX문법을 사용한다!
    JSX(Javascript XML) 문법을 쓰는 파일은 .js대신 .jsx확장자사용!
    -> return 키워드 사용은 따옴표없이 바로 소괄호롤 묶어사용
    (소괄호 생략 가능!)

    [[ 주의사항 ]]
    1. ★ 함수를 만들경우 반드시 대문자로 시작해야 호출됨!(정해진규칙)
    2. 홀로태그를 사용할때는 마지막에 스스로 닫기를 꼭 해줌!(/>)
    3. ★ 함수 내부의 리턴값으로 만든 요소는 반드시 최상위요소가 하나여여함!
    -> div와 같은 태그로 최상위를 만들어서 내보내기를 한다
    -> 그런데 이런 불필요한 태그구조를 원치 않는경우 
    ★ <React.Fragment></React.Fragment>를 사용하면
    내보낼때 하나로 묶는 역할만 하고 실제로 태그는 출력안됨!
    (참괴: CLI(커맨드라인인터페이스)환경에서는 빈태그를 대신사용가능 <> </> )
*/

// 생성자 함수를 만들어서 사용한다!
// 대문자로 시작하는 이름을 사용한다!
function MyFirstReact() {
   // 목적: 코드를 만들어서 리턴한다!
   return (
      <React.Fragment>
         <h1>1 나는 리액트가 좋아질 것 같다!!! </h1>
         <img
            src="https://velog.velcdn.com/images/choicore/post/da6998c9-f5d3-432e-a3e9-14e18b500bca/image.png"
            alt="리액트로고"
         />
         <h2>
            [ 리액트란 무엇인가? ]
            <br />
            <br /># 프론트엔드 JS 라이브러리다! # 사용자 UI의 구성요소를
            빌드하기 위한도구 <br />
            [ 작동원리 ] <br />
            <br />
            # 가상돔(Virtual DOM)을 사용하여 최소의 html리소스를 사용함으로

            <br />
            빠르고 쉽게 UI화면의 구성한다! <br /># 가상돔은 실제DOM을
            변경하기전에 메모리상에서 구성하는 가짜 DOM이다! <br />
            # 변경사항을 한번에 구성하여 반영하기 위한도구다! <br />
            # 리액트는 변경하고자 하는 부분만 업데이트 가능함! <br />
            <ul>
               <li>리액트 라이브러리</li>
               <li>리액트돔 라이브러리</li>
               <li>바벨 라이브러리</li>
            </ul>
         </h2>
         <iframe width="80%" height="720" src="https://www.youtube.com/embed/QFaFIcGhPoM?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" title="ReactJS Tutorial - 1 - Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </React.Fragment>
   );
} ///////////// MyFirstReact 생성자 함수 /////////////////

// 리액트 html대상요소에 삽입하기
/* 
    가상돔을 셋팅하는 리액트 객체를 호출한다! 
    ->★ ReactDOM.render() -> 요소를 변경하는 메서드

    [여기서 호출형태]
    ReactDOM.render(요소를 리턴하는 함수명으로 된 홀로태그,대상요소)

    // ReactDOM.render(출력할요소, 대상요소)
 ReactDOM.render() 함수의 첫 번째 인자로는 JSX를 반환하는 함수명이나 JSX 코드 자체를 전달할 수 있습니다.

    __________________________________________

    예컨데 함수명이 MyFirstReact이므로 
    요소를 리턴하는 함수명으로 된 홀로태그는? <MyFirstReact />

    그리고 대상요소는 JS문법으로 요소를 선택함!
    document.querySelector("#root")
*/

// ReactDOM.render(<MyFirstReact />, document.querySelector("#mydiv"));


function MyFirstReact2() {
   return (
      <React.Fragment>
         <h1>2 나는 리액트가 좋아질까!!!! </h1>
      </React.Fragment>
   );
}

// ReactDOM.render(<MyFirstReact2 />, document.querySelector("#mydiv"));

// 위 두 컴포넌트를 포함하는 
//부모컴포넌트를 만들어서 출력하기
function ParentComponent() {
   return (
      <div>
       <MyFirstReact />{/* 각각호출 */}
       <MyFirstReact2 />{/* 각각호출 */}
     </div>
   );
}

// 부모컴포넌트를 출력하기 
 ReactDOM.render(<ParentComponent />, document.querySelector("#mydiv"));
 