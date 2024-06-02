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

export const Title = styled.span`
  font-size: 4.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.grey[700]};
`;

export const ImageWrapper = styled.div`
  filter: brightness(70%);
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  width: 260px;
  height: 260px;
  border-radius: 8px;
`;
