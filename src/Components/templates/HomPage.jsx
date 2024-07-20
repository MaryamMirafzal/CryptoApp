import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../../Services/cryptoApi"

function HomPage() {
  const [ coins , setCoins ] = useState([])
  const [ isLoading , setIsLoading ] = useState(true)
  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch (getCoinList())
      const json = await res.json();
      setCoins(json)
      setIsLoading(false)
    }
    getData();
    },[])



  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  )
}

export default HomPage
