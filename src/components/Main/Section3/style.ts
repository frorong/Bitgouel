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

export const Title = styled.span`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: 880px) {
    ${({ theme }) => theme.typo.h2};
  }
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

  @media (max-width: 880px) {
    padding-top: 2.25rem;
  }

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;

  @media (max-width: 880px) {
    padding: 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`;

export const Description = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.grey[200]};

  @media (max-width: 880px) {
    ${({ theme }) => theme.typo.subtitle};
  }
`;

export const Caption = styled.span`
  width: 37.5rem;
  word-break: keep-all;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  @media (max-width: 880px) {
    width: 31.25rem;
  }
`;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 37.5rem;

  position: relative;
  filter: brightness(30%);
`;

export const MindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f5f7fb;
  width: 100vw;
  height: 100%;

  :hover {
    #mid {
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const MindTitle = styled(Description)`
  margin-top: 3.125rem;
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const Mid = styled.div`
  position: relative;
  display: inline-block;
  width: 1.875rem;
  height: 3px;
  background-color: #f5f7fb;

  transition: ease-in-out 0.2s;
`;

export const MidWrapper = styled.div`
  position: relative;
  height: 1.25rem;
  margin: 1.5625rem 0;
`;

export const MidDes = styled(Caption)`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[600]};
`;
