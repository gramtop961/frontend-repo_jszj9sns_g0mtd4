import React from 'react'

const Testimonial = ({ quote, name, title, company, metric }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
    <p className="text-slate-800 italic">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-600">
      <span className="font-semibold text-[#0A1B2B]">{name}</span> — {title}, {company}
    </div>
    <div className="mt-2 text-xs font-medium text-blue-600">{metric}</div>
  </div>
)

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1B2B] text-center">
          Trusted by Leading Deep Tech Companies
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial quote="HQHR streamlined our process beyond expectations." name="Name Placeholder" title="CTO" company="Company" metric="Reduced hiring time by 60%" />
          <Testimonial quote="Five perfect placements without a single miss." name="Name Placeholder" title="VP Engineering" company="Company" metric="5 perfect placements in 90 days" />
          <Testimonial quote="Finally candidates that actually fit our culture." name="Name Placeholder" title="Head of Talent" company="Company" metric="Finally found technical talent that fits our culture" />
        </div>
      </div>
    </section>
  )
}

export default SocialProof
