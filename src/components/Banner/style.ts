import Image from "next/image";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100vw;
  height: 33.75rem;

  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const FadeInImage = styled(Image)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1s ease-in-out;
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
