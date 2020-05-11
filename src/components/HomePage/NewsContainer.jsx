import React, { useContext } from "react";
import NewsCards from "./NewsCards";
import useAPI from "../../hooks/useAPI";
import { endpointContext } from "./DrawerBar";
import Weathercard from "./Weathercard";
import useWeatherAPI from "../../hooks/useWeatherAPI";
import COVIDCard from "./COVIDCard";
import useCOVIDAPI from "../../hooks/useCOVIDAPI";
export default function NewsContainer() {
  const reqParams = useContext(endpointContext);
  const articles = useAPI(
    "https://newsapi.org/v2/top-headlines",
    "in",
    reqParams
  );
  const weather = useWeatherAPI();
  
  const covidStat = useCOVIDAPI("India") 
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "70px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {articles.length > 0 ? (
          articles.map((article, index) => {
            const {
              source: { name: author },
              title,
              description,
              urlToImage: imageURL,
              publishedAt,
              content,
              url: sourceURL,
            } = article;
            
            return (
              <NewsCards
                key={index}
                sourceURL={sourceURL}
                title={title}
                description={description}
                imageURL={imageURL}
                content={content}
                date={publishedAt.substring(0,10)+"  "+publishedAt.substring(11,19)}
                source={author}
              />
            );
          })
        ) : (
          <div>Loading....</div>
        )}
      </div>
      {reqParams.params === 'coronavirus' && covidStat != null ?  
      <COVIDCard
        country = {covidStat.country}
        totalCases =  {covidStat.cases}
        recovered = { covidStat.recovered}
        active = {covidStat.active}
        deaths = {covidStat.deaths}
        flag = {covidStat.countryInfo.flag}
        todayCases = {covidStat.todayCases}
        todayDeaths = {covidStat.todayDeaths}
      />
      :!weather.temp ? null 
      : (
        <Weathercard
          temp={weather.temp}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
          code={weather.weather}
        />
      ) }
    </div>
  );
}
