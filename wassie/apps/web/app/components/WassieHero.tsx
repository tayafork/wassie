export default function WassieHero(){
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-8 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold">Wassie World — Genesis</h1>
          <p className="mt-3 text-lg text-violet-100">Discover, mine and customize your own Wassie rooms. Built with love in TypeScript + Next.js.</p>
          <div className="mt-6">
            <a className="inline-block bg-white text-violet-700 px-4 py-2 rounded-md font-medium" href="#">Get started</a>
          </div>
        </div>
        <div className="w-56 h-56 bg-white/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl">🪄</div>
            <div className="mt-2 text-sm">Wassie</div>
          </div>
        </div>
      </div>
    </section>
  )
}
