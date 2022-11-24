import "./App.css";
import { useState } from "react";

function App() {
  let post = "소확행 기록장";
  let [글제목, 글제목변경] = useState(["초겨울 코트 추천", "맛집 추천", "카페추천",]);
  let [따봉, 따봉변경] = useState(0);

  function 증가() {
    console.log(1);
  }

  // document.querySelector('h4').innerHTML = post; 원랜 이건데 jsx에선 { }
  // 데이터바인딩 : 데이터 가져와서 밖는거

  return (
    // JSX안에서는 class 아니고 className!
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "black", fontSize: "24px" }}>hyun min blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "봄 코트 추천";
          글제목변경(copy);
        }}
      >
        추천
      </button>

      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            🤞
          </span>{" "}
          {따봉}
        </h4>
        <p> 2022년 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p> 2022년 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p> 2022년 발행</p>
      </div>
    </div>
  );
}

export default App;
