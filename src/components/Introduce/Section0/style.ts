import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: calc(100vh / 3);

  border: solid 1px black;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 260px;
  padding: 0 20px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.div`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[700]};

  word-break: keep-all;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  width: 260px;
  height: 260px;
  border-radius: 8px;
`;
