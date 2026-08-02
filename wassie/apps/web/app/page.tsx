import Image from 'next/image'
import Navbar from '../components/Navbar'
import WassieHero from '../components/WassieHero'
import MiningPanel from '../components/MiningPanel'
import RoomPreview from '../components/RoomPreview'
import { ROOMS } from '../data/rooms'

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <WassieHero />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Mining</h2>
          <MiningPanel />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROOMS.map((r) => (
              <RoomPreview key={r.id} room={r} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
