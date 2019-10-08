import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Globalstyles from "./styles/Globalstyles";

function App() {
  return (
    <div>
      <Globalstyles />
      <Wrap>
        <Header></Header>
        <Contents></Contents>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div``;

const Contents = styled.div`
  width: 1080px;
  height: 100vh;
  margin: auto;
  background-color: #eee;
`;

export default App;
