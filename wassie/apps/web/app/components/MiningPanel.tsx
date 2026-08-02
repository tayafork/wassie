export default function MiningPanel(): JSX.Element {
  return (
    <div id="mining" className="panel p-8">
      <h2 className="text-2xl">⛏ Mining</h2>

      <div className="text-5xl font-bold text-wassie mt-5">1,000</div>

      <p className="sr-only">xWASSIE / DAY</p>
      <p aria-hidden>xWASSIE / DAY</p>

      <div className="mt-6 bg-black rounded-xl p-4">Offline Mining Active</div>
    </div>
  );
}
