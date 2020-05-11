import React, { useState, useEffect, useReducer } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { images } from "../../assets/Image.js";
import {f}from '@fortawesome/free-solid-svg-icons'

function reducer(state, action) {
  console.log("called ");
  if (action.endsWith("n")) {
    action = action.substring(0, action.length - 1) + "d";
  }
  switch (action) {
    case "01d":
      return images[6];
    case "02d":
      return images[0];
    case "03d":
      return images[0];
    case "04d":
      return images[0];
    case "50d":
      return images[7];
    case "13d":
      return images[8];
    case "09d":
      return images[5];
    case "10d":
      return images[5];
    case "11d":
      return images[1];
  }
}

export default function WeatherCard(props) {
  const sr = new Date(0);
  const st = new Date(0);
  sr.setUTCSeconds(props.sunrise);
  st.setUTCSeconds(props.sunset);
  const [image, dispatchImage] = useReducer(reducer, {});
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    const {
      code: [{ icon: code }],
    } = props;
    const data = kelvinToCelsius(props.temp);
    setTemp(data);

    dispatchImage(code);
  }, [props]);
  function kelvinToCelsius(temp) {
    return Math.ceil(temp - 273.15);
  }
  return (
    <Card
      style={{
        marginTop: "20px",
        boxShadow: "none",
        border: "1px #d8dade solid",
        right: "00%",
        width: "260px",
        margin: "20px",
        height: "fit-content",
      }}
    >
      {console.log(image)}
      <CardContent style={{ paddingBottom: "0px" }}>
        <Typography component="h4">
          {sr.getDate()}/{sr.getMonth()}/{sr.getFullYear()}
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          paddingTop: "0px",
          flexDirection: "row-reverse",
          paddingBottom: "0px",
          paddingLeft: "0px",
        }}
      >
        <CardMedia style={{ height: "100px" }}>
          <img
            style={{ width: "100%", position: "relative", bottom: "20px" }}
            src={image && image.src}
          />
        </CardMedia>
        <CardContent>
          <Typography
            component="h5"
            style={{
              paddingLeft: "0px",
              marginTop: "15px",
              fontSize: "2rem",
              marginLeft: "10px",
            }}
          >
            {isNaN(temp) ? 0 : temp}&#8451;
          </Typography>
        </CardContent>
      </CardContent>
      <CardContent style={{ paddingTop: "0px" }}>
        <Typography>
          sunrise: {sr.getHours()}:{sr.getMinutes()}:{sr.getSeconds()} AM
        </Typography>
        <Typography>
          sunset: {st.getHours()}:{st.getMinutes()}:{st.getSeconds()} PM
        </Typography>
      </CardContent>
    </Card>
  );
}
