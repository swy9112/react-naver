import React from "react";
import styled, { css } from "styled-components";

function Nav() {
  return (
    <Wrap>
      <Area>
        <ul>
          <li>
            <a href="/">
              <AnIcon bgp="0 -285px" wd="25" he="16"></AnIcon>
              <AnText>메일</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-279px -52px" wd="27" he="16"></AnIcon>
              <AnText>카페</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-100px -182px" wd="40" he="16"></AnIcon>
              <AnText>블로그</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-101px -156px" wd="40" he="16"></AnIcon>
              <AnText>지식in</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-279px -156px" wd="27" he="16"></AnIcon>
              <AnText>쇼핑</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-70px -285px" wd="27" he="16"></AnIcon>
              <AnText>Pay</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-125px -130px" wd="32" he="16"></AnIcon>
              <AnText>TV</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-279px -208px" wd="26" he="16"></AnIcon>
              <AnText>사전</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-128px -104px" wd="28" he="16"></AnIcon>
              <AnText>뉴스</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-36px -259px" wd="26" he="16"></AnIcon>
              <AnText>증권</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-151px -156px" wd="40" he="16"></AnIcon>
              <AnText>부동산</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-279px -130px" wd="27" he="16"></AnIcon>
              <AnText>지도</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-234px -233px" wd="27" he="16"></AnIcon>
              <AnText>영화</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-72px -259px" wd="26" he="16"></AnIcon>
              <AnText>뮤직</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-140px -78px" wd="13" he="16"></AnIcon>
              <AnText>책</AnText>
            </a>
          </li>
          <li>
            <a href="/">
              <AnIcon bgp="-279px 0" wd="27" he="16"></AnIcon>
              <AnText>웹툰</AnText>
            </a>
          </li>
          <li className="an_bar"></li>
          <li>
            <a href="/">
              <AnIcon bgp="0 -104px" wd="55" he="16"></AnIcon>
              <AnText>더보기</AnText>
            </a>
          </li>
        </ul>
      </Area>
    </Wrap>
  );
}

const displayOut = css`
  & {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
  }
`;

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

const AnIcon = styled.span`
  display: block;
  width: ${props => {
    return `${props.wd}px`;
  }};
  height: ${props => {
    return `${props.he}px`;
  }};
  background-image: url(https://s.pstatic.net/static/www/img/uit/2019/sp_nav.png);
  background-repeat: no-repeat;
  background-position: ${props => {
    return props.bgp;
  }};
`;

const AnText = styled.span`
  ${displayOut}
`;

export default Nav;
