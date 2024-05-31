"use client";

import styled from "@emotion/styled";

interface Props {
  source: string;
}

const Video: React.FC<Props> = ({ source }) => (
  <VideoStyled poster="/video/poster.png" autoPlay loop muted playsInline>
    <source src={source} type="video/mp4" />
  </VideoStyled>
);

const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Video;
