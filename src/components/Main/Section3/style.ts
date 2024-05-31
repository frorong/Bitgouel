import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
  position: relative;

  background-color: ${({ theme }) => theme.color.white};
`;

export const Half = styled.div`
  position: absolute;

  top: 0;
  width: 100vw;
  height: 50vh;
  border-radius: 0 0 0 40%;

  background-color: ${({ theme }) => theme.color.secondary};
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
  gap: 5rem;

  padding-top: calc(40vh + 15.625rem);
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25rem;
  height: 25rem;

  border-radius: 50%;

  overflow: hidden;

  box-shadow: 0.9375rem 0.9375rem 3.125rem silver;
  background-color: ${({ theme }) => theme.color.white};
`;

export const ContentHead = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 6.25rem;
  padding-top: 1.25rem;
  background-color: ${({ color }) => color};
`;

export const ContentTitle = styled.span`
  ${({ theme }) => theme.typo.h4};
  ${({ theme }) => theme.color.grey[900]};
`;

export const ContentDescription = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  ${({ theme }) => theme.color.grey[900]};
  padding: 2.5rem;
  text-align: center;
`;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 600px;

  position: relative;
`;
