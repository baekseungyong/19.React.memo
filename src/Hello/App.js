import React from "react";
import "./styles.css";
import Hello from "./Hello.js";
import Wrapper from "./Wrapper.js";

export default function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem" // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="red" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}
