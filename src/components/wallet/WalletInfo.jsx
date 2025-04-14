import { useContext } from "react"
import { AuthContext } from "../../store/AuthContext"

export default function WalletInfo () {
    


    return(
        <div className="w-full max-w-4xl bg-[#2A2D38] rounded-2xl p-6 shadow-lg flex flex-col gap-6 text-white">
{/* Header */}
<div className="flex flex-col gap-1 border-b border-gray-600 pb-4">
  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-semibold">My Wallet</h2>
    <span className="text-sm text-gray-400">Updated just now</span>
  </div>
  <p className="text-sm text-gray-400">Logged in as: <span className="text-white font-medium">karisikdzemil@gmail.com</span></p>
</div>

{/* Balance */}
<div className="flex flex-col items-center gap-2">
  <p className="text-gray-400 text-lg">Total Balance</p>
  <h3 className="text-4xl font-bold text-green-400">$100,000</h3>
</div>

{/* Currency List */}
<div className="flex flex-col gap-3">
  <h4 className="text-lg font-medium border-b border-gray-600 pb-2">Your Assets</h4>
  <div className="flex flex-col gap-3">

    {/* Example coin */}
    <div className="flex justify-between items-center bg-[#1F222B] p-4 rounded-xl">
      <div className="flex items-center gap-3">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="btc" className="w-8 h-8" />
        <div>
          <p className="text-white font-medium">Bitcoin</p>
          <p className="text-sm text-gray-400">BTC</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white font-medium">0.42 BTC</p>
        <p className="text-sm text-green-400">$26,000</p>
      </div>
    </div>

  </div>
</div>
</div>
    )
}