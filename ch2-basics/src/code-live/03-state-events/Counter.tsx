import { useState } from "react";

// 클릭 시 +1 증가하는 버튼을 만들고자 한다.
export default function Counter() {
  // count : 상태변수
  // setCount : count의 값을 바꿀 때 사용
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function upCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={upCount}>+1</button>
      <p>현재 값 : {count}</p>
      <button onClick={() => setText(text + "a")}>a추가</button>
      <p>현재 단어 : {text}</p>
    </div>
  );
}
