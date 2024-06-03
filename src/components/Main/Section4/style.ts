import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grey[900]};

  z-index: 1;
`;

export const TelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  z-index: 1;
  width: 100vw;

  padding: 6.25rem;

  @media (max-width: 880px) {
    padding: 3.75rem;
  }

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`;

export const Text = styled.span`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const MapWrapper = styled.div`
  min-width: 50rem;
  height: 31.25rem;
  overflow: hidden;

  position: relative;
  border-radius: 0.625rem;

  @media (max-width: 1260px) {
    min-width: 18.75rem;
  }

  @media (max-width: 880px) {
    min-width: 12.5rem;
  }
`;

export const ImageMap = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 31.25rem;
  border-radius: 0.625rem;

  img {
    object-fit: cover;
  }

  @media (max-width: 1260px) {
    min-width: 18.75rem;
  }

  @media (max-width: 880px) {
    min-width: 12.5rem;
  }
`;

export const GoToMap = styled.a`
  ${({ theme }) => theme.typo.subtitle};
  color: ${({ theme }) => theme.color.grey[900]};

  transition: ease-in-out 0.2s;
  width: fit-content;

  :hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
