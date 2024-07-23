import ChartUp from "../../assets/chart-up.svg"
import ChartDown from "../../assets/chart-down.svg"
import {RotatingLines} from "react-loader-spinner"

import styles from "./TableCoin.module.css"
import { marcketChart } from "../../Services/cryptoApi";

function TableCoin({coins, isLoading , setChart}) {
  // console.log(coins);
  return (<div className={styles.container}>
    { 
      isLoading ? (<RotatingLines strokeColor="blue" strokeWidth="2" />):(
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>total volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line react/jsx-key
            coins.map((coin)=> <TableRow coin={coin} key={coin.id} setChart={setChart}/>)
          }
        </tbody>
      </table>
    </div>
      )
    }</div>
    
  )
}

export default TableCoin


const TableRow = ({coin:{id,symbol,image,name,current_price,total_volume, price_change_percentage_24h:price_change}, setChart})=>{
  const showHandler = async ()=>{
    try {
      const res = await fetch(marcketChart(id))
      const json = await res.json()
      setChart(json)
    } catch (error) {
      setChart(null)
    }
  }
  return(
    <tr>
      <td>
      <div className={styles.symbol} onClick={showHandler}> 
        <img src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change>0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
      <td>{total_volume.toLocaleString()}</td>
      <td><img src={price_change > 0 ? ChartUp:ChartDown} alt={name} /></td>
    </tr>
  )
}
