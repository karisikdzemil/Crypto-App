export default function Message( {message} ){
    return(
        <div className="w-[500px] h-[300px] bg-gray-500 absolute top-[40%] ">
            <p>{message}</p>
        </div>
    )
}