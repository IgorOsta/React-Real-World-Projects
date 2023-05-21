import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <iframe
        className="frame"
        title="vid2"
        src="https://player.vimeo.com/video/821101511?h=006e527e7c"
        frameborder="0"
        allow="autoplay; fullscreen"
      ></iframe>
    </div>
  );
};

export default Watch;
