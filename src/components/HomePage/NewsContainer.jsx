import React,{useContext, useEffect} from "react";
import NewsCards from "./NewsCards";
import useAPI from "../../hooks/useAPI";
import { endpointContext } from "./DrawerBar";

export default function NewsContainer() {
  const reqParams = useContext(endpointContext);
  // console.log("Container "+endpoint);
  const articles = useAPI("https://newsapi.org/v2/top-headlines","in",reqParams);
  // console.log("articles "+articles.length);
  
  return (
    <div style={{display : "flex" , flexDirection:"column",marginTop:"70px"}}>
        {articles.length > 0 ? articles.map((article,index)=>{
          const {source: {name: author},title,description,urlToImage : imageURL,publishedAt,content,url:sourceURL} = article;
          return (
            <NewsCards
             key={index}
             sourceURL={sourceURL}
              title={title}
              description={description}
              imageURL={imageURL}
              content={content}
              date={publishedAt}
              source={author}
            />
          )
        } ):  <div>Loading....</div>}
        {console.log("mounted")}
    </div>
    
  );
}
