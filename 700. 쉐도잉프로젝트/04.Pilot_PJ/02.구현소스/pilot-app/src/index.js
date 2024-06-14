import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import TopArea from './components/layout/TopArea';
import MainArea from './components/layout/MainArea';
import FooterArea from './components/layout/FooterArea';

// 전체 공통  css
import "./css/index.scss"
//라우터없이 구현: layout컴포넌트없이 여기가 루트역할
function MainComponent(props) {
  return (
    <>
      <TopArea/>
      <MainArea/>
      <FooterArea/>
    </>
  );
  
}

// 출력하기 /////
const root = createRoot(document.querySelector('#root'));
root.render(<MainComponent/>);