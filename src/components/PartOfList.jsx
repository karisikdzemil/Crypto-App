import ListItem from "./ListItem"
export default function PartOfList( {title, data} ){
    return(
         <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
                <h1 className="text-white font-bold text-xl">{title}</h1>
                    {data.slice(0, 5).map((el) => (
                        <ListItem favoriteBtn={false} key={el.id} data={el}/>
                    ))}
        </div>
    )
}