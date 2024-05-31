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
  font-size: 3.75rem;
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
  padding-left: 6.25rem;

  padding-top: calc(50vh);
`;

export const TelText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grey[900]};
`;

export const MapWrapper = styled.div`
  width: 800px;
  height: 500px;
  overflow: hidden;

  position: relative;
`;
