import styled from "@emotion/styled";

export const TextInput = styled.input`
  display: flex;
  align-items: center;

  width: 300px;
  height: 40px;

  border-radius: 10px;

  ${({ theme }) => theme.typo.body1};
  ${({ theme }) => theme.color.grey[900]}
`;
