// 01. 공유신발 JSX

// 상품리스트 서브 컴포넌트 불러오기
import GoodsList from "./components/goods_list";
// 상품상세보기 서브 컴포넌트 불러오기
import GoodsDetail from "./components/goods_detail";
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
   const [viewList,setViewList] = React.useState(true);
   // 2. 상품 데이터 인덱스 값 상태관리 변수 
   const [idx, setIdx] = React.useState(0);
   // 3. 선택 아이템 고유이름 상태관리변수
   const [selItem, setSelItem] = React.useState('공유');
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
         <h1 className="tit">
            {
            selItem=="공유"?
            "공유가 신고 다닌다는!"
            :selItem=="효진"?
            "효진이 입고 다닌다는!"
            :"없음"
         }
         </h1>
         {/* 2. 내용박스 */}
         <section>
            <h2>
               {
                  selItem=='공유'?
                  '공유는 오늘도 멋집니다!'
                  :selItem=='효진'?
                  '효진은 오늘도 예뻐요!'
                  :''
                  }</h2>
            <div className="img-box">
               {
                    selItem =='공유'?
                     <img src="./images/vans/gongyoo.jpg" alt="멋진공유"
                     style={{width:'100%'}}/>
                     
                  : selItem =='효진' ? 
                  <img src="./images/gallery/hyo.jpg" alt="엘레강스한 효진"
                  style={{width:'100%'}}/>
                  :'없음'
               }
              
            </div>
         </section>
         {/* 3. 기능버튼박스 */}
         <div className="btn-box">
         <button
        onClick={()=>
          setSelItem(selItem=="공유"?"효진":"공유")}
        >{selItem=="공유"?"효진":"공유"}초이스 바로가기</button>
         </div>
         {/* 4. 상품리스트박스 */}
      <div className="gwrap">
         {
            // 상태관리변수 viewList값이 true 이면 리스트보기 (삼항연산자)
            // const [viewList,setViewList] = React.useState(true);
            // 이 setViewList 훅 메서드를 객체구조분해할당한 변수에 넣어보내줌. 서브컴포넌트에서 직접 접촉할수 없어서 보내주는것
            
            viewList?
             <GoodsList viewDetail={setViewList} updateIdx={setIdx} selItem={selItem}/> 
             : 
             <GoodsDetail backList={setViewList} gNo={idx} selItem={selItem}/>
            // false이면 상품 상세리스트 보기
         }

      </div>

      </React.Fragment>
   );
} //////// MainComponent 컴포넌트 //////////////////

// 메인 컴포넌트 출력하기
ReactDOM.render(<MainComponent />, document.querySelector("#root"));
