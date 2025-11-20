import React from 'react'
import { PhoneCall, GaugeCircle, HeartHandshake, ShieldCheck } from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-[#0A1B2B]">{title}</h3>
    <p className="mt-2 text-slate-700 text-sm">{desc}</p>
  </div>
)

const Features = () => {
  return (
    <section className="py-20 bg-slate-50" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1B2B] text-center">
          Built for Deep Tech, Powered by Intelligence
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={PhoneCall} title="Voice + Chat AI Agents" desc="Candidates and clients interact via voice or chat for screening and discovery" />
          <FeatureCard icon={GaugeCircle} title="Intelligent Client Portal" desc="5-star ratings, swipe interface, real-time matching, interview scheduling" />
          <FeatureCard icon={HeartHandshake} title="Culture Fit Scoring" desc="Psychometric analysis ensures technical ability AND team alignment" />
          <FeatureCard icon={ShieldCheck} title="Human Quality Control" desc="Expert matchmakers ensure perfect placements, not just filled seats" />
        </div>
      </div>
    </section>
  )
}

export default Features
