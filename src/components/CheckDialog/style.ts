import styled from "@emotion/styled";

export const Dialog = styled.dialog`
  border: none;
  padding: 0;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 25rem;
  padding: 1.25rem 6.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;

  width: 100%;
`;

export const Content = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const SubContent = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.grey[700]};
`;
