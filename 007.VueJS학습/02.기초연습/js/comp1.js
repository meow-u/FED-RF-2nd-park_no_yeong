// 01. 컴포넌트 연습1 JS

// 뷰JS 인스턴스 생성용 함수 : x는 대상요소
const makeVue = (x) => new Vue({ el: x });

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(케밥케이스 컴포넌트 태그명, {옵션})
// 이것으로 생성함!
// 같은이름의 태그 구성요소에 실제 template 값이 들어감!
Vue.component("tit-comp", {
   template: `
    <strong>
        <span>
            😊Vue JS😜 컴포넌트 :
        </span>
        쇼핑모~~~올 갤러리 리스트
    </strong>
    `,
}); //// 전역 컴포넌트 1 ////////

// 컴포넌트를 먼저 만들고 뷰 인스턴스 생성함 !

// 뷰인스턴스 생성하기 : 타이틀 컴포넌트
makeVue(".tit");
// [ 갤러리 리스트용 변수 셋팅 ] /////
// (1) 갤러리 이미지번호용 변수
let inum = 0;
// (2) 상품명 배열
// 상품명 배열
const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

Vue.component("list-comp", {
   // 2-1. template 옵션 : 태그구성
   // v-bind:속성 디렉티브 (src 앞에  v-bind:src 이렇게 한것)
   // 변수를 사용할 수 있는 속성 재구성해줌!(따옴표자리가 따옴표가아니라 문법자리가 되게끔=중괄호처럼)
   template: `
    <div>
      
       <img v-bind:src="gsrc" alt="의류아이템">
       <aside>
          <h2 v-text="gname"></h2>
          <h3 v-text="gprice"></h3>
       </aside>
    </div>
    `, // template ///

   // 2-2. data 옵션 : 컴포넌트 내부 변수 셋팅
   // 실행원리 : 컴포넌트가 빌드할 때
   // data 속성의 '함수를 호출'한다!
   // 그래서 '함수의 리턴되는 객체값'이
   // 컴포넌트 내부에 전달된다!
   // data: function (){}

   data() {
      // <- 여기는 함수구역임
      // **** 객체 리턴 필수(중요!!) ****
      return {
         // <- 여기가 객체지
         // 이미지 src
         gsrc: `./images/${this.setNum()}.jpg`,
         // 상품명
         gname: this.setName(),
         // 상품가격
         gprice: this.setPrice(),
      };
   }, //// data ////
   // 2-3. methods 속성 : 컴포넌트 내부 메서드 셋팅
   methods: {
      // (1) 이미지번호 만들기 함수
      // 외부 전역변수 inum을 1 증가하여 리턴함
      setNum() {
         return ++inum;
      },

      // (2) 상품명 만들기 함수
      setName() {
         return goods[Math.floor(Math.random() * 4)];
      },

      // (3) 가격만들기 함수
      setPrice() {
         let rdm = Math.ceil(Math.random() * 17) + 3;
         return this.addCommas(20000 * rdm) + "원";
      },
      // 세자리콤마 함수
      addCommas(x) {
         return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
   },
}); ///// components /////

// 뷰인스턴스 생성하기 :리스트 컴포넌트 <- 인스턴스화 하기전에 v-for="(n,i) in 50 는 진짜 아무것도 아닌 글씨임
makeVue(".grid");

// 3. 유튜브 동영상 컴포넌트 만들기
Vue.component("ifr-comp", {

   template: `
    <iframe width="49%" style="aspect-ratio: 16/9;" 
    v-bind:src="ifrSrc" title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    `,
    // 3-2 data옵션
    data(){//객체를리턴한다
        return {
            ifrSrc: `https://www.youtube.com/embed/ZH1Y1l1OmTY?autoplay=1&mute=1&loop=1&playlist=ZH1Y1l1OmTY`,
        }
    },
    
});
// 뷰 인스턴스 생성하기 : 유튜브 동영상 컴포넌트
makeVue(".you-box");

// 1) 뉴뷰 인스턴스 생성하고
// 2) <만들컴포이름>으로 html에 생성하고
// 2) Vue.component('만든이름',{ template: `<div>컴포내용</div>` ,data(){ return {키:값,...} }}); 으로 컴포넌트만들기



// 하단영역 컴포넌트 구성하기 

Vue.component('footer-comp',{
    template: `
    <h1 style="text-align:center; background:lightblue; height:100px; line-height:100px;" v-text="content"></h1>
    <div v-html="text"></div>
    `,
    data(){
        return{
            content:"Discovery Expedition",
            text:`<span>상세정보</span>`,
        }

    },
})


// makeVue(".you-box"); 아래랑같은거
new Vue({el: "footer-comp"});
