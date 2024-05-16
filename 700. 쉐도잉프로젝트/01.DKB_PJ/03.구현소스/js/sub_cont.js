// 메인 페이지에서 서브 컨텐츠 띄우는 구현코드

// 데이터 셋팅 불러오기 //////
import * as dkbData from "../data/dkb_data.js";
// console.log(dkbData);


export default function showSubBox(){
    // console.log('나를 부르면 서브가 보여~~!')

    // 1. 서브 컨텐츠 보이기 기능구현
    // (1). 대상선정
    // (1-1) 이벤트대상 :
    // 미리보기 :  .preview-box li
    // 현장포토 : .live-box li
    const subViewBox = $(`
        .preview-box li,
        .live-box li,
        .poster-box li,
        .clip-box li

    `);
    

    // (1-2) 변경대상 : .sub-cont
    const subContBox = $('.sub-cont');

    // console.log(subViewBox);
    
    // 2. 이벤트 설정 및 함수구현하기 ///
    subViewBox.click(function () {
        // let confPrt = 
        // $(this).parent().parent().is(".preview-box")
        // parent() 바로위 상위요소로 이동
        // 두번 위로 이동해서 li위 ul위 div. 
        // 그 요소의 클래스가 .preview-box 인지 확인
        // is(클래스명) 메서드로 알아봄 

        // [ 데이터 명을 data-db에 넣고 읽어오기 ]

        // 사용하고자하는 데이터 이름을 ul태그의
        // data-db에 담아놓고 이것을 읽어온다!
        let db = $(this).parent().attr('data-db'); 
        // $(this).parent() 는 li 바로위 부모인 ul임
        // attr('data-db') 속성값 읽어오기


        // js문법에서는 아래와 같음!
        // this.parentElement.parentElement.classlist.contains(클래스명)




        console.log('나야나!',this,'db:',db,'\ndkbData[db]:',dkbData[db]);

    //if(confPrt){
            // 1. 키 속성값 읽어오기 
            let dataIdx = $(this).attr('data-idx');
            // attr(속성명) -> 속성값 읽어오기 제이쿼리메서드 (JS = getAttributes)
            // attr(속성명,속성명) -> 속성값 넣기 제이쿼리메서드 (JS = setAttributes)
            console.log('dataIdx:',dataIdx,
            dkbData.previewData);
            
            // [ 배열 순회 메서드 비교 : forEach find ]
            // forEach()는 모두 순회한다!]
            // find()는 조건에 맞을때 return true 하면 
            // 해당 배열값이 변수에 할당된다!
            // if 일치하는 데이터가 없으면 undefined 됨 
        

            // dkbData.previewData.forEach(v=>{
            // dkbData[db] -> 해당 데이터 매칭하기!
            let selData = dkbData[db].find(v=>{
                if(v.idx == dataIdx){
                    // console.log('찾았다!',v)
                    return true;
                }
                
                console.log('돌아!');
            });
            console.log('find()검색결과',selData);


        //****************[ (1) 상세이미지 갯수별 구현 ]***************** */

        // 1. 먼저 data.js에서 liveData 각각의 데이터에
        // imgName: ["live_photo7",4] <--- imgName[1]에 키값으로 
        // 상세이미지갯수를 적어둔다.

        // 2. 이미지의 개수를 반영한 배열을 임의로 만들고
        // 필요한 경우 이 배열로 map을 돌려서 코드를 생성한다!
        
        // 우선 빈배열을 만든다
        let iarr = [];
        

        // 현장포토일때 사용
        if(db=="liveData"){
            for(let i=0; i< selData.imgName[1];i++)
            iarr[i] ='';
            
            console.log('이미지 map()을 돌리기위한 임의의 배열 for문돌려 만듬:\n',iarr);
        } //// if ////
        //**************************************************** */
        
        
        //     서브박스에 내용넣기
        //     제이쿼리는 innerHTML 할당 대신
        //     html()메서드를 사용한다
        subContBox.html(

    // 1. 미리보기 출력 (비?집:해?:산:...놀이동산)
            db=="previewData"?
            `
        <button class="cbtn">×</button>
        <div class="sub-inbox inbox">
            <h1>${selData.title}</h1>
            <div class="sub-item">
                ${selData.story}
            </div>
        </div>
      `:
      // 2. 현장포토 출력
      db=="liveData"?
      `
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
          <h1>현장포토 : ${selData.title}</h1>
          <div class="sub-item">
          ${iarr.map((v,i)=>
            
    //**************[ (2) 상세이미지 갯수별 구현 ]************ */
    `
    <img 
    src="./images/live_photo/${
        selData.imgName[0]}/${i+1}.jpg"
        alt="${selData.title}"/>
        `
    //**************************************************** */
          ).join('')}
                
          </div>
      </div>
      `:
      // 3. 대표 포스터 출력
      db=="posterData"?
      `
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
          <h1>대표 포스터 : ${selData.title}</h1>
          <div class="sub-item">
            <img 
                src="./images/poster_img/${
                    selData.imgName}.jpg"
                alt="${selData.title}"/>
          </div>
      </div>
      `:
      // 4. 최신동영상 출력
      db=="clipData"?
      `
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
          <h1>클립영상 : ${selData.title}</h1>
          <div class="sub-item">
            <iframe src="https://www.youtube.com/embed/${selData.mvid}?autoplay=1" allow="autoplay"></iframe>
            <h2>${selData.subtit}</h2>
          </div>
      </div>
      `:

      /* 5. 위 모든사항에 해당사항이 없을경우 (else문 느낌) */
      `      
      <button class="cbtn">×</button>
      <div class="sub-inbox inbox">
          <h1> DB 정보 확인 필요 </h1>
      </div>
      `

      ).show();
      // show()는 display를 보여주는 메서드 

        // hide()는 display를 숨겨주는 메서드
        // toggle()는 display를 토글하는 메서드

        // 닫기버튼 이벤트설정하기
        $('.cbtn').click(()=>subContBox.hide());

    //} /// if/ //// 

    })

} //////////////// showSubBox 함수 ///////////