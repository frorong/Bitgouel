import styled from "@emotion/styled";

import Link from "next/link";

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8rem;
  height: 100%;
  margin: 0 1.25rem;

  transition: ease-in-out 0.2s;
  border-bottom: ${({ theme }) => theme.color.white} 2px solid;

  :hover {
    border-bottom: ${({ theme }) => theme.color.secondary} 1px solid;
    span {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export const ItemTitle = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[900]};

  transition: ease-in-out 0.2s;
`;
