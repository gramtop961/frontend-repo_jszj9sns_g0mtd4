import React from 'react'
import { Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#071321] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              <span>HQ</span><span className="text-blue-400">HR</span>
            </div>
            <p className="mt-3 text-sm text-blue-100/80">AI-powered hybrid recruitment for deep tech teams.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-3">Product</div>
            <ul className="space-y-2 text-sm text-blue-100/90">
              <li><a href="#how" className="hover:text-white">How It Works</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm text-blue-100/90">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Legal</div>
            <ul className="space-y-2 text-sm text-blue-100/90">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-blue-100/80 flex items-center justify-between">
          <div>© 2025 HQHR. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
