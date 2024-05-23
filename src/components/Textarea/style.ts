import styled from "@emotion/styled";

export const TextInput = styled.textarea<{ isError: boolean }>`
  width: 100%;
  height: 140px;
  padding: 0.5rem 0.75rem;

  border: solid 1px ${({ theme }) => theme.color.grey[200]};
  border-radius: 0.625rem;
  outline: none;

  ${({ theme }) => theme.typo.body1};
  color: ${({ theme, isError }) =>
    isError ? theme.color.primary : theme.color.grey[900]};

  transition: ease-in-out 0.1s;

  resize: none;

  :focus {
    box-shadow: 0 0.5rem 0.25rem -0.25rem ${({ theme }) => theme.color.secondary};
  }
`;
