import { useEffect, useState } from "react"

import TableCoin from "../modules/TableCoin"
import { getCoinList } from "../../Services/cryptoApi"
import Pagination from "../modules/Pagination"
import Search from "../modules/Search"

function HomPage() {
  const [ coins , setCoins ] = useState([])
  const [ page , setPage ] = useState(1)
  const [ isLoading , setIsLoading ] = useState(true)
  const [currency , setCurrency ] = useState("usd")
  useEffect(()=>{
    const getData = async ()=>{
      try {
        const res = await fetch (getCoinList(page , currency))
        const json = await res.json();
        setCoins(json)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    },[page , currency])



  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomPage
