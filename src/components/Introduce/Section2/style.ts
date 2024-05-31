import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
`;

export const Title = styled.span`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  width: 100vw;

  padding-top: 6.25rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 6.25rem;

  padding-top: 300px;
`;

export const Content = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;

  background-color: ${({ color }) => color};
  border-radius: 0.5rem;
  padding-bottom: 1.25rem;
`;

export const ContentImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 440px;
  height: 400px;
  border-radius: 0.5rem 0.5rem 0 0;

  img {
    object-fit: cover;
  }
`;

export const ContentText = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.white};
`;
