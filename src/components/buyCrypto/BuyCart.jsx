export default function BuyCart ( {icon, title, text}) {

    return(
        <div className="w-96 h-[40vh] bg-slate-900 border-2 border-gray-700 rounded-md p-5 flex flex-col gap-7">
            <span className="text-7xl text-gray-500">{icon}</span>
           <h1 className="text-2xl text-white">{title}</h1>
           <p className=" text-gray-400">{text}</p>
        </div>
    )
}