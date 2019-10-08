import React from "react";
import styled from "styled-components";
import { AnText, AnIcon } from "../../styles/Common";

function Nav() {
  return (
    <Wrap>
      <Area>
        <ul>
          <li>
            <a href="/">
              <AnIcon nav bgp="0 -285px" wd="25" he="16"></AnIcon>
              <AnText>메일</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-279px -52px" wd="27" he="16"></AnIcon>
              <AnText>카페</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-100px -182px" wd="40" he="16"></AnIcon>
              <AnText>블로그</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-101px -156px" wd="40" he="16"></AnIcon>
              <AnText>지식in</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-279px -156px" wd="27" he="16"></AnIcon>
              <AnText>쇼핑</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-70px -285px" wd="27" he="16"></AnIcon>
              <AnText>Pay</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-125px -130px" wd="32" he="16"></AnIcon>
              <AnText>TV</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-279px -208px" wd="26" he="16"></AnIcon>
              <AnText>사전</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-128px -104px" wd="28" he="16"></AnIcon>
              <AnText>뉴스</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-36px -259px" wd="26" he="16"></AnIcon>
              <AnText>증권</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-151px -156px" wd="40" he="16"></AnIcon>
              <AnText>부동산</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-279px -130px" wd="27" he="16"></AnIcon>
              <AnText>지도</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-234px -233px" wd="27" he="16"></AnIcon>
              <AnText>영화</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-72px -259px" wd="26" he="16"></AnIcon>
              <AnText>뮤직</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-140px -78px" wd="13" he="16"></AnIcon>
              <AnText>책</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon nav bgp="-279px 0" wd="27" he="16"></AnIcon>
              <AnText>웹툰</AnText>
            </a>
          </li>
          <li className="an_bar"></li>
          <li>
            <a href="/">
              <AnIcon nav bgp="0 -104px" wd="55" he="16"></AnIcon>
              <AnText>더보기</AnText>
            </a>
          </li>
        </ul>
      </Area>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 47px;
  background-color: #ccc;
  border: 1px solid #000;
  & ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 766px;
    height: 100%;
    & li.an_bar {
      width: 1px;
      height: 14px;
      background: #ebeef3;
    }
    & a {
      position: relative;
    }
  }
`;

const Area = styled.div`
  width: 1080px;
  height: 100%;
  margin: auto;
  background-color: #fafafa;
`;

export default Nav;
