import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;

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
  height: 100vh;

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

  word-break: break-all;

  @media (max-width: 1260px) {
    display: grid;
    padding: 0 100px;
    grid-template-columns: repeat(auto-fill, minmax(86.43px, auto));

    height: fit-content;
    margin-top: 100px;
  }

  @media (max-width: 880px) {
    font-size: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(56px, auto));
    padding: 0 60px;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(56px, auto));
    padding: 0 20px;
  }
`;

export const AnimatedChar = styled.span`
  opacity: 0;
  transform: translateY(3.125rem);
  display: inline-block;
  animation: bounce 2s;
  animation-fill-mode: forwards;

  max-width: 86.43px;

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
