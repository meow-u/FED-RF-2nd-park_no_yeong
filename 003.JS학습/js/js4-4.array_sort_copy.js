// JS4-4.배열정렬 및 검색 JS

// 1. parseInt(selValue)
//      문자열을 정수로 변환하는 함수이다.
//      소수점이 있으면 소수점 이하를 제거한다.

// 2. +selValue는 문자열을 숫자로 변환하는 방법이다.
//      여기서 +는 단항연산자로서 숫자로 변환하는 역할을 한다.
//      문자열이 숫자로 시작하면 숫자로변환하고
//      그렇지 않으면 NaN을 반환한다.

// 3. Number(selValue)는 문자열을 숫자로 변환하는 방법이다.

// 1번은 정수로 변환하는 함수이기 떄문에 소수점을 제거한다.
// 나머지는 소수점을 포함한다.

// 나의 함수 불러오기
import mFn from "./my_function.js";

// console.log(mFn);

// 배열 정의
const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
const arrText = [
  "kiwi",
  "banana",
  "watermelon",
  "grape",
  "apple",
  "orange",
  "strawberry",
];

/******************************************
 *  선택박스1 변경시 배열을 sort()로 정렬 후  출력하기
 *  이벤트대상:  #sel
 *  대상배열: arrNumber
 *  출력대상: .showNum
 ******************************************/
const selectBox = mFn.qs("#sel"); // 선택박스
const showBox = mFn.qs(".showNum"); // 출력박스
// console.log(selectBox);
mFn.addEvt(selectBox, "change", (e) => showArray(e, arrNumber));

////////////////////// 1,2 공통함수 //////////////////////
function showArray(e, arr) {
  //  이벤트로 호출시 e는 이벤트객체, arr는 호출시 전달받는 배열

  // let arrCopy = arr.slice(); // 배열복사 방법1
  let arrCopy = [...arr]; // 배열복사 방법2
  console.log("원본배열:", arr, "\n복사한배열:", arrCopy);

  console.log(e.target.value);
  let selOptValue = +e.target.value; /// 선택박스의 value값은 문자형으로 인식 됨 따라서 숫자로 변환해줘야함)
  let selId = e.currentTarget.id; // 선택박스 아이디

  if (selOptValue === 1) {
    // 오름차순
    arrCopy.sort((a, b) => (a == b ? 0 : a > b ? 1 : -1));
  } else if (selOptValue === 2) {
    // 내림차순
    arrCopy.sort((a, b) => (a == b ? 0 : a > b ? -1 : 1));
  }

  // 선택박스 아이디에 따라 호출해주는 함수가 다름!
  if (selId == "sel") showImgFn(arrCopy);
  else if (selId == "sel2") showSpanTextFn(arrCopy);
} ///////// showArray함수 /////////////////////////////////
/////////////////////////////////////////////////////////

// 배열출력 함수 1
function showImgFn(arr) {
  // arr 전달된 배열
  showBox.innerHTML = arr
    .map((v) => `<img src="./images/num/num_0${v}.png" alt="숫자${v}이미지" />`)
    .join("");

  console.log("복사후 정렬된배열:", arr, "\n원본배열:", arrNumber);
} ////////// showArray함수 //////////////////////

/******************************************
 *  선택박스2 변경시 배열을 sort()로 정렬 후  출력하기
 *  이벤트대상:  #sel2
 *  대상배열: arrText
 *  출력대상: .showNum2
 ******************************************/
const selectBox2 = mFn.qs("#sel2"); // 선택박스
const showBox2 = mFn.qs(".showNum2"); // 출력박스
// console.log(selectBox2);
mFn.addEvt(selectBox2, "change", (e) => showArray(e, arrText));

// 배열출력 함수 2
const showSpanTextFn = (arr) => {
  // arr 전달된 배열
  showBox2.innerHTML = arr.map((v) => `<span>❤️${v}</span><br>`).join("");
  console.log("복사후 정렬된배열:", arr, "\n원본배열:", arrText);
}; ///////// showSpanTextFn

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
const list = [
  // 순서와 제목, 내용이 랜덤인 배열
  { idx: 3, title: "여행", content: "이번에는 여행에 관한 이야기를 나눠보려 합니다. 작년 여름에 다녀온 유럽 여행에 대한 추억을 공유하고 싶네요." },
  { idx: 2, title: "단풍", content: "난 강릉에 가을 단풍 구경을 하러 다녀왔는데, 정말 멋진 풍경을 볼 수 있었습니다. 추운 겨울이지만 가을 여행도 좋습니다." },
  { idx: 5, title: "라디오", content: "라디오에서 읽은 책에 대해 이야기를 나누고 싶습니다. '소년이 온다'라는 소설을 읽었는데, 감동적인 이야기였습니다." },
  { idx: 1, title: "노래", content: "가을에 오랜만에 듣고 싶은 노래를 공유해보려 합니다. 최근에 발매된 아이돌 그룹의 새로운 앨범을 듣고 있는데, 정말 좋은 음악이 많더라고요." },
  { idx: 4, title: "효율성?", content: "다 재택근무가 많은데, 오히려 집에서 일하는 게 더 바쁘네요. 어떻게 하면 효율적으로 일을 할 수 있을까요?" },
  { idx: 6, title: "취미", content: "요즘 취미생활을 시작했는데, 그림 그리기에 푹 빠졌습니다. 그림을 그리면서 스트레스를 풀 수 있어서 좋네요." },
  { idx: 7, title: "한가해요", content: "한가할때 새로운 취미를 찾고 있는데, 요리를 시작해보려 합니다. 요리를 잘하는 친구에게 레시피를 배워서 집에서도 맛있는 음식을 만들어 먹고 싶어요." },
  { idx: 8, title: "하늘보기", content: "파란하늘보는 취미생활을 시작했는데, 그림 그리기에 푹 빠졌습니다. 그림을 그리면서 스트레스를 풀 수 있어서 좋네요." },
  { idx: 9, title: "가끔 그림그리기", content: "요즘 새로운 취미를 찾고 있는데, 요리를 시작해보려 합니다. 요리를 잘하는 친구에게 레시피를 배워서 집에서도 맛있는 음식을 만들어 먹고 싶어요." },
];

const selectBox3 = mFn.qs("#sel3"); // 정렬선택박스
const indexBox3 = mFn.qs("#cta3"); // 인덱스입력박스
const ListBox = mFn.qs(".showList3"); // 출력박스
// console.log(selectBox3, indexBox3, ListBox);

const makeList = (arr,showBox) => {
  showBox.innerHTML = `
  <table>
     <thead>
      <tr>
        <th>번호</td>
        <th>제목</td>
        <th>내용</td>
      </tr>
     </thead>
      <tbody>
      ${arr
        .map(
          (v) => `
          <tr>
          <td>${v.idx}</td>
        <td>${v.title}</td>
        <td>${v.content}</td>
        </tr>
        `
        )
        .join("")}
      </tbody>
    </table>
    `;
}; ////////// makeList함수 //////////////////////
//최초로 리스트 만들기
makeList(list, ListBox);

// 인덱스입력박스 변경시 정렬선택박스 '정렬선택'으로 초기화하기
mFn.addEvt(indexBox3, "change", () => {
  selectBox3.value= 0;
});

// 정렬선택박스 변경시 리스트 정렬하기
mFn.addEvt(selectBox3, "change", (e) =>
  showList(e, list, indexBox3.value, selectBox3.value, ListBox)
);

function showList(e, arr, indexVal, selVal, showBox) {
  console.log("선택된 인덱스값:", indexVal);
  console.log("선택된 정렬값:", selVal);
  let arrCopy = JSON.parse(JSON.stringify(arr)); // 객체배열 복사
  // console.log("원본배열:", arr, "\n복사한배열:", arrCopy);


  
  // 선택된 정렬값에 따라 정렬하기
  if (selVal == 1) {
    // 오름차순
    arrCopy.sort((a, b) =>
      {
        // console.log(a[indexVal], b[indexVal]);
        return (a[indexVal] == b[indexVal] ? 0 : a[indexVal] > b[indexVal] ? 1 : -1)}
    );
  }
  else if (selVal == 2) {
    // 내림차순
    arrCopy.sort((a, b) =>
      // console.log(a[indexVal], b[indexVal]);
      (a[indexVal] == b[indexVal] ? 0 : a[indexVal] > b[indexVal] ? -1 : 1)
    );
  }
  console.log("원본배열:", arr,"정렬결과 배열:", arrCopy);

  makeList(arrCopy, showBox);
} /////////// showList함수 //////////////////////

const list2 = [
  { idx: 21, title: "운동", content: "운동을 시작해보려고 합니다. 어떤 운동이 좋을까요?" },
  { idx: 18, title: "요리", content: "새로운 레시피를 시도해보려고 합니다. 어떤 요리를 해볼까요?" },
  { idx: 15, title: "산책", content: "날씨가 좋아서 산책을 다녀왔어요. 공기가 시원해서 기분이 좋았어요." },
  { idx: 20, title: "책 읽기", content: "최근에 읽은 소설이 정말 재미있어서 새로운 책을 찾고 있어요. 추천해주실 만한 책이 있나요?" },
  { idx: 19, title: "음악 감상", content: "매일 음악을 듣는 것이 취미인데, 오늘은 어떤 장르의 음악을 듣는 것이 좋을까요?" },
  { idx: 16, title: "봄 여행", content: "올 봄에는 여행을 가려고 계획 중입니다. 어떤 여행지가 좋을까요?" },
  { idx: 22, title: "일기 쓰기", content: "요즘 기분이 좀 복잡해서 일기를 쓰려고 합니다. 마음 정리하기에 좋은 방법이죠." },
  { idx: 17, title: "공부", content: "공부를 시작했는데, 어떻게 계획을 세우면 좋을지 조언을 듣고 싶어요." },
  { idx: 23, title: "그림 그리기", content: "요즘 그림 그리는 것에 빠져들었어요. 어떤 주제로 그림을 그려볼까요?" },
  { idx: 24, title: "친구와 약속", content: "오랜만에 친구들을 만나기로 했어요. 어디서 만나기로 할까요?" },
];

const selectBox4 = mFn.qs("#sel4"); // 정렬선택박스
const indexBox4 = mFn.qs("#cta4"); // 인덱스입력박스
const ListBox2 = mFn.qs(".showList4"); // 출력박스

makeList(list2, ListBox2);

// 4. 대상선정 :
// (1) 검색기준 선택박스
const searchCta4 = mFn.qs(".search-cta4");
// (2) 검색버튼
const btnSearch = mFn.qs(".sbtn");
// (3) 검색어 입력창
const keyWord = mFn.qs("#stxt");
// (4) 전체버튼
const btnTotal = mFn.qs(".fbtn");
// console.log(searchCta4,btnSearch,keyWord);


// 4.이벤트 설정하기 ////
// (1) 검색버튼
mFn.addEvt(btnSearch, "click", searchingFn);
// (2) 전체버튼 클릭시 처음 리스트 보이기
mFn.addEvt(btnTotal, "click", () => {
  // 처음리스트 다시 만들기
  makeList(list2, ListBox2);
  // 검색어 지우기
  keyWord.value = "";
});
// (3) 입력창 키보드입력시 엔터키 구분하여 검색하기
mFn.addEvt(keyWord, "keypress", (e) => {
  // 엔터키는 키코드가 13번임
  if (e.keyCode == 13) {
    searchingFn();
  } ////// if //////
});

function searchingFn() {
  // 1. 검색 기준값 읽어오기
  let selVal = searchCta4.value;
  // 2. 검색어 읽어오기
  let kword = keyWord.value;
  // 3. 검색어가 없으면 돌아가!
  if (kword == "") {
    alert("검색어를 입력해주세요!");
    // 입력창에 포인터 들어가기! focus()
    keyWord.focus();
    return;
  }
  console.log(selVal, kword);
let result = list2.filter((v) => {
 if (String(v[selVal]).indexOf(kword) != -1) return true;
  });
 console.log("검색결과:",result);
  console.log("원본데이터:",list2);
  makeList(result, ListBox2);
} ////////////// searchingFn 함수 ///////////

// 정렬선택박스 변경시 리스트 정렬하기
mFn.addEvt(selectBox4, "change", 
(e) => showList(e, list2, indexBox4.value, selectBox4.value, ListBox2));
mFn.addEvt(indexBox4, "change", () => {
  selectBox4.value = "0";
}); //////////// change 이벤트 함수 //////////