import styled from "@emotion/styled";

export const Dialog = styled.dialog`
  border-radius: 0.625rem;
  border: none;
  padding: 1.25rem 0;
  ::backdrop {
    background: rgba(5, 5, 5, 0.4);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  border: none;
  border-radius: 0.625rem;

  width: 27.5rem;
`;

export const Form = styled.form`
  display: flex;
  gap: 1.25rem;

  width: 25rem;
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
