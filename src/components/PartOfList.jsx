import ListItem from "./ListItem"
export default function PartOfList( {title, data} ){

    return(
         <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
                <h1 className="text-white font-bold text-xl">{title}</h1>
                <ListItem data={data[0]}/>
                <ListItem data={data[1]}/>
                <ListItem data={data[2]}/>
                <ListItem data={data[3]}/>
                <ListItem data={data[4]}/>
        </div>
    )
}