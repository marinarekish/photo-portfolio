import YouTube from "react-youtube";
import { VideoContainer } from "./Video.styled";

export function Video() {
  const opts = {
    height: "670",
    width: "1200",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  return (
    <VideoContainer>
      <h2>Video</h2>
      <YouTube videoId="dSNzx3pVWLg" opts={opts} />
    </VideoContainer>
  );
}
