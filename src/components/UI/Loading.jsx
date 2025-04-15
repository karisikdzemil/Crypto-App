export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full p-10 gap-4">
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-t-transparent border-[#F0B90B]"></div>
        <p className="text-white text-sm opacity-75">Loading, please wait...</p>
      </div>
    );
  }
  