import { ROOMS } from "../data/rooms";
import type { Room } from "../data/rooms";

export default function RoomPreview(): JSX.Element {
  return (
    <section aria-label="Rooms" className="grid md:grid-cols-5 gap-5">
      {ROOMS.map((room: Room) => (
        <article key={room.id} className="panel p-5" aria-labelledby={`room-${room.id}`}>
          <div className="text-4xl" aria-hidden>
            🏠
          </div>

          <h3 id={`room-${room.id}`} className="mt-3">
            {room.name}
          </h3>

          <p className="text-wassie" aria-label={`Bonus ${room.bonusLabel}`}>
            {room.bonusLabel}
          </p>

          <p aria-label={`Price ${room.priceLabel}`}>{room.priceLabel}</p>
        </article>
      ))}
    </section>
  );
}
