import { VideoContainer, VideoDiv } from "./Video.styled";
// import YouTube from "react-youtube";

export function Video() {
  // const opts = {
  //   height: "340",
  //   width: "600",
  //   // playerVars: {
  //   //   autoplay: 1,
  //   // },
  // };

  return (
    <VideoContainer id="video">
      <h2>Video</h2>
      <VideoDiv>
        {/* <YouTube videoId="kNyV3BeNdqc" opts={opts}></YouTube>
        <YouTube videoId="6k4yjCqiSP8" opts={opts}></YouTube> */}
        <video src="https://youtu.be/kNyV3BeNdqc?feature=shared" height={340} controls></video>
        <video src="https://www.youtube.com/watch?v=6k4yjCqiSP8" height={340} controls></video>
      </VideoDiv>
    </VideoContainer>
  );
}
