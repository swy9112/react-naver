import React from "react";
import styled from "styled-components";

function Topmenu() {
  return (
    <Wrap>
      <li>
        <a href="/">네이버를 시작페이지로 ></a>
      </li>
      <li className="an_bar"></li>
      <li></li>
    </Wrap>
  );
}

const Wrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  & li {
    & a {
      color: #888;
      font-size: 11px;
      font-family: "Dotum,'돋움',Helvetica, Apple SD Gothic Neo ,sans-serif";
      line-height: 22px;
      letter-spacing: -1px;
    }
  }
  & li.an_bar {
    width: 1px;
    height: 14px;
    background: #ebeef3;
  }
`;

export default Topmenu;
