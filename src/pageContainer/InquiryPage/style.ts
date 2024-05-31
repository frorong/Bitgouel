import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100vw;
  padding: 1.25rem 6.25rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const Caption = styled.p`
  ${({ theme }) => theme.typo.caption};
  color: ${({ theme }) => theme.color.grey[500]};
`;
