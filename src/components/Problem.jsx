import React from 'react'
import { Timer, Users, ShieldAlert } from 'lucide-react'

const Item = ({ icon: Icon, title, desc }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-[#0A1B2B]">{title}</h3>
    <p className="mt-2 text-slate-700 text-sm">{desc}</p>
  </div>
)

const Problem = () => {
  return (
    <section className="py-20 bg-slate-50" id="problem">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1B2B] text-center">
          Why Traditional Recruiting Fails for Deep Tech
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Item icon={Timer} title="Slow and inefficient" desc="Technical roles take 90+ days to fill" />
          <Item icon={Users} title="Culture fit ignored" desc="Bad hires cost $240K+ in lost productivity" />
          <Item icon={ShieldAlert} title="Shallow screening" desc="Résumés don't show real capability" />
        </div>
      </div>
    </section>
  )
}

export default Problem
