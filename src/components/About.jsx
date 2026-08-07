import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, Server, Database, Code2, GraduationCap, Cpu, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-mono font-bold">
                MQ
              </span>
              Driven Backend Developer & Infrastructure Enthusiast
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6 text-base">
              I am a final-year <strong className="text-white font-semibold">Software Engineering student</strong> at Saba University, deeply passionate about backend engineering, scalable systems, RESTful APIs, relational databases, and clean software architecture.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6 text-base">
              My technical expertise spans modern programming languages such as <strong className="text-cyan-400 font-medium">PHP (Laravel)</strong>, <strong className="text-purple-400 font-medium">C#</strong>, and <strong className="text-amber-400 font-medium">Python</strong>, backed by strong database design and normalization principles in SQL Server and SQLite.
            </p>

            {/* Virtualization & ERPNext Highlight Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2 mb-2">
                <Server className="w-4 h-4 text-cyan-400" />
                Infrastructure & Enterprise Systems
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                In addition to application development, I have practical experience with virtualization hypervisors (<strong className="text-white">VMware ESXi, Hyper-V</strong>) and installing, configuring, and managing <strong className="text-white">ERPNext</strong> enterprise systems.
              </p>
            </div>

            {/* Core Values / Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'Scalable Systems', desc: 'Designing clean & extensible REST APIs' },
                { title: 'Database Optimization', desc: 'Normalization & relational integrity' },
                { title: 'Clean Architecture', desc: 'OOP & MVC design pattern adherence' },
                { title: 'System Infrastructure', desc: 'Server deployment & virtualization' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center mt-0.5 shrink-0">
                    ✓
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">{item.title}</h5>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {personalData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mb-4">
                    {idx === 0 && <Award className="w-5 h-5 text-amber-400" />}
                    {idx === 1 && <Layers className="w-5 h-5 text-cyan-400" />}
                    {idx === 2 && <Code2 className="w-5 h-5 text-purple-400" />}
                    {idx === 3 && <Server className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                    {stat.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-1">
                    {stat.value}
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  {stat.sub}
                </p>
              </div>
            ))}

            {/* Quick Education Callout Box */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white">Saba University</h5>
                <p className="text-xs text-slate-300">Bachelor of Software Engineering (Final Year)</p>
                <span className="inline-block mt-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  Ranked 3rd in Class
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
