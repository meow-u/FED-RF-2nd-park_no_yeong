// 05.리액트 Props

// 내함수 불러오기
import mFn from "./my_function";

// 자동차 정보불러오기
import { carInfo, carImage } from "./car_data";

console.log('객체속성 호출방법:'
            ,'1', carInfo['기아레이'][0]
            ,'2', carInfo.기아레이[1]
            ,'3', carInfo['기아레이'][2].color
);

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    => JSX 문법에서 HTML 태그의 속성으로 props를 전달할 수 있음. <MyComponent name="John" age={30} />

    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

/* 

[ props의 구조분해 할당 ]
function IntroCar({ brand, modelNum }) {...}
props는 코드에 보이지 않는데 어떻게 구조분해 할당되고 있다는거야?

=> 
리액트에서 props는 컴포넌트를 렌더링 할 때 자동으로 전달되는 객체입니다. 코드상에서 직접적으로 props를 정의하거나 할당하지 않습니다.
예를 들어, 다음과 같이 IntroCar 컴포넌트를 렌더링 했다고 가정해봅시다.

<IntroCar brand="Tesla" modelNum="Model 3" />

이때 IntroCar 컴포넌트 함수가 실행되면, 리액트가 자동으로 props 객체를 생성하여 전달합니다. 
이 props 객체는 

props = { brand: "Tesla", modelNum: "Model 3" }

이와 같은 형태가 됩니다.
그리고 구조분해할당 문법 
function IntroCar({ brand, modelNum })을 사용하면, 리액트가 자동으로 생성한 props 객체에서 brand, modelNum 프로퍼티 값을 '추출'하여 각각 brand, modelNum 변수에 할당하게 됩니다.

이 경우 brand와 modelNum 변수는 props 객체 내부의 brand와 modelNum 프로퍼티 값을 가리키는 '동일한 메모리 주소'를 참조하게 됩니다. 
예: brand = 'NewBrand' 또는 props.brand = 'NewBrand'


따라서 brand 변수를 수정하면 props.brand도 수정되고, modelNum 변수를 수정하면 props.modelNum도 수정됩니다. 
이는 객체의 프로퍼티 값을 직접 참조하기 때문입니다.

 구조 분해 할당 없이 props 객체 전체를 받는 경우에는 brand 변수는 존재하지 않고 props.brand만 쓸 수 있습니다.
..
따라서 props 객체 자체는 코드에 직접 작성하지 않고, 리액트가 자동으로 생성하여 컴포넌트 함수에 전달합니다. 개발자는 구조분해할당 문법을 통해 필요한 props 값을 쉽게 추출할 수 있습니다. 

대부분의 경우 구조 분해 할당 방식이 코드의 가독성과 편의성을 높여주지만, 상황에 따라 props 객체 전체를 다룰 필요가 있을 때는 구조 분해 할당 없이 props 객체를 사용하게 됩니다

*/

// 자기차를 소개하는 컴포넌트 1 ///////////////////
// function IntroCar(props){
function IntroCar({ brand, modelNum }) {
    // 전달속성값: brand -자동차 분류명, modelNum - 배열순번

   // props는 컴포넌트 호출시 속성값을 객체로 전달하는것을
   // 받아주는 변수다(변수명은자유 일반적으로 props)
   // 사용법: props.속성명
   // 주의: 속성명은 컴포넌트를 호출하는 곳에서
   // 정해진 이름을 똑같이 사용해야 함
   // 명시적으로 변수명을 사용하려면 구조분해 할당형식을
   // 사용하면 된다 {변수명,변수명,...}
   // 구조분해 할당으로 받을 경우의 장점은
   // 특정 속성명을 지정하는 효과가 있고
   // 몇개의 어떤 속성을 받는지 개발자가 명시적으로 알 수 있다!

   // 공통 정보 변수에 담기 
   // -> carInfo 하위 자동차명 하위 [순번] -> 최종데이타 선택
   let setInfo = carInfo[brand][modelNum];
//    console.log('연습용찍기:',carInfo[brand],setInfo);
   return (
      <React.Fragment>
         <h2> 나의차는 {brand} 입니다! -IntroCar</h2>
         {/* 추가질문 컴포넌트 호출 */}
         <AskMoreInfo 
          brand={brand}
          model={setInfo.model}
          color={setInfo.color} 
          opt={setInfo.opt} />
      </React.Fragment>
   );
} ///////////IntroCar 컴포넌트

/* 
    [ 데이터 매칭하기 : 속성셋팅을 위한 기초 ]
    1. 자동차 분류명 : carInfo 데이터변수 객체의 속성명 (기아레이)
    2. 상세모델 배열번호 : 선택객체 하위 배열번호
    -> 위의 두가지 값을 전달하면 상세정보를 보낼 수 있다.
*/

// 추가질문으로 자동차 정보를 자세히 기술하는 컴포넌트 ////
function AskMoreInfo({ brand, model, color, opt }) {
   return (
      <React.Fragment>
         <h1>그게 뭐신디!!! -AskMoreInfo</h1>
         {/* 디테일 정보구성 컴포넌트 호출! */}
         <DetailCarInfo brand={brand} model={model} color={color} opt={opt} />
      </React.Fragment>
   );
} ////////// AskMoreInfo 컴포넌트 ///////////////////

// 디테일 정보 구성 컴포넌트 (젤안쪽 컴포넌트 종착지!) ////////////
function DetailCarInfo({  brand, model, color, opt }) {
   // info는 세부적인 모델정보 객체가 들어온다!
   // 전달속성은  model (모델명),color(차색), opt(디자인옵션)
   console.log("CSS옵션객체:",opt);

   // 객체값 추가는 (객체변수.속성명= 값)
   // 실제 css변수형 속성명으로 사용해야 함 
   // ( DetailCarInfo에서 style={opt} 이렇게 할당하기 때문  )
   opt.width = '600px';

   return (
      <React.Fragment>
         <h2>
            모델명은 {model}이고 자동차색은 {color}입니다!-DetailCarInfo
         </h2>
         {/* 이미지출력 */}
         <img src={"./images/"+carImage[brand]} 
         alt={brand} 
         style={opt}/>

         {/* 리액트 style속성의 값으로 객체를 css속성에 맞게
         주면 인라인 코드로 css룰 셋팅할 수 있다! */}
         
      </React.Fragment>
   );
} ////////// DetailCarInfo 컴포넌트 ///////////////////

// 전체 자동차 브랜드 소개 컴포넌트 //////
function ShowBrandCar({ brand , modelNum }) {
   return (
      <React.Fragment>
         <h1>당신의 차는 무슨차죠? -ShowBrandCar 최종호출 부모컴포넌트</h1>
         <IntroCar brand={brand} modelNum={modelNum}> </IntroCar>
      </React.Fragment>
   );
} //////////// ShowBrandCar 컴포넌트 ////////////////
//ReactDOM.render(출력코드, 출력대상)
ReactDOM.render(
   <div>
      <ShowBrandCar brand="기아레이" modelNum={2} />
      <ShowBrandCar brand="현대제네시스" modelNum={0} />
      <ShowBrandCar brand="기아레이" modelNum={0} />
      <ShowBrandCar brand="현대제네시스" modelNum={1} />
      <ShowBrandCar brand="기아레이" modelNum={1} />
      <ShowBrandCar brand="현대제네시스" modelNum={2} />
   </div>,
   mFn.qs("#root1")
);
