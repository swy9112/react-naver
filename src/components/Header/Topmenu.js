import React from "react";
import styled from "styled-components";
import { AnText, AnIcon } from "../../styles/Common";

function Topmenu() {
  return (
    <Wrap>
      <li>
        <a href="/">네이버를 시작페이지로 ></a>
      </li>
      <li className="an_bar"></li>
      <li>
        <a href="https://jr.naver.com/">
          <AnIcon topmenu bgp="0 -157px" wd="58" he="11"></AnIcon>
          <AnText>주니어네이버</AnText>
        </a>
      </li>
      <li>
        <a href="https://happybean.naver.com/main/SectionMain.nhn">
          <AnIcon topmenu bgp="-143px -94px" wd="34" he="11"></AnIcon>
          <AnText>해피빈</AnText>
        </a>
      </li>
    </Wrap>
  );
}

const Wrap = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  & li {
    margin: 0 6px;
    & a {
      color: #888;
      font-size: 11px;
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
