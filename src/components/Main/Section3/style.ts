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
    padding: 20px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media (max-width: 880px) {
    padding: 40px;
  }

  @media (max-width: 600px) {
    padding: 20px;
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
  width: 600px;
  word-break: keep-all;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.white};
  text-align: center;

  @media (max-width: 880px) {
    width: 500px;
  }
`;

export const VideoWrapper = styled.div`
  width: 100vw;
  height: 600px;

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
  margin-top: 50px;
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const Mid = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: #f5f7fb;

  transition: ease-in-out 0.2s;
`;

export const MidWrapper = styled.div`
  position: relative;
  height: 20px;
  margin: 25px 0;
`;

export const MidDes = styled(Caption)`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[600]};
`;
