import React from "react";
import ReactDOM from 'react-dom/client';

export default function MainComponent() {
   return (
      <>
         <h1>하하</h1>
      </>
   );
}

//컴포넌트 출력 ////
// 먼저 root 객체만들기ㅐ
const root = ReactDOM
.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent/>);

