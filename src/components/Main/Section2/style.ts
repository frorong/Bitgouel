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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;

  padding: 6.25rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;

  width: 100%;
  overflow-x: hidden;
  margin-top: 40px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.grey[400]};
`;

export const Caption = styled.span`
  width: 600px;
  word-break: keep-all;
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 300px;
  margin: 3.325rem 0;
  border-radius: 16px;

  box-shadow: 0.5375rem 0.5375rem 3.125rem silver;
  background-color: ${({ theme }) => theme.color.white};

  #medal {
    margin: 2rem;
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
  border-radius: 16px 16px 0 0;

  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const ContentTitle = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.white};
  font-weight: 800;
  z-index: 1;
`;

export const ContentDescription = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  ${({ theme }) => theme.color.grey[900]};
  text-align: center;
`;
