import React from 'react';


 export default function useAPI(endpoint="",country="in",reqParams) {
    const [articles,setArticles] = React.useState([]);
    
    React.useEffect(()=>{
        async function getData() {
            let reqURL=endpoint+`?country=${country}`;
            if(reqParams.type == 'q'){
                reqURL=reqURL+`&q=${reqParams.params}&apikey=${process.env.REACT_APP_NEWSAPIKEY}`;
            }
            else{
                reqURL=reqURL+`&category=${reqParams.params}&apikey=${process.env.REACT_APP_NEWSAPIKEY}`
            }
            console.log(reqURL);
            const res = await fetch(reqURL);
            const data= await res.json();
            const {articles : fetchedArtciles} = data;
            setArticles(fetchedArtciles);
        }
        getData();
        window.scrollTo(0,0);
    },[reqParams]);
    
    return articles;
}
