export default function MiningPanel(){
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-lg">Active Miner</h3>
      <p className="mt-2 text-sm text-slate-600">Start mining WAS tokens and upgrade your rooms.</p>

      <div className="mt-4 flex items-center gap-3">
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-md">Start</button>
        <button className="px-4 py-2 bg-slate-100 rounded-md">Configure</button>
      </div>

      <div className="mt-4 text-sm text-slate-500">Status: <span className="text-emerald-600">Idle</span></div>
    </div>
  )
}
