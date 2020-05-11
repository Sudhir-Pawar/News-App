import React from 'react'

export default function useCOVIDAPI(country,options) {
    const [stats,setStats] = React.useState({});
    React.useEffect(()=>{
        async function getStats() {
            console.log("fetching...");
            const rawData = await fetch(`https://corona.lmao.ninja/v2/countries/${country}?strict=true`);
            const data = await rawData.json();
            setStats(data); 
            console.log(data);
        }
        getStats();
    },[country]);
    return stats;
}