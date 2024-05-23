import styled from "@emotion/styled";

export const TextInput = styled.input<{ isError: boolean; isLong: boolean }>`
  display: flex;
  align-items: center;

  width: ${({ isLong }) => (isLong ? "100%" : "300px")};
  height: 2.5rem;
  padding: 0 0.75rem;

  border: solid 1px ${({ theme }) => theme.color.grey[200]};
  border-radius: 10px;
  outline: none;

  ${({ theme }) => theme.typo.body1};
  color: ${({ theme, isError }) =>
    isError ? theme.color.primary : theme.color.grey[900]};

  transition: ease-in-out 0.1s;

  :focus {
    box-shadow: 0 8px 4px -4px ${({ theme }) => theme.color.secondary};
  }
`;
