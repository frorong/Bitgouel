import styled from "@emotion/styled";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 5.5rem;
  padding: 0 6.25rem;
`;

export const TitleWrapper = styled.div`
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

export const ItemDivider = styled.div`
  width: 1px;
  height: 1.25rem;

  background-color: ${({ theme }) => theme.color.grey[400]};
`;
