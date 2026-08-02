export default function Navbar(): JSX.Element {
  return (
    <nav aria-label="Main navigation" className="flex justify-between items-center p-8">
      <div className="text-2xl font-bold text-wassie">🐸 WASSIE WORLD</div>

      <div className="flex gap-8 text-gray-300 items-center">
        <a href="#" className="hover:underline">
          Pet
        </a>
        <a href="#rooms" className="hover:underline">
          Rooms
        </a>
        <a href="#mining" className="hover:underline">
          Mining
        </a>
        <a href="#season" className="hover:underline">
          Season
        </a>

        <button
          type="button"
          className="bg-wassie text-black px-5 py-2 rounded-xl font-bold"
          aria-label="Connect wallet"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}
