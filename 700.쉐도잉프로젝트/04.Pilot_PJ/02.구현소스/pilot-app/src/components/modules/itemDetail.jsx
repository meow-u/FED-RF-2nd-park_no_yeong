import React, { useEffect, useRef } from "react";
import { addComma } from "../../js/func/common_fn";

import $ from "jquery";

function ItemDetail({ cat, ginfo, dt, setGinfo }) {
   // cat - 카테고리
   // ginfo - 상품정보
   // dt - 상품데이터
   // setGinfo - ginfo값 변경메서드
   console.log(cat, ginfo);
   // 제이쿼리 이벤트함수에 전달할 ginfo 값 참조변수
   const getGinfo = useRef();
   // getGinfo 참조변수는 새로들어온 ginfo 전달값이 달라진 경우
   // 업데이트 한다!
   if(getGinfo.current!=ginfo) getGinfo.current = ginfo;

   // [ 배열 생성 테스트 ]
   // 1. 배열변수 = [] -> 배열리터럴
   // -> 생성된 배열을 for문을 돌려서 값을 할당함
   // 2. 배열객체로 만들기
   // -> new Array(개수) -> 개수만큼 배열생성(빈배열)
   // -> new생략하여 인스턴스 생성가능! (정적객체)
   // -> Array(개수) -> 그.러.나... 빈배열은 map() 못돌림!ㅠ.ㅠ
   // 3. 배열에 값을 넣어주는 메서드
   // ->>> 배열.fill(값,시작번호,끝번호)
   // fill(값) : 모든배열 다 같은 값 채우기
   // fill(값,시작번호) : 0부터 시작하는 번호중 특정배열부터 끝까지 채움
   // fill(값,시작번호,끝번호) : 시작번호부터 끝번호까지 채움
   // console.log(Array(10));
   // console.log(Array(10).fill(8));
   // console.log(Array(10).fill(7, 2));
   // console.log(Array(10).fill(7, 2, 5));

   // 화면랜더링구역 :한번만 //////////////
   useEffect(() => {
      // 수량증감 버튼 클릭시 증감기능 함수
      // (1) 숫자출력 input
      const sum = $("#sum");
      // (2) 수량증가 이미지 버튼
      const numBtn = $(".chg_num img");
      // (3) 총 합계 요소
      const total = $('#total');
      // console.log( sum , numBtn);

      // 2. 수량증감 이벤트 함수 //
      numBtn.on("click", (e) => {
         // (1) 이미지순번 (구분하려고)
         let seq = $(e.target).index();
         console.log("버튼순번seq:", seq);
         // 버튼 idx ) 0은 증가버튼 / 1은 감소버튼

         // (2). input의 기존 숫자값 읽기
         let num = Number(sum.val());
         console.log("현재숫자:", num);

         // (3). 증감 반영하기 (0은 false 1은 true처리)
         // false(0)은 증가 true(1) 감소
         // ->>> 증감기호가 변수 앞에있어야 증감후 할당한다!!

         
        //  sum.val(!seq ? ++num : num == 1 ? 1 : --num);
          sum.val(seq == false ? ++num : num == 1 ? 1 : --num);

          console.log('전달변수확인! ginfo :',ginfo)
          console.log('참조변수확인! getginfo :',getGinfo.current)
        // [ 문제!!! ginfo 값으로 읽으면 최초에 셋팅된 값이 그대로 유지된다! 왜? 본 함수는 useeffect(()=>{},[])안에서 최초 한번만 셋팅되기 때문에]

        // [ 해결책 : 새로들어오는 ginfo 값을 참조변수에 넣어서 본 함수에서 그 값을 읽으면 된다! ]


        // (4) 총합계 반영하기
        // 원 가격은 컴포넌트 전달변수 ginfo[3]에 있으나 -> 갱신안됨!
        // 원 가격은 참조변수 getGinfo 사용 -> 매번업데이트 됨!

        total.text(addComma(getGinfo.current[3]*num)+'원');
      }); //// click /////
      // 제거시 참고 ) numBtn.off('click');
   }, []); // 현재 컴포넌트 처음생성시 한번만 실행구역 

   // [화면 랜더링구역 :매번]
   useEffect(()=>{
      //매번 리랜더링 될때마다 수량 초기화 
      $("#sum").val(1);
      //총 합계 초기화
      $("#total").text(addComma(ginfo[3])+'원');
      console.log( $("#total"))
   });

   return (
      <>
         <a
            href="#"
            className="cbtn"
            onClick={(e) => {
               // 기본이동막기
               e.preventDefault();
               // 창닫기
               $(".bgbx").hide();
            }}
         >
            <span className="ir">닫기버튼</span>
         </a>
         <div id="imbx">
            <div className="inx">
               <section className="gimg">
                  {/* 선택한 상품 큰이미지 */}
                  <img
                     src={
                        process.env.PUBLIC_URL +
                        `/images/goods/${cat}/${ginfo[0]}.png`
                     }
                     alt="큰 이미지"
                  />
                  {/* [작은 상품이미지]
            - 본 상품을 제외한 5개의 상품이 나열되고
            클릭시 본 화면에 상품을 변경해 준다!
            단, 같은 카테고리 상품 상위 5개임 
            -> 배열을 임의로 만들고 값도 임의로 넣고
            map을 사용하여 코드를 만들어보자!!!
            */}
                  <div className="small">
                     {Array(5)
                        .fill("")
                        .map((v, i) => {
                           // 한줄리스트와 같은번호면 6번오게함!
                           // 1~5까지니까!
                           let num =
                              // substr(시작순번,개수)->개수없으면 순번부터 전부다가져옴
                              ginfo[0].substr(1) == i + 1 ? 6 : i + 1;
                           // ex) (현재상품의 정보)m5 .substr(1)은 두번쨰문자인 5부터 끝까지 반환 =5
                           // (즉, 현재 루프의 상품 번호가 기선택된 상품의 번호와 같다면) 6반환 아니면 i+1반환
                           console.log("검사번호:", ginfo[0].substr(1));
                           console.log("변경번호:", num);

                           return (
                              <a
                                 href="#"
                                 key={i}
                                 onClick={(e) => {
                                    // 기본이동막기
                                    e.preventDefault();
                                    // 선택 데이터 찾기
                                    // -> cat항목값 + ginfo[0]항목
                                    // find 메소드를 사용해 특정 조건을 만족하는 첫 번째 항목을 찾습니다.
                                    let res = dt.find((v) => {
                                       //[ 전체데이터에서 찾음 ]
                                       // 조건: 전체상품중 카테고리(v.cat)가
                                       // 현재 카테고리(cat<--전달받은 개별상품카테고리)와 같고,
                                       //전체 상품 정보 ID(v.ginfo[0])가 "m" + 현재 번호(num)와 일치해야 함

                                       if (
                                          v.cat == cat &&
                                          v.ginfo[0] == "m" + num
                                       )
                                          return true;
                                    }); //// find /////
                                    console.log(res);
                                    // 상품상세모듈 전달 상태변수 변경
                                    // find에서 받은값은 객체값
                                    // 그중 ginfo속성값만 필요함!
                                    setGinfo(res.ginfo);
                                    // 찾은 상품(res)의 ginfo 속성을 새로운 상태로 설정합니다.
                                    //이를 통해 선택된 상품 정보가 업데이트되고, UI가 새 상품 정보를 반영하여 리렌더링됩니다.
                                    // 카테고리값은 바꿀필요없음!
                                 }}
                              >
                                 <img
                                    src={
                                       process.env.PUBLIC_URL +
                                       `/images/goods/${cat}/m${num}.png`
                                    }
                                    alt="썸네일 이미지"
                                 />
                              </a>
                           );
                        })}
                  </div>
               </section>
               <section className="gdesc scbar">
                  <h1>HOME &gt; {cat.toUpperCase()}</h1>
                  <div>
                     <ol>
                        <li>
                           <img
                              src={
                                 process.env.PUBLIC_URL +
                                 "/images/dx_ico_new-28143800.gif"
                              }
                              alt="new버튼"
                           />
                        </li>
                        <li id="gtit">상품명: {ginfo[1]}</li>
                        <li>
                           <img
                              src={
                                 process.env.PUBLIC_URL +
                                 "/images/icon_type02_social01.gif"
                              }
                              alt="페이스북"
                           />
                           <img
                              src={
                                 process.env.PUBLIC_URL +
                                 "/images/icon_type02_social02.gif"
                              }
                              alt="트위터"
                           />
                           <img
                              src={
                                 process.env.PUBLIC_URL +
                                 "/images/icon_mail02.gif"
                              }
                              alt="이메일"
                           />
                           <img
                              src={
                                 process.env.PUBLIC_URL +
                                 "/images/btn_source_copy.gif"
                              }
                              alt="URL복사"
                           />
                        </li>
                        <li>
                           <span>판매가</span>
                           <span id="gprice">{addComma(ginfo[3])}원</span>
                        </li>
                        <li>
                           <span>적립금</span>
                           <span>
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/images/icon_my_m02.gif"
                                 }
                                 alt="적립금"
                              />
                              4,950(5%적립)
                           </span>
                        </li>
                        <li>
                           <span>무이자할부</span>
                           <span>
                              부분 무이자 할부 혜택
                              <img
                                 src={
                                    process.env.PUBLIC_URL +
                                    "/images/view_btn_nointerest_card.gif"
                                 }
                                 alt="무이자카드보기"
                              />
                           </span>
                        </li>
                        <li>
                           <span>상품코드</span>{" "}
                           <span id="gcode">{ginfo[2]}</span>
                        </li>
                        <li>
                           <span>사이즈</span> <span>95 100 105 110</span>
                        </li>
                        <li>
                           <span>구매수량</span>
                           <span>
                              <input type="text" id="sum" defaultValue="1" />
                              <b className="chg_num">
                                 <img
                                    src={
                                       process.env.PUBLIC_URL +
                                       "/images/cnt_up.png"
                                    }
                                    alt="증가"
                                 />
                                 <img
                                    src={
                                       process.env.PUBLIC_URL +
                                       "/images/cnt_down.png"
                                    }
                                    alt="감소"
                                 />
                              </b>
                           </span>
                        </li>
                        <li>
                           <span>컬러</span> <span></span>
                        </li>
                        <li>
                           <span>권장계절</span> <span>여름</span>
                        </li>
                        <li className="tot">
                           <span>총합계</span>
                           <span id="total">{addComma(ginfo[3])}원</span>
                        </li>
                     </ol>
                  </div>
                  <div>
                     <button className="btn btn1">BUY NOW</button>
                     <button className="btn">SHOPPING CART</button>
                     <button className="btn">WISH LIST</button>
                  </div>
               </section>
            </div>
         </div>
      </>
   );
}

export default ItemDetail;
