import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Server, Users, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="experience" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>BACKGROUND & ACCOMPLISHMENTS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Experience, Education & <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Overview' },
            { id: 'infrastructure', label: 'Infrastructure & Systems' },
            { id: 'experience', label: 'Teaching & Volunteer' },
            { id: 'education', label: 'Education & Diplomas' },
            { id: 'achievements', label: 'Achievements' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Infrastructure & Experience */}
          {(activeTab === 'all' || activeTab === 'infrastructure' || activeTab === 'experience') && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subheader Infrastructure */}
              {(activeTab === 'all' || activeTab === 'infrastructure') && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Server className="w-4 h-4" />
                    </div>
                    Infrastructure & Enterprise Systems
                  </h3>

                  <div className="space-y-4">
                    {experienceData.infrastructure.map((item, idx) => (
                      <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                            {item.tools}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subheader Work & Volunteer */}
              {(activeTab === 'all' || activeTab === 'experience') && (
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    Teaching & Community Volunteer Experience
                  </h3>

                  <div className="space-y-4">
                    {experienceData.workAndVolunteer.map((item, idx) => (
                      <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-sm font-bold text-white">{item.role}</h4>
                          <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Column 2: Education & Achievements */}
          {(activeTab === 'all' || activeTab === 'education' || activeTab === 'achievements') && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Subheader Education */}
              {(activeTab === 'all' || activeTab === 'education') && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    Education & Credentials
                  </h3>

                  <div className="space-y-4">
                    {experienceData.education.map((edu, idx) => (
                      <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-800/80">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                          <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium mb-2">{edu.institution}</p>
                        <p className="text-xs text-slate-300 leading-relaxed mb-2">
                          {edu.note}
                        </p>
                        {edu.highlight && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 text-[11px] font-medium">
                            <Award className="w-3 h-3 text-amber-400" />
                            {edu.highlight}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subheader Achievements */}
              {(activeTab === 'all' || activeTab === 'achievements') && (
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    Academic Honors & Achievements
                  </h3>

                  <div className="space-y-4">
                    {experienceData.achievements.map((ach, idx) => (
                      <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-800/80 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                              {ach.title}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-mono">{ach.issuer}</span>
                          </div>
                          <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/40">
                            HONOR
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {ach.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
