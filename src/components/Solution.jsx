import React from 'react'
import { Bot, MessageCircle, UserCheck } from 'lucide-react'

const Step = ({ icon: Icon, title, desc, index }) => (
  <div className="relative">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#0A1B2B]">{title}</h3>
        <p className="text-sm text-slate-700 mt-1">{desc}</p>
      </div>
    </div>
  </div>
)

const Solution = () => {
  return (
    <section className="py-20 bg-white" id="how">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1B2B] text-center">
          AI Speed. Human Precision. Perfect Alignment.
        </h2>
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <Step icon={Bot} title="AI Agents Screen Candidates" desc="Voice and chat agents qualify candidates on technical depth and culture fit" index={1} />
          <Step icon={MessageCircle} title="AI Probes Clients" desc="Intelligent agents surface real hiring needs beyond job descriptions" index={2} />
          <Step icon={UserCheck} title="Humans Match & Close" desc="Expert recruiters handle final placement and quality control" index={3} />
        </div>
      </div>
    </section>
  )
}

export default Solution
