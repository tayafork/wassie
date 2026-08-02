export type FeatureCardProps = {
  title: string;
  text: string;
};

export default function FeatureCard({ title, text }: FeatureCardProps): JSX.Element {
  return (
    <div className="panel p-6">
      <h3 className="text-xl text-wassie">{title}</h3>

      <p className="mt-3 text-gray-400">{text}</p>
    </div>
  );
}
