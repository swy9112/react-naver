import React, { useState } from "react";
import styled from "styled-components";

const Input = props => {
  const [form, setForm] = useState("");
  const handleChange = event => {
    setForm(event.target.value);
  };

  return (
    <Wrap>
      <InputStyle value={form} onChange={handleChange} />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 0;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #000;
`;

export default Input;
