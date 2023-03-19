import styled, { createGlobalStyle } from "styled-components";

import Folder from "./components/Folder";
import Role from "./components/Role";

interface StyledRolesProps {
  hasNoParent?: boolean;
}

interface StyledAlertProps {
  isSuccessful?: boolean;
}

export const GlobalStyle = createGlobalStyle`
:root {
    --wadiya-colors-primary: #6082B6;
    --wadiya-colors-secondary: #A9A9A9;
    --wadiya-colors-success-bg: #AFE1AF;
    --wadiya-colors-success-text: #4F7942;
    --wadiya-colors-failure-bg: #FAA0A0;
    --wadiya-colors-failure-text: #FF2402;
}
`;

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  width: fit-content;
`;

export const StyledAlertMessage = styled.div<StyledAlertProps>`
  padding: 8px;
  border-radius: 5px;
  border: 1px dashed var(--wadiya-colors-failure-text);
  color: var(--wadiya-colors-failure-text);
  background-color: var(--wadiya-colors-failure-bg);
  ${({ isSuccessful }) =>
    isSuccessful &&
    `
  border: 1px dashed var(--wadiya-colors-success-text);
  color: var(--wadiya-colors-success-text);
  background-color: var(--wadiya-colors-success-bg);
  `}
`;

export const StyledFolder = styled(Folder)`
  && {
    button {
      color: var(--wadiya-colors-primary);
      font-size: 16px;
    }
  }
`;
export const StyledRole = styled(Role)<StyledRolesProps>`
  color: var(--wadiya-colors-secondary);
  font-size: 14px;
  ${({ hasNoParent }) => hasNoParent && `padding: 10px 0px 10px 6px;`}
  &: before {
    content: "# ";
  }
`;

export const StyledActionWrapper = styled.div`
  padding: 5px;
  diplay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 220px;
`;

export const StyledDropdown = styled.select`
  width: 100%;
  border-radius: 5px;
  border-right: 12px solid transparent !important;
  padding: 6px 12px;
  font-size: 14px;
  color: white;
  background-color: var(--wadiya-colors-primary);
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const StyledCalculateButton = styled.button`
  width: 100%;
  display: block;
  color: var(--wadiya-colors-primary);
  background-color: white;
  border: 1px solid var(--wadiya-colors-primary);
  border-radius: 5px;
  font-weight: 600;
  padding: 8px 16px;
  text-align: center;
  box-shadow: 0 1px 2px 0 var(--wadiya-colors-secondary);
  cursor: pointer;
  user-select: none;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    background-color: var(--wadiya-colors-primary);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
