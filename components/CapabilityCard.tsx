interface CapabilityCardProps {
  capability: {
    name: string
    description: string
  }
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-text">{capability.name}</h3>
      <p className="text-text-secondary leading-relaxed">{capability.description}</p>
    </div>
  )
}
