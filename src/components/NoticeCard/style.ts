import styled from "@emotion/styled";

import Link from "next/link";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.grey[200]};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 6.25rem;

  ${({ theme }) => theme.typo.body2};
`;

export const Id = styled.span`
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.grey[700]};
`;

export const Description = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.color.grey[500]};
`;
