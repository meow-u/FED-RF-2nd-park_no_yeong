// 메인 페이지에서 서브 컨텐츠 띄우는 구현코드

// 데이터 셋팅 불러오기 //////
import * as dkbData from "../data/dkb_data.js";


export default function showSubBox(){
    // console.log('나를 부르면 서브가 보여~~!')

    // 1. 서브 컨텐츠 보이기 기능구현
    // (1). 대상선정
    // (1-1) 이벤트대상 :
    // 미리보기 :  .preview-box li
    // 현장포토 : .live-box li
    const subViewBox =
    $(`
        .preview-box li,
        .live-box li,
        .poster-box li
        .clip-box li

    `);

    // (1-2) 변경대상 : .sub-cont
    const subContBox = $('.sub-cont');

    // console.log(subViewBox);
    
    // 2. 이벤트 설정 및 함수구현하기 ///
    subViewBox.click(function () {
        let confPrt = $(this).parent().parent().is(".preview-box")
        // parent() 바로위 상위요소로 이동
        // 두번 위로 이동해서 li위 ul위 div. 
        // 그 요소의 클래스가 .preview-box 인지 확인
        // is(클래스명) 메서드로 알아봄 
        // this.parentElement.parentElement.classlist.contains(클래스명)
        console.log('나야나!',this,confPrt);

    if(confPrt){
            // 1. 키 속성값 읽어오기 
            let dataIdx = $(this).attr('data-idx');
            // attr(속성명) -> 속성값 읽어오기 제이쿼리메서드 (JS = getAttributes)
            // attr(속성명,속성명) -> 속성값 넣기 제이쿼리메서드 (JS = setAttributes)
            console.log('idx:',dataIdx,
            dkbData.previewData);
            
            // [ 배열 순회 메서드 비교 : forEach find ]
            // forEach()는 모두 순회한다!]
            // find()는 조건에 맞을때 return true 하면 
            // 해당 배열값이 변수에 할당된다!
            // if 일치하는 데이터가 없으면 undefined 됨 
        

            // dkbData.previewData.forEach(v=>{
            let selData = dkbData.previewData.find(v=>{
                if(v.idx == dataIdx){
                    // console.log('찾았다!',v)
                    return true;
                }
                
                console.log('돌아!');
            });
            console.log('find()검색결과',selData);
            // 서브박스에 내용넣기
            // 제이쿼리는 innerHTML 할당 대신
            // html()메서드를 사용한다
            subContBox.html(`
            <button class="cbtn">×</button>
            <div class="sub-inbox inbox">
              <h1>${selData.title}</h1>
              <div class="sub-item">
                 ${selData.story}
              </div>
            </div>
        `).show();
        // show()는 display를 보여주는 메서드 
        // hide()는 display를 숨겨주는 메서드
        // toggle()는 display를 토글하는 메서드

        // 닫기버튼 이벤트설정하기
        $('.cbtn').click(()=>subContBox.hide());

    } /// if/ //// 

    })

} //////////////// showSubBox 함수 ///////////