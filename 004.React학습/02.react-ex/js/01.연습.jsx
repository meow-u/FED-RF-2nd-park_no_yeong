
import allProducts from "./data/product_data";

function MainComponent(){
   const [isSub, setIsSub] = React.useState(false);
   const [txt, setTxt] = React.useState('');
   

   React.useEffect(() => {
      let li = document.querySelectorAll('li');
      li.forEach(el => el.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCollection(el);
      }));

    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    React.useEffect(() => {
      // txt 값이 업데이트된 후에 필요한 작업을 수행
      console.log('Updated txt:', txt);
    }, [txt]); // txt 값이 변경될 때만 실행되도록 함
  

// 컬렉션 메뉴 토글 함수 
function toggleCollection(el) {
   let a = el.querySelector('a');
   let ol = el.querySelector('ol');
   let toSetText;
 
   if (a.innerText === "collection") {
     ol.style.height = ol.style.height === "21px" ? "0" : "21px";
     // txt 값을 유지하므로 toSetText를 업데이트하지 않음
   } else {
     toSetText = a.innerText;
     // 이부분이 else문에만 있어야함. if문 바깥에 있으면 collection을 클릭했을 때도 txt가 업데이트됨
     setTxt(toSetText);
   }
 
   setIsSub(el.parentElement.classList.contains('sub-menu'));
 }

return(
   <React.Fragment>
      <h1 className="tit">펜할리곤스 향수</h1>
         <section>
            <h2>펜할리곤스 향수 상품 리스트 </h2>
            <div className="img-box">
               <img src="./images/vans/banner_1.jpg" alt="배너이미지" />
            </div>
         </section>
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
         <div className="gwrap">
            <MakeItemList menuTxt={txt} isSub={isSub}/>
         </div>
   </React.Fragment>
)
} //////// MainComponent
ReactDOM.render(<MainComponent/>,root)


function MakeItemList ({menuTxt, isSub}){
console.log('menuTxt(=txt):',menuTxt);
console.log('isSub:',isSub);
   return(
      <ul className="menu">
         {isSub?
         allProducts.filter(v=>v.collection === menuTxt)
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
