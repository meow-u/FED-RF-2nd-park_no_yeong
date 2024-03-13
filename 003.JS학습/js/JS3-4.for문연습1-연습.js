/********************************** 
  '미니언즈를 클릭'하면 DATA값을 읽어와서
  그 값만큼 
  파란상자안에 이미지가 들어온다. (완)
  
  그리고 그 값(미니언즈 수) 만큼 
  요소내부에 글씨가 생긴다 . (완)

  '리셋버튼을 누르면' 파란상자 안이 비워지고
  요소내부 미니언즈 숫자가 초기화 된다. (완)
 **********************************/

  /* _______________(1) 대상선정 _______________*/
  
  /* _____이벤트요소_____ */
  /* 이미지 .mimi */
  let img = document.querySelectorAll('.mini');
  /* 버튼 .rbtn */
  let btn = document.querySelector('.rbtn');

  /* _____변경요소_____ */
  /* 넣을 박스 .mini-space */
  let box = document.querySelector('.mini-space');
  /* 갯수표시 .stxt span */
  let txt = document.querySelector('.stxt span');
  console.log('대상확인',img,btn,box,txt);
  

  /* ___________(2) 대상과 이벤트 연결 ___________*/
  

  /* 1. 이미지 클릭 이벤트 */

  /* img 각각이벤트 반복 걸기위해 for문 */
  for(i = 0; i < img.length; i++){
      img[i].addEventListener('click',put_in);  
    }//////////////for///////////////////

    
    // img.forEach(element => {
    //     element.addEventListener('click', put_in);
    // })
    
  /* 2. 리셋버튼 클릭 이벤트 */
  btn.addEventListener('click',remove);



  /* 미니언갯수 변수 */  
  let count = 0;  
/* ___________(3) 클릭시 실행함수 기능구현___________*/

        /* 1. 이미지 클릭시 실행함수 */
        function put_in(){
            console.log('호출확인!', this);
        
            /* data-num 값 변수지정 */
            /* this(지금클릭된요소)를 활용해서 data 값을 읽음 */
            var num = this.getAttribute('data-num');
            console.log('data값 찍기:',num);
            
            
        /* num 값만큼 반복해서 이미지넣기위해 for문 */
        for(i = 0; i < num; i++){
            
            box.innerHTML += 
            '<img src="./images/Minions.png" alt="미니언즈">';
            
            /* 실행할때마다 카운트 */
            count++;         
        }//////////////for///////////////////



        /* 요소에 총 갯수적기 */
        txt.innerText = count*3;
        // txt.innerText =num*3  <<<  X
        //이렇게 num을 쓰면 어러번눌렀을때 값 누적이 안됨

    }///////////////////putin함수//////////////////
    //////////////////////////////////////////////
    

        /* 2. 리셋 버튼 클릭시 실행함수 */
        function remove(){
            // console.log('호출확인!');

            /* 내부 html 지움 */
            box.innerHTML='';
            /* 0 입력하기 */
            txt.innerHTML='0';

            count=0;

    }///////////////////remove함수//////////////////
    //////////////////////////////////////////////