import styled from "styled-components";
import logo from "../images/NAVER_Logo.jpg";

//텍스트를 이미지로 표시
export const AnIcon = styled.span`
  display: block;
  width: ${props => {
    return `${props.wd}px`;
  }};
  height: ${props => {
    return `${props.he}px`;
  }};
  background-image: ${props => {
    if (props.nav) {
      return `url(https://s.pstatic.net/static/www/img/uit/2019/sp_nav.png);`;
    } else if (props.topmenu) {
      return `url(https://s.pstatic.net/static/www/img/uit/2019/sp_main.png);`;
    } else if (props.logo) {
      return `url(${logo})`;
    }
  }};
  background-size: ${props => {
    if (props.logo) {
      return `contain`;
    }
  }};
  background-repeat: no-repeat;
  background-position: ${props => {
    return props.bgp;
  }};
`;

//이미지로 표시되는 텍스트를 숨김
export const AnText = styled.span`
  position: absolute;
  top: -9999px;
  left: -9999px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
`;
