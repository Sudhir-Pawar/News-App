import React from "react";
import { Card, CardContent } from "@material-ui/core";
import StatsCard,{StatsCardMulti} from "./StatsCard";
export default function COVIDcard(props) {
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
      <CardContent style={{ paddingBottom: "0px" }}>
        <img
          style={{ width: "50px", marginRight: "10px" }}
          src={props.flag}
          alt="Country flag"
        />
        <h4 style={{ display: "inline", fontSize: "2.4rem" }}>{props.country}</h4>
        <h4>COVID 19 Current Stats</h4>
      </CardContent>
      <CardContent
        style={{ display: "flex", flexDirection: "column" }}
        style={{ paddingTop: "5px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <StatsCard color="#9C27B0" title="Totalcases" stat={props.totalCases} />
          <StatsCard color="#ff8d00" title="Active" stat={props.active} />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <StatsCard color="#61d800" title="Recoverd" stat={props.recovered} />

          <StatsCard color="#B00020" title="Deaths" stat={props.deaths} />
        </div>
        <StatsCardMulti 
            color="#dd0074"
            title1={"Today Cases: "+props.todayCases}
            title2={"Today Deaths: "+props.todayDeaths}
        />
      </CardContent>
    </Card>
  );
}
