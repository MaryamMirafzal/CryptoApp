import { Children, useEffect, useState } from "react"
import { searchCoin } from "../../Services/cryptoApi"
import { RotatingLines } from "react-loader-spinner"

function Search({currency , setCurrency}) {
    const [ text , setText ] = useState("")
    const [ coins , setCoins ] = useState([])
    const [ isLoading , setIsLoading ] = useState(true)
    useEffect(()=>{
        setCoins([])
        const controller = new AbortController()
        if (!text){
            setIsLoading(false)
            return;
        }

        const search = async ()=>{
            try {
              const res = await fetch(searchCoin(text), {signal: controller.signal})
              const json = await res.json();
              console.log(json);
              setCoins(json.coins)
              if(json.coins){
                setCoins(json.coins)
                setIsLoading(false)
            }
              else{
                alert(json.status.error_message)
              }
            } catch (error) {
              if( error.name !== "AbortError"){
                alert(error.message)
              }
            }
            
        }
        setIsLoading(true)
        search()
        return() => controller.abort()
    },[text])
  return (
    <div>
        <input type="text" placeholder="Search"value={text} onChange={e => setText(e.target.value)} />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
        <div>
            { isLoading && <RotatingLines width="50px" height="50px" strokeColor="#3874ff" strokeWidth="2"/>}
            <ul>
                {coins.map( (coin) =>(<li key={coin.key}>
                    <img src={coin.thumb} alt={coin.name} />
                    <p>{coin.name}</p>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default Search