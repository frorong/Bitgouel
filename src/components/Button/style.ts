import styled from "@emotion/styled";

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18.75rem;
  height: 3.75rem;

  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.color.secondary};

  ${({ theme }) => theme.typo.button}
  color: ${({ theme }) => theme.color.grey[900]};

  transition: ease-in-out 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
