// js4-2.language 객체연습 - 다국어 JS

// 나의 함수 불러오기 
import mfn from './my_function.js';
// console.log(mfn);

// json 데이터 불러오기 : 어써 써 타입제이슨 /같이써 타입제이슨
import langData from './data_lang.json' assert {type:'json'};
console.log(langData);

// 1. 다국어 요구사항
// - 언어 선택박스에서 언어를 변경하면 코드에맞게 다국어 데이터를 
// 제이슨 파일에서 읽어와 본페이지의 해당 데이터를 업데이트한다

// 2. 대상선정
// 2-1. 이벤트대상 : .sel
const selBox = mfn.qs('.sel');

// 2-2. 변경대상 : #gnb a / #cont img / #info address
// (1) gnb 메뉴 :    #gnb a
const gnbList = mfn.qsa('#gnb a');
// (2) 메인이미지 :  #cont img
const mainImg = mfn.qs('#cont img');
// (3) 하단주소 :  #info address
const addrBox = mfn.qs('#info address');

// console.log(selBox,gnbList,mainImg,addrBox)

// 3. 이벤트 설정하기 /////////////////
// 이벤트 종류 : 선택박스가 변경될때 발생하는 이벤트는? 
mfn.addEvt(selBox,'change',chgLang);

// 4. 함수만들기
function chgLang(){ 
    // 1. 선택된 optiobn 의 value 속성 값
    let optval = this.value;
    // 2. 읽어온 option 의 value 값으로 다국어 객체값 매칭하기
    let selLang = langData[optval]; // {이거:{val}}

    //호출 및 값확인
    console.log('변경!',optval,selLang);

    // 3. 데이터 셋팅하기 ///////
    // 3-1. gnb 메뉴 셋팅하기
    gnbList.forEach((ele,idx)=>{
        ele.innerText = selLang['메뉴'][idx];
    })/////// foreach /////////////
    
    // 3-2. 메인이미지 src값 변경하기
    // 각 경로의 이미지명은 다국어 코드몀으로 되어있음 
    mainImg.src =`images/${optval}.jpg`;

    // 3-3. 회사주소 데이터 변경하기
    
    addrBox.innerText = selLang['주소'];


} ////////// chgLang 함수 /////////////////