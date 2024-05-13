// 나의함수 불러오기
import mFn from "./my_function.js";

// gnb 데이터 불러오기
import mdata from "./mdata.js"; //단 이름으로받아도 됨
console.log(mdata); //단 이름으로받아도 됨

export default function makeMenu(target) {
   // target - 메뉴 구현 대상박스
   console.log("오마나~~!", target);

   // 대상요소에 메뉴 태그 넣기
   target.innerHTML = `
   <ul>
   ${
       // mdata는 객체이므로 객체키만 모아서 배열로 만들고
       // map() 메서드를 순회하여 코드를 반복 생성함!
       // Object.keys(객체).map().join("")
       // -> 오브젝트 키쓰 맵 쪼잉~!!!
            Object.keys(mdata).map(v=>`        
            <li>
                <a href="#">${v}</a>
                <div class="smenu">
                    <aside class="smbx">
                        <h2>
                        <div class="stit">${v}</div>
                            <a href="#">전체보기</a>
                        </h2>
                        <div class="swrap">
                        <!-- 2차메뉴 dl생성 -->
                        ${
                            // mdata[키배열값] -> 키배열값은 v
                            // 그런데 이 데이터는 객체이므로
                            // map()을 쓰기위해 또 키배열로 뽑아낸다!
                            // v2키값은 2차메뉴임!
                            Object.keys(mdata[v])
                            .map(v2=>`
                                <dl>
                                    <dt>${v2}</dt>
                                    <!-- 3차메뉴 dd생성 -->
                                    ${
                                        // mdata[v][v2] -> 3차메뉴배열
                                        mdata[v][v2]
                                        .map(v3=>`                                    
                                            <dd>
                                                <a href="#">${v3}</a>
                                            </dd>
                                        `).join('')
                                    }
                                </dl>                        
                            `).join('')
                        }
                        </div>
                    </aside>
                </div>
            </li>
            `).join('')
        }
        </ul>
        `;

   /***********************************
      [ 상위메뉴 li에 오버시 하위메뉴 보이기 ]
      이벤트대상: .gnb ul li
      변경대상: .gnb ul li > .smenu
      읽어올 높이값: .smenu > .smbx 
     ***********************************/
         // mouseover는 이벤트 버블링이 발생함(자식요소 오버시)
        // 만약 이를 원하지 않는 경우 mouseenter를 사용함!
        // 경계선 기준의 mouseenter/mouseleave는 이벤트버블링
        // 발생이 없다! 
        // ->mouseenter / mouseleave는 버블링 발생안하는 전제하에  e.currentTarget쓰는것!

        // e.currentTarget; 이벤트 발생된 타겟(버블링맞은요소도 포함)
        // e.target; 이벤트 발생된 원 발생지 

   // 1. 이벤트대상
   const gnb = mFn.qsa(".gnb ul li");

   // 2. 이벤트설정 및 함수구현
   gnb.forEach((ele) => {
      // (1) 마우스 오버시
      mFn.addEvt(ele, "mouseenter", (e) => {
         // 이벤트대상
         let tg = e.currentTarget;
         console.log("앤터", tg);

        // 하위중 .smbx의 높이값을 읽어서
        // .smenu의 높이값을 변경한다!
        mFn.qsEl(tg,'.smenu').style.height = 
        mFn.qsEl(tg,'.smbx').offsetHeight + 'px';

      }); ////// mouseenter /////

      // (1) 마우스 아웃시
      mFn.addEvt(ele, "mouseleave", (e) => {
         // 이벤트대상
         let tg = e.currentTarget;
         console.log("아웃", tg);
         mFn.qsEl(tg,'.smenu').style.height = 0;
      }); ////// mouseleave /////
   }); //// foreach///
} //////////// makeMenu 함수 //////////
