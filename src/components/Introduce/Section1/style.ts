import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  width: 100vw;

  animation: bounce 3s;

  @keyframes bounce {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-2.25rem);
    }
  }
`;

export const Title = styled.span`
  font-size: 6.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  /* text-shadow: 3px 3px ${({ theme }) => theme.color.black}; */
  -webkit-text-stroke: 0.063rem ${({ theme }) => theme.color.grey[700]};
`;

export const ImageWrapper = styled.div`
  mask-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0) 70%
  );
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  width: 50rem;
  height: 50rem;
  border-radius: 50%;
`;
