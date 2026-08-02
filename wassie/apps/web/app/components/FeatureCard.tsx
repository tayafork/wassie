export default function FeatureCard({ feature }: { feature: any }){
  return (
    <div className="p-2 bg-slate-50 rounded-md border border-slate-100 text-sm">
      <div className="font-medium">{feature.title}</div>
      <div className="text-slate-500">{feature.value}</div>
    </div>
  )
}
