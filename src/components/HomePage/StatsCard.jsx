import React from "react";
import { Card, CardContent } from "@material-ui/core";

export default function StatsCard(props) {
  return (
    <Card
      style={{
        backgroundColor: props.color,
        width: "50%",
        margin: "2px",
        fontSize: "1rem",
        color: "white",
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      <CardContent>
        <p>{props.title}</p>
        <p>{props.stat}</p>
      </CardContent>
    </Card>
  );
}

export function StatsCardMulti(props) {
  return (
    <Card
      style={{
        backgroundColor: props.color,
        width: "99%",
        margin: "2px",
        fontSize: "1rem",
        color: "white",
        fontWeight: 600,
        textAlign:"left",
        padding: " 0px 20px",
      }}
    >
      <CardContent>
        <p>{props.title1}</p>
        <p>{props.title2}</p>
      </CardContent>
    </Card>
  );
}
