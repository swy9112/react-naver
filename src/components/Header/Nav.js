import React from "react";
import styled, { css } from "styled-components";

function Nav() {
  return (
    <Wrap>
      <Area>
        <ul>
          <li>
            <a href="/">
              <span></span>
              <span>메일</span>
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
    align-items: center;
    height: 100%;
    & li {
      background-image: url(https://s.pstatic.net/static/www/img/uit/2019/sp_nav.png);
      & a {
        position: relative;
        & span {
          ${props => {
            if (props) return console.log(props);
          }}
        }
      }
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
