import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
`;

export const Title = styled.span`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 4.6875rem;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 880px) {
    ${({ theme }) => theme.typo.h2};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;

  padding: 6.25rem 0 6.25rem 6.25rem;

  @media (max-width: 880px) {
    padding: 3.75rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 5rem;

  width: 100%;
  margin-top: 2.5rem;

  @media (max-width: 1736px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 1260px) {
    gap: 2.5rem;
  }

  @media (max-width: 660px) {
    gap: 0.625rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Description = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const Caption = styled.span`
  width: 37.5rem;
  word-break: keep-all;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15.625rem;
  height: 18.75rem;
  margin: 3.325rem 0;
  border-radius: 1rem;

  box-shadow: 0.5375rem 0.5375rem 3.125rem silver;
  background-color: ${({ theme }) => theme.color.white};

  #medal {
    margin: 2rem;
  }

  @media (max-width: 1260px) {
    width: 9.375rem;
    height: 13.125rem;
  }

  @media (max-width: 1260px) {
    #medal {
      margin: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const ContentHead = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 6.25rem;
  padding-top: 1.25rem;
  background-color: ${({ color }) => color};
  border-radius: 1rem 1rem 0 0;

  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const ContentTitle = styled.span`
  display: flex;
  justify-content: center;

  z-index: 1;
  width: 15.625rem;

  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.white};
  font-weight: 800;

  @media (max-width: 1260px) {
    ${({ theme }) => theme.typo.h4};
  }
`;

export const ContentDescription = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  ${({ theme }) => theme.color.grey[900]};
  text-align: center;

  @media (max-width: 1260px) {
    padding: 0 0.5rem;
    ${({ theme }) => theme.typo.body1};
  }
`;
