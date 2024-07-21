import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../../Services/cryptoApi"
import Pagination from "../modules/Pagination"

function HomPage() {
  const [ coins , setCoins ] = useState([])
  const [ page , setPage ] = useState(1)
  const [ isLoading , setIsLoading ] = useState(true)
  useEffect(()=>{
    const getData = async ()=>{
      const res = await fetch (getCoinList(page))
      const json = await res.json();
      setCoins(json)
      setIsLoading(false)
    }
    getData();
    },[page])



  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomPage
