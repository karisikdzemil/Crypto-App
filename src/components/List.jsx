import { useState } from "react";
import ListItem from "./ListItem";
import PartOfList from "./PartOfList";
import FilterList from "./filterList";
import SearchCrypto from "./SearchCrypto";
import { topGainers } from "../util/formatter";
import { topLosers } from "../util/formatter";
import { topMarketCap } from "../util/formatter";
import { topVolume } from "../util/formatter";

export default function List({ data }) {
  const [activeBtn, setActiveBtn] = useState('All');
  let filteredData = [];
  function changeActiveBtn (btnName) {
      setActiveBtn(btnName);
  }
  if (!data || !data.data || data.data.length === 0) {
    return <p>Loading... </p>;
  }

  if(activeBtn === 'All'){
    filteredData = [...data.data];
  }else if(activeBtn === 'Gainers'){
    filteredData = topGainers(data, 20);
  }else if(activeBtn === 'Losers'){
    filteredData = topLosers(data, 20);
  }else if(activeBtn === 'Market'){
    filteredData = topMarketCap(data, 20)
  }

  return (
    <section className="w-full min-h-[90vh] bg-slate-900 flex flex-col items-center gap-10 p-10">
      <h1 className="text-4xl mt-5 text-white w-90 text-center font-bold">
        {" "}
        <span className="text-amber-400">MARKET</span> OVERVIEW{" "}
      </h1>
      <div className="w-[100%] h-[100vh] flex flex-wrap gap-10 items-center justify-center">
        <PartOfList title="Top 5 gainers!" data={topGainers(data, 5)} />
        <PartOfList title="Top 5 losers!" data={topLosers(data, 5)} />
        <PartOfList title="Top 5 market cap!" data={topMarketCap(data, 5)} />
        <PartOfList title="Top 5 volume!" data={topVolume(data, 5)} />
      </div>

      <ul className="w-10/12 min-h-[10vh] p-10 flex flex-col items-left gap-5">
        <FilterList changeActiveBtn={changeActiveBtn} activeBtn={activeBtn}/>
        <SearchCrypto data={data}/>
        <ul className="text-white flex w-full justify-between">
          <li>Favorite</li>
          <li>Name</li>
          <li>Value</li>
          <li>Market Cap</li>
          <li>Volume (24h)</li>
          <li>Change (24h)</li>
        </ul>
        {filteredData.slice(0, 20).map((listItem, i) => (
          <ListItem key={listItem.id} data={listItem} i={i + 1} favoriteBtn={true} />
        ))}
      </ul>
    </section>
  );
}
