import React, { useState } from "react";
import { Input } from "components/common";
import styled from "styled-components";

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyle = styled(Input).attrs(() => ({
  placeholder: "Password",
  type: "password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 0.9em;
  display: flex;
  box-sizing: border-box;
  color: #000;
  padding: 8px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
`;

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyle {...props} />
        <ToggleButton onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
};
