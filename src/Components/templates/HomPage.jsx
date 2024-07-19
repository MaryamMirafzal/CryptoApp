import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../../Services/cryptoApi"

function HomPage() {
  const [ coins , setCoins ] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch (getCoinList())
      const json = await res.json();
      setCoins(json)
    }
    },[])



  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  )
}

export default HomPage
