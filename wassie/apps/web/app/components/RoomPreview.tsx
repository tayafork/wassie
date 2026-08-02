import FeatureCard from './FeatureCard'

export default function RoomPreview({ room }: { room: any }){
  return (
    <article className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center">
          <span className="text-xl">{room.emoji}</span>
        </div>
        <div>
          <h4 className="font-semibold">{room.name}</h4>
          <p className="text-sm text-slate-500">{room.description}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {room.features.map((f: any) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </article>
  )
}
