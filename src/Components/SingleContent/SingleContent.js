import { img_300, unavailable } from "../../Config";
import Content from "../Content/Content";
import "./SingleContent.css";
import { Badge } from "@mui/material";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <Content media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt=""
      />
      <b className="title"> {title} </b>
      <div className="subTitle">
        <span>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
        <span>{date}</span>
      </div>
    </Content>
  );
};

export default SingleContent;
