import styled from "@emotion/styled";

import Link from "next/link";

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10.5rem;
`;

export const ItemTitle = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[900]};
`;
