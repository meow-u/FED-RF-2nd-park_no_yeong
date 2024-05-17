// 01. 공유신발 JSX

// 공유신발 데이터 불러오기
import guData from "./data/gu_data";

// console.log(guData);

// [ 메인 컴포넌트 ] ///////////
// 메인의 의미는? 다른 구성요소 컴포넌트들을 모아
// 최종적으로 랜더링하는 구성 컴포넌트를 말한다!

// 그렇다면 컴포넌트란?
// 특정 모듈로 구성된 HTML 코드를 리턴하는 객체


// 함수형 컴포넌트는 첫글자 대문자인 함수키워드로 만든다
function MainComponent() {
   // [ 후크 상태관리 변수 셋팅!!] //
   // 1. 리스트 / 상세보기 전환용 상태관리 변수 (감시용변수)
   const [viewList,setViewList] = React.useState(true);
   // 2. 상품 데이터 인덱스 값 상태관리 변수 
   const [idx, setIdx] = React.useState(0);





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

   // 코드 리턴구역 ///////////////
   return (
      <React.Fragment>
         {/* 1. 타이틀  */}
         <h1 className="tit">공유가 신고 다닌다는!</h1>
         {/* 2. 내용박스 */}
         <section>
            <h2>공유는 오늘도 멋집니다!</h2>
            <div className="img-box">
               <img src="./images/vans/gongyoo.jpg" alt="멋진공유" />
            </div>
         </section>
         {/* 3. 기능버튼박스 */}
         <div className="btn-box">
            <button>효진초이스 바로가기</button>
         </div>
         {/* 4. 상품리스트박스 */}
      <div className="gwrap">
         {
            // 상태관리변수 viewList값이 true 이면 리스트보기 (삼항연산자)
            // const [viewList,setViewList] = React.useState(true);
            // 이 setViewList 훅 메서드를 객체구조분해할당한 변수에 넣어보내줌. 서브컴포넌트에서 직접 접촉할수 없어서 보내주는것
            
            viewList?
             <GoodsList viewDetail={setViewList} updateIdx={setIdx}/> : 
             <GoodsDetail backList={setViewList} gNo={idx}/>
            // false이면 상품 상세리스트 보기
         }

      </div>

      </React.Fragment>
   );
} //////// MainComponent 컴포넌트 //////////////////

// [ 상품 리스트 서브 컴포넌트 : GoodsList ] // 
function GoodsList({viewDetail, updateIdx}){ // 이름은 걍지은거임
   // viewDetail- 부모컴포넌트가 전달해준 상태변수 
   // (viewList를 업데이트하는 setViewList 메서드임!)

   // updateIdx - 부모 컴포넌트의 setIdx 상태관리변수의 메서드
   // 코드 리턴구역
   return (
   <ul>
     {
     // 반복요소 li에 key 속성을 쓸것을
     // 리액트는 필수적으로 요구함!
     // 왜 쓰나? 업데이트시 리액트 자체적으로  순번구분을 위함
     // node.js 개발환경에서는 안쓰면 에러남!!
     // 여기서는 cdn이라 안넣어도 에러안남(그대로 습관적으로 넣을것)
     // viewDetail(false) 바로실행되지않게 익명함수에 넣음

     guData.map((v,i) => (
         <li key={i}>
            <a href="#" onClick={(e)=>{
               // 왜 프리벤트디폴트하면 안튀지? > a요소 기본이동 막기
               e.preventDefault();

               // [ 상태변수 업데이트 ]

               // setViewList메서드가 viewDetail로 들어옴
               viewDetail(false);
               // setIdx메서드가 updateIdx로 들어옴
               updateIdx(i);
               }}>

               <ol class="glist">
                  <li>
                     <img
                        src={`./images/vans/vans_${v.idx}.jpg`}
                        alt="신발"
                     />
                  </li>
                  <li>{v.gname}</li>
                  <li>가격 : {v.gprice}</li>
               </ol>
            </a>
         </li>
      ))}
   </ul>
   );
} //////////GoodsList 컴포넌트 ///////

// [ 상품 상세보기 서브 컴포넌트 : GoodsDetail ] //
function GoodsDetail({backList, gNo}) {
   // backList- 부모컴포넌트가 전달해준 상태변수 
   // (viewList를업데이트하는 setViewList 메서드임!)
  
   // gNo - 상품 데이터 배열 순번 
   // (idx 상태관리 변수가 전달됨 -> setIdx 값 변경시 컴포넌트 변경됨) 
   // 코드 리턴구역
   return (
      <ol style={{display:"flex", listStyle:"none"}}>
      <li>
         <img 
         src={'./images/vans/vans_'+guData[gNo].idx+'.jpg'} 
         alt='반스신발' style={{width:'100%'}}/>
      </li>
      <li style={{lineHeight:"2",padding:"10px",textAlign:"center"}}>
         상품명 : {guData[gNo].gname}<br/>
         가격 : {guData[gNo].gprice}<br/>
         소재 : {guData[gNo].소재}<br/>
         색상 : {guData[gNo].색상}<br/>
         치수 : {guData[gNo].치수}<br/>
         제조자/수입자 : 
         {guData[gNo]["제조자/수입자"]}<br/>
         제조국 : {guData[gNo].제조국}<br/>
         제조연월 : {guData[gNo].제조연월}<br/>
         A/S 책임자와 전화번호 : <br />
         {guData[gNo]["A/S 책임자와 전화번호"]}<br/>
         Model : {guData[gNo].Model}<br/>
         
      <div className='btnbx' style={{textAlign:'right', padding:'15px'}}>
         <button 
         onClick={()=>backList(true)}
         style={{fontSize:'24px'}}>
               리스트로 가기
         </button>
      </div>
   </li>
   </ol>
   );
} ///////////// GoodsDetail 컴포넌트 //////////////


// 메인 컴포넌트 출력하기
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
