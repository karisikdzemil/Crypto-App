import ListItem from "./ListItem";
import PartOfList from "./PartOfList";
import FilterList from "./FilterList";
import { topGainers } from "../util/formatter";

export default function List( {data} ) {
 
  if(!data || !data.data || data.data.length === 0){
    return <p>Loading... </p>
  }



  return (
    <section className="w-full min-h-[90vh] bg-slate-900 flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl mt-5 text-white w-80 text-center">
        {" "}
        <span className="text-amber-500">MARKET</span> OVERVIEW{" "}
      </h1>
    <div className="w-[100%] h-[100vh] flex flex-wrap gap-10 items-center justify-center">
        {/* <PartOfList title="Top 5 gainers!" data={topGainers(data, 5)}/> */}
        {/* <PartOfList title="Top 5 losers!" data={topLosers}/>
        <PartOfList title="Top 5 market cap!" data={topMarketCap}/>
        <PartOfList title="Top 5 volume!" data={topVolume}/> */}
    </div>
     
      <ul className="w-10/12 min-h-[10vh] p-10 flex flex-col items-left gap-5">
        <FilterList />
       <ul className="text-white flex w-full justify-between">
       <li>Favorite</li>
        <li>Name</li>
        <li>Value</li>
        <li>Market Cap</li>
        <li>Volume (24h)</li>
        <li>Change (24h)</li>
      </ul>
            {data.data.slice(0, 20).map((listItem, i) => (
                <ListItem key={listItem.id} data={listItem} i={i +1}/>
            ))}
      </ul>
    </section>
  );
}
