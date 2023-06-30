import Wrapper from "./Video.styled";

const Video = ({ type }) => {
  return (
    <Wrapper>
      <div className="title">
        {console.log(type)}
        {type === "site-video"
          ? "by watching the video, you support us to enhance our service"
          : "Support me for dubbing more videos"}
      </div>
      <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </Wrapper>
  );
};

export default Video;
