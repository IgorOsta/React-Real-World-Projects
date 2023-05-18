import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://storage.prompt-hunt.workers.dev/clhjbthwp001bmb08yu6h641s_1"
        alt=""
        width="100%"
      />
      <div className="info">
        <img
          src="https://storage.prompt-hunt.workers.dev/clh2jk18x0004l408l6lyxlkm_1"
          alt=""
        />
        <span className="description">
          So insisted received is occasion advanced honoured. Among ready to
          which up. Attacks smiling and may out assured moments man nothing
          outward. Thrown any behind afford either the set depend one temper.
          Instrument melancholy in acceptance collecting frequently be if.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="moreInfo">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
