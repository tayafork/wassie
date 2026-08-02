import Navbar from "./components/Navbar";
import WassieHero from "./components/WassieHero";
import MiningPanel from "./components/MiningPanel";
import RoomPreview from "./components/RoomPreview";
import FeatureCard from "./components/FeatureCard";

export default function Home(): JSX.Element {
  return (
    <main>
      <Navbar />

      <WassieHero />

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-8">
        <MiningPanel />

        <FeatureCard title="Trade → Feed" text="Every Robinhood Chain trade feeds your Wassie." />

        <FeatureCard title="Level Up" text="Grow stronger and unlock higher mining rates." />
      </section>

      <section id="rooms" className="p-8 max-w-6xl mx-auto">
        <h2 className="text-4xl mb-8">Rooms</h2>

        <RoomPreview />
      </section>
    </main>
  );
}
