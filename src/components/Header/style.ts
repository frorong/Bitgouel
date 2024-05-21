import styled from "@emotion/styled";

import { Link } from "next-view-transitions";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 5.5rem;
  padding: 0 6.25rem;
`;

export const TitleWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const ItemList = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemDivider = styled.div`
  width: 1px;
  height: 20px;

  background-color: ${({ theme }) => theme.color.grey[400]};
`;
