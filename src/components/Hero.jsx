import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Terminal, ShieldCheck, Database, Server, Cpu, Sparkles, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Mesh & Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg shadow-cyan-500/5 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Final-Year Software Engineering Student
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {personalData.location}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient hover:opacity-90 transition-opacity">
              Mohammed Mokhtar Qadri
            </span>
          </motion.h1>

          {/* Role Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl leading-relaxed mb-10"
          >
            Software Engineering Student specializing in{' '}
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/30 underline-offset-4">
              Backend Development
            </span>{' '}
            and{' '}
            <span className="text-purple-400 font-semibold underline decoration-purple-500/30 underline-offset-4">
              System Infrastructure
            </span>
            .
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {/* Button 1: View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all focus:outline-none"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            {/* Button 2: Download CV */}
            <a
              href={personalData.resumeUrl}
              download="Mohammed_Mokhtar_Qadri_CV.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-slate-900/90 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-0.5 transition-all shadow-md shadow-cyan-500/10 focus:outline-none"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            {/* Button 3: Contact Me */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/60 border border-slate-800 hover:text-white hover:bg-slate-800 hover:border-slate-700 hover:-translate-y-0.5 transition-all focus:outline-none"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Tech Pill Badges Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <span className="text-xs uppercase tracking-widest font-mono text-slate-400 w-full sm:w-auto text-center mb-2 sm:mb-0">
              Core Stack:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { name: 'Laravel', icon: Cpu, color: 'text-red-400 border-red-500/20 bg-red-950/20' },
                { name: 'PHP', icon: Terminal, color: 'text-indigo-400 border-indigo-500/20 bg-indigo-950/20' },
                { name: 'C#', icon: Terminal, color: 'text-purple-400 border-purple-500/20 bg-purple-950/20' },
                { name: 'Python', icon: Terminal, color: 'text-amber-400 border-amber-500/20 bg-amber-950/20' },
                { name: 'SQL Server', icon: Database, color: 'text-blue-400 border-blue-500/20 bg-blue-950/20' },
                { name: 'VMware ESXi', icon: Server, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-950/20' },
                { name: 'ERPNext', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/20 bg-emerald-950/20' },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium backdrop-blur-sm ${tech.color}`}
                >
                  <tech.icon className="w-3.5 h-3.5" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
