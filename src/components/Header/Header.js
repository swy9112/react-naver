import React from "react";
import styled from "styled-components";
import Topmenu from "./Topmenu";
import Search from "./Search";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <Wrap>
        <Area>
          <Topmenu />
          <Search />
        </Area>
      </Wrap>
      <Nav />
    </div>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 170px;
  background-color: #ccc;
`;

const Area = styled.div`
  width: 1080px;
  height: 100%;
  margin: auto;
  background-color: #fafafa;
`;

export default Header;
