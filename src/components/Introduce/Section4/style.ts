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
    ${({ theme }) => theme.color.white}
  );
`;
