import { useEffect, useState } from "react";
import ListItem from "./ListItem";
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



  return (
    <section className="w-full min-h-[90vh] bg-slate-900 flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl mt-5 font-bold text-white w-80 text-center">
        {" "}
        <span className="text-amber-500">List</span> of more than 100{" "}
        <span className="text-amber-500">criptocurency</span>
      </h1>
    <div className="w-[100%] h-[100vh] bg-red-300 flex flex-wrap gap-10 items-center justify-center">
    <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

      </div>
      <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

      </div>
      <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

      </div>
      <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />

      </div>
    </div>
      <ul className="w-10/12 min-h-[10vh] bg-black opacity-50 p-10 flex flex-col items-center gap-5">
            {listData.data.map((listItem) => (
                <ListItem data={listItem}/>
            ))}
      </ul>
    </section>
  );
}
