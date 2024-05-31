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

export const DownloadButton = styled.a`
  width: fit-content;
  padding: 1.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.secondary};

  transition: ease-in-out 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0.5375rem 0.5375rem 3.125rem silver;
  }
`;

export const Trigger = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  z-index: 2;
  top: 0;
  right: 0;

  background-color: red;
`;

export const CockWrapper = styled.div`
  position: absolute;
  top: -300px;
  right: -300px;
  z-index: 2;

  transform: rotate(110deg);
`;
