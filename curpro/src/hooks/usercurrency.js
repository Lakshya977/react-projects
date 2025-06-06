import { useEffect,useState } from "react";


function usecurrencyinfo(currency){
   const [data,setData] = useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(
    ()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    return data
}

export default usecurrencyinfo;