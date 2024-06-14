
import { useEffect } from "react";
import allProducts from "./data/product_data";

function MainComponent(){
   const [isSub, setIsSub] = React.useState(false);
   const [txt, setTxt] = React.useState(''); 
   //클릭단어가 컬렉션이 아닐경우 a.innerText를 할당   

   React.useEffect(() => {
      let li = document.querySelectorAll('li');
      console.log('모든 li(서브메뉴포함)',li);

      li.forEach(el => el.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCollection(el);
      }));

    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    React.useEffect(() => {
      // txt 값이 업데이트된 후에 필요한 작업을 수행
      console.log('Updated txt:', txt);
    }, [txt]); // txt 값이 변경될 때만 실행되도록 함
  


// 컬렉션 메뉴 토글 함수 ////////////////////////////////////
function toggleCollection(el) { // 개별 li 클릭시 호출되는 함수( el은 개별 li)
   let a = el.querySelector('a');// 각 li안의 이너텍스트를 포함한 개별 a링크
   let ol = el.querySelector('ol');// 각 li안의 서브메뉴 ol 덩어리
   let toSetText; //전역변수
 
   if (a.innerText === "collection") {// 컬렉션일때 높이토글  (하위보이게)
     ol.style.height = ol.style.height === "21px" ? "0" : "21px";
     // txt 값을 유지하므로 toSetText를 업데이트하지 않음

   } else { 
     toSetText = a.innerText;
     // 이부분이 else문에만 있어야함. if문 바깥에 있으면 collection을 클릭했을 때도 txt가 업데이트됨
     setTxt(toSetText);
     // 나머지 li 메뉴클릭시 내부 a의 이너텍스트값으로  'txt상태변수변경 '
   }
 
   setIsSub(el.parentElement.classList.contains('sub-menu'));
   // 클릭된 각 li 부모 클래스가 sub-menu가 있으면 true (서브메뉴인지확인)
 }///////////////////////////////////////////////////// ///////

return(
   <React.Fragment>
      <h1 className="tit">펜할리곤스 향수</h1>
         <section>
            <h2>펜할리곤스 향수 상품 리스트 </h2>
            <div className="img-box">
               <img src="./images/vans/banner_1.jpg" alt="배너이미지" />
            </div>
         </section>
         {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메뉴ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
         <ul className="menu-box">
            <li><a href="###">FRAGRANCES</a></li>
            <li><a href="###">GIFTING</a></li>
            <li><a href="###">BATH &amp; BODY</a></li>
            <li><a href="###">home</a></li>
            <li><a href="###">collection</a>
               <ol className="sub-menu">
                  <li>
                   <a href="###">British Tales</a>
                  </li>
                  <li>
                   <a href="###">Potions &amp; Remedies</a>
                  </li>
                  <li>
                   <a href="###">Trade Routes</a>
                  </li>
                  <li>
                   <a href="###">Portraits</a>
                  </li>
               </ol>
            </li>
         </ul>
         {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
         <div className="gwrap">
            <MakeItemList menuTxt={txt} isSub={isSub}/>
         </div>
   </React.Fragment>
)
} //////// MainComponent ////////////////////////////////////////////////////////
ReactDOM.render(<MainComponent/>,root)


function MakeItemList ({menuTxt, isSub}){
console.log('menuTxt(=txt):',menuTxt);
console.log('isSub:',isSub);

///////////////////
React.useEffect(()=>{

   /* menuTxt는 왜안찍힘???????????? */
   let result=   allProducts.filter((v)=>(v.collection === "British Tales"))
   console.log('result:',result);

});
//////////////////

   return(
      <ul className="menu">
         {isSub?//true일시 서브메뉴
         allProducts.filter((v)=>v.collection === menuTxt) //txt는 전달받은 이너텍스트
         .map((v,i)=>(
            <li key={i}>
               <div><img src={`./images/images/${v.img}`} alt={v.name[0]}/></div>
               <h4>{v.name[0]}</h4>
               <h4>{v.price}원</h4>
               <button>장바구니에 추가</button>
            </li>
         
         )) :
         allProducts.filter(v=>v.type === menuTxt)
         .map((v,i)=>(
            <li key={i}>
               <div><img src={`./images/images/${v.img}`} alt={v.name[0]}/></div>
               <h4>{v.name[0]}</h4>
               <h4>{v.price}원</h4>
               <button>장바구니에 추가</button>
            </li>
         
         ))
         }
      </ul>
   )
}////////// MakeItemList 컴포넌트
