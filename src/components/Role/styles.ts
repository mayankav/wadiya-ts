import styled from "styled-components";

export const StyledRoleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledInput = styled.input`
  appearance: none;
  height: 14px;
  width: 14px;
  cursor: pointer;
  border-radius: 2px;
  padding-left: 2px;
  margin-left: 8px;
  background-color: var(--wadiya-colors-primary);
  &:checked::after {
    content: "✓";
    font-size: 12px;
    color: white;
  }
`;
