// 게시판 데이터를 위한 로컬스토리지 생성JS
/************************************ 
    [ 게시판 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 제목 : tit
    3. 내용 : cont
    4. 첨부파일 : att
    5. 입력날짜 : date
    6. 작성자아이디 : uid
    7. 작성자이름 : unm
    8. 조회수 : cnt
************************************/
// 게시판 기초데이터 제이슨 불러오기
import orgData from "../data/board.json"

// [ 로컬쓰 클리어 ] /////////
const clearBoardData = () => {
    localStorage.removeItem("board-data");
    console.log("게시판 로컬쓰 클리어!");
  }; /////////// clearData //////////////
  
  // [ 로컬쓰 초기체크셋팅! ] ////////////
  const initBoardData = () => {//보통 초기화 할때 init 이라는 말을 많이 씀.
    // 만약 로컬스 "mem-data"가 null이면 만들어준다!
    if (localStorage.getItem("board-data") === null) {//localStorage.getItem("mem-data")에 null(없다) 이냐? 그럼 밑에꺼 만들어라
      localStorage.setItem(
        "board-data", JSON.stringify(orgData)
      );
    }
  }; ///////////// initData /////////////////
  
  export { clearBoardData, initBoardData };
  