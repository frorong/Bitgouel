import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Half = styled.div`
  position: absolute;

  top: 0;
  width: 100vw;
  height: 50vh;
  border-radius: 0 0 40% 0;

  background: linear-gradient(
      to right,
      ${({ theme }) => theme.color.secondary},
      rgba(251, 226, 222, 0)
    ),
    url("/Introduce/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.span`
  font-size: 3.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grey[900]};

  margin-top: 1.25rem;
  z-index: 1;
`;

export const TelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  z-index: 1;
  width: 100vw;
  padding-left: 100px;

  padding-top: calc(50vh);
`;

export const TelContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TelText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.grey[900]};
`;
