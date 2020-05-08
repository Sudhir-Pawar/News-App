import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  styled,
} from "@material-ui/core";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NewsContainer(props) {
  const [hover, setHover] = useState(false);
  const ViewCoverageBtn = styled(Button)({
    color: "#1a75eb",
    fontWeight: 600,
  });
  return (
    <div>
      <Card
        style={{
          width: 800,
          marginTop: "20px",
          boxShadow: "none",
          border: "1px #d8dade solid",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: "10px" }}
          >
            {props.description}
          </Typography>
        </CardContent>
        <CardContent
          style={{ display: "flex", flexDirection: "row", paddingTop: "0px" }}
        >
          <CardMedia
            style={{
              height: props.content === null ? 400 : 140,
              width: props.content === null ? "100%" : "70%",
              borderRadius: "10px",
              marginRight: props.content === null?"0px":"20px",
            }}
            image={props.imageURL}
          />

          <Typography variant="h6" color="textSecondary" component="h6">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2">{props.date}</Typography>
          <ViewCoverageBtn 
            style={{ textDecoration: hover && "underline" }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={()=>{
              window.open(props.sourceURL,'_blank')
            }}
          >
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={faExternalLinkSquareAlt}
            />
            View Full Coverage
          </ViewCoverageBtn>
          <p style={{ position: "relative", left: "300px" }}>{props.source}</p>
        </CardActions>
      </Card>
    </div>
  );
}
