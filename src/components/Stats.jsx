import React from 'react'

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-extrabold">{value}</div>
    <div className="mt-2 text-sm text-blue-100/90">{label}</div>
  </div>
)

const Stats = () => {
  return (
    <section className="py-16 bg-[#0A1B2B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Stat value="3-4 hours" label="saved per tech per day" />
          <Stat value="$500K–$1M" label="average contract value" />
          <Stat value="First true hybrid" label="AI + human system" />
          <Stat value="Built for deep tech" label="AI, CleanTech, DeepTech" />
        </div>
      </div>
    </section>
  )
}

export default Stats
