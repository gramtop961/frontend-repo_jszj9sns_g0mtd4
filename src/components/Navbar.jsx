import React from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { label: 'How It Works', href: '#how' },
    { label: 'For Companies', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#0A1B2B]">HQ</span>
              <span className="text-[#3B82F6]">HR</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#0A1B2B] transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-[#0A1B2B] text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-[#0d2438] transition-colors">
              Book Demo
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-2 text-slate-700">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-1 py-2 rounded hover:bg-slate-50" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-[#0A1B2B] text-white px-4 py-2 text-sm font-medium shadow-sm">
                Book Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
