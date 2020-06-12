import React, { useState } from "react";
import styled from "styled-components";
import { AnText, AnIcon } from "../../styles/Common";
import Input from "../../styles/Input";

function Search() {
  return (
    <>
      <Logo>
        <AnIcon logo wd="154" he="30"></AnIcon>
        <AnText>네이버</AnText>
      </Logo>
      <Input />
    </>
  );
}

const Logo = styled.h1``;

export default Search;
