import Loading from "../UI/Loading";
import ListItem from "./ListItem"
export default function PartOfList( {title, data } ){
    return(
         <div className="max-w-11/12 h-[360px] bg-[#1E2329] rounded-sm flex flex-col justify-center items-center gap-5 p-10 md:min-w-5/12 xs:12">
                <h1 className="text-white font-bold text-xl md-text-2xl">{title}</h1>
                    {!data ? <Loading /> : data.slice(0, 5).map((el) => (
                        <ListItem favoriteBtn={false} key={el.id} data={el}/>
                    ))}
        </div>
    )
}