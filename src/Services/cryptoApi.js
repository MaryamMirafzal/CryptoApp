const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-6RAubenEiFsz29R5G3Khy4pP"
const getCoinList = ()=>{
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&x_cg_demo_api_key=${API_KEY}`
}
export {getCoinList}