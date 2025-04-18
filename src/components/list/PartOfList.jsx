import Loading from "../UI/Loading";
import ListItem from "./ListItem";

export default function PartOfList({ title, data }) {
  return (
    <div className="w-full max-w-[500px] md:min-w-[400px] min-h-[360px] bg-[#1E2329] rounded-xl flex flex-col items-center gap-5 p-6 shadow-lg md:w-[60%]">
      <h1 className="text-white font-bold text-xl md:text-2xl text-center">{title}</h1>
      <div className="w-full flex flex-col gap-2">
        {!data ? (
          <Loading />
        ) : (
          data.slice(0, 5).map((el) => (
            <ListItem favoriteBtn={false} key={el.id} data={el} />
          ))
        )}
      </div>
    </div>
  );
}
