import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import { useEffect } from "react";

function App() {
   useEffect(() => {
      $(".App-header span").hover(
        (e) => {//over시
         $(e.currentTarget)
         .stop().animate(
            {
               scale: 1.4,
            },
            500
         );
      },
        (e) => {//out시
         $(e.currentTarget)
         .stop().animate(
            {
               scale: 1,
            },
            500
         );
      },
    );
   }, []);

   return (
      <div className="App">
         <header className="App-header">
            <span>
               <img
                  src="https://www.fitpetmall.com/wp-content/uploads/2023/09/shutterstock_2205178589-1-1.png"
                  className="App-logo"
                  alt="logo"
               />
            </span>
            <p>
               이제리액트는 제껍니다
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
