import ListItem from "./ListItem";
import PartOfList from "./PartOfList";

export default function List( {data} ) {
 
  if(!data || !data.data || data.data.length === 0){
    return <p>Loading... </p>
  }

  const topGainers = data.data
  .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
  .slice(0, 5);

  const topLosers = data.data
  .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
  .slice(0, 5);

  const topMarketCap = data.data
  .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
  .slice(0, 5);

  const topVolume = data.data
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
     
      <ul className="w-10/12 min-h-[10vh] p-10 flex flex-col items-center gap-5">
       <ul className="text-white flex w-full justify-between">
       <li>Favorite</li>
        <li>Name</li>
        <li>Value</li>
        <li>Market Cap</li>
        <li>Volume (24h)</li>
        <li>Change (24h)</li>
      </ul>
            {data.data.slice(0, 20).map((listItem) => (
                <ListItem key={listItem.id} data={listItem}/>
            ))}
      </ul>
    </section>
  );
}
