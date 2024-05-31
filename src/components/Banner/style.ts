import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: calc(100vh - 5.5rem);

  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: calc(100vw + 100px);

  position: relative;
  overflow: hidden;
`;

export const FadeInImage = styled.img`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(0);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100vw + 100px);
  height: calc(100vh - 5.5rem);

  object-fit: cover;

  animation: fadeIn 1s ease-in-out, slide 10s ease-in-out;
`;

export const BannerTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 33.75rem;

  position: absolute;
  z-index: 1;

  font-size: 6.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  text-shadow: 3px 3px ${({ theme }) => theme.color.black};
`;

export const AnimatedChar = styled.span`
  opacity: 0;
  transform: translateY(3.125rem);
  display: inline-block;
  animation: bounce 2s;
  animation-fill-mode: forwards;

  @keyframes bounce {
    0%,
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-1.25rem);
    }
  }
`;
