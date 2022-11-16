import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <div>Hello ㅋㅋ</div>
    </>
  );
}

export default App;
