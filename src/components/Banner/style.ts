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
