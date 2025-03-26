import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import PartOfList from "./PartOfList";
const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
export default function List() {
    const [listData, setListData] = useState(null);
  useEffect(() => {
    async function getListOfCrypto() {
      try {
        const response = await fetch("/api/v1/cryptocurrency/listings/latest", {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': coinCapKey
            }
        });
        const data = await response.json();
         setListData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getListOfCrypto()
  }, []);
  if(!listData || !listData.data || listData.data.length === 0){
    return <p>Loading... </p>
  }

  const topGainers = listData.data
  .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
  .slice(0, 5);

  const topLosers = listData.data
  .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
  .slice(0, 5);

  const topMarketCap = listData.data
  .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
  .slice(0, 5);

  const topVolume = listData.data
  .sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h)
  .slice(0, 5);



  return (
    <section className="w-full min-h-[90vh] bg-slate-900 flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl mt-5 text-white w-80 text-center">
        {" "}
        <span className="text-amber-500">MARKET</span> OVERVIEW{" "}
      </h1>
    <div className="w-[100%] h-[100vh] flex flex-wrap gap-10 items-center justify-center">
        <PartOfList title="Top 5 gainers!" data={topGainers}/>
        <PartOfList title="Top 5 losers!" data={topLosers}/>
        <PartOfList title="Top 5 market cap!" data={topMarketCap}/>
        <PartOfList title="Top 5 volume!" data={topVolume}/>
    </div>
      <ul className="w-10/12 min-h-[10vh] bg-black opacity-50 p-10 flex flex-col items-center gap-5">
            {listData.data.slice(0, 30).map((listItem) => (
                <ListItem key={listItem.id} data={listItem}/>
            ))}
      </ul>
    </section>
  );
}
