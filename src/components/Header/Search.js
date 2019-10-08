import React from "react";
import styled from "styled-components";
import { AnText, AnIcon } from "../../styles/Common";

function Search() {
  return (
    <>
      <Logo>
        <AnIcon wd="100" he="100"></AnIcon>
        <AnText>네이버</AnText>
      </Logo>
    </>
  );
}

const Logo = styled.h1``;

export default Search;
