import styled from "@emotion/styled";

import { Link } from "next-view-transitions";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100vw;
  padding: 1.25rem 6.25rem;
`;

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  width: fit-content;
  padding: 0.625rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const ReturnText = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
`;
