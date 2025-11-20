import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1B2B]">
              Headquarters for Deep Tech Hiring
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-5 text-lg text-slate-700 max-w-xl">
              The first hybrid recruitment system combining AI agents with human expertise to build technical teams with precision and speed
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-8 flex items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-[#0A1B2B] text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-[#0d2438]">
                Book a Demo
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md border border-slate-300 text-[#0A1B2B] px-6 py-3 text-sm font-semibold hover:bg-slate-50">
                How It Works
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
