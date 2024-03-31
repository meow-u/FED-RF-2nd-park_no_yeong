// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////

  // 1. 구현 요구사항 : 
  // - 글자를 박스에 넣고 하나씩 일어나면서 등장 (.style3)

  // 2. 대상선정 : .stage-letters
    const stage =domFn.qs('.stage-letters')
    console.log('대상:',stage);

  // 3. 글자 데이터 변수 할당 
  
  const myText ='영민이 풀집중 가동!!!';
 
  let hcode = '';
  let txtSeq = 0;
for( x of myText){

if(x==' '){
hcode +=  `&nbsp;&nbsp;`;
}

else {
hcode +=` 
<span style="
transition-delay:${txtSeq*0.1}s;
rotate:${txtSeq*3}deg
"> ${x} </span>`
txtSeq++
}
stage.innerHTML =hcode;


// console.log(hcode);
}//for of //
setTimeout(() => {
  stage.classList.add('on');
  
}, 1000);
setTimeout(() => {
  stage.classList.remove('on');
  
}, 3000);
setTimeout(() => {
  stage.classList.add('on');
  
}, 5000);