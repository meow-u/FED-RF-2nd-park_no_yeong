// [ 상품 리스트 서브 컴포넌트 : GoodsList ] // 

// 공유신발 데이터 불러오기
import guData from "../data/gu_data";
// console.log(guData);

export default function GoodsList({viewDetail, updateIdx}){ // 이름은 걍지은거임
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
 
      guData
      .filter((v) => v.category === "woman")
      .map((v,i) => (
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
 