import styled from "styled-components";

interface StyledSectionProps {
  indent: number;
  isOpen: boolean;
}

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
`;

export const StyledSection = styled.div<StyledSectionProps>`
  padding-left: ${({ indent }) => indent * 10}px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
