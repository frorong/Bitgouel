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
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;

  opacity: 0;
  margin-top: 12.5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 16.25rem;
  padding: 0 1.25rem;
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

  width: 16.25rem;
  height: 16.25rem;
  border-radius: 0.5rem;
`;

export const Trigger = styled.div`
  z-index: -1;

  width: 40vw;
  height: 12.5rem;

  position: absolute;
  right: 0;
`;
