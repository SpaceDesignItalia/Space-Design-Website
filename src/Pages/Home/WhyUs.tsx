import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import { cn } from '@heroui/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'

const chartData = [
  { value: 10 },
  { value: 15 },
  { value: 12 },
  { value: 18 },
  { value: 20 },
  { value: 25 },
];

const index = 0;
const changeType: 'positive' | 'negative' | 'neutral' = 'positive';
const color: 'default' | 'success' | 'danger' | 'warning' | 'secondary' | 'primary' = 'success';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

export default function WhyUs() {
  const { t } = useLanguage();
    return (
      <div className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white text-center mb-20"
          >
            {t('why-us-title')}
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="relative lg:col-span-3"
            >
              <div className="absolute inset-px rounded-lg bg-gray-600/30 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <motion.img
                  variants={imageVariants}
                  alt={t('performance-subtitle')}
                  src="/Imgs/Home/why-1.webp"
                  className="h-80 object-cover object-left"
                />
                <motion.div 
                  variants={contentVariants}
                  className="p-10 pt-4"
                >
                  <h3 className="text-sm/4 font-semibold text-gray-300">{t('performance-title')}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">{t('performance-subtitle')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    {t('performance-desc')}
                  </p>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="relative lg:col-span-3"
            >
              <div className="absolute inset-px rounded-lg bg-gray-600/30 lg:rounded-tr-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <motion.div
                  variants={imageVariants}
                  className="h-80 bg-gray-800/50 p-4 overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Client message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                        <p className="text-sm">{t('chat-mockup-1')}</p>
                      </div>
                    </div>
                    
                    {/* Company response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm">{t('chat-mockup-2')}</p>
                      </div>
                    </div>

                    {/* Client message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%]">
                        <p className="text-sm">{t('chat-mockup-3')}</p>
                      </div>
                    </div>

                    {/* Company response */}
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm">{t('chat-mockup-4')}</p>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex justify-center">
                      <div className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {t('chat-status')}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={contentVariants}
                  className="p-10 pt-4"
                >
                  <h3 className="text-sm/4 font-semibold text-gray-300">{t('collaboration-title')}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">{t('collaboration-subtitle')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    {t('collaboration-desc')}
                  </p>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 lg:rounded-tr-[2rem]" />
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="relative lg:col-span-4"
            >
              <div className="absolute inset-px rounded-lg bg-gray-600/30 lg:rounded-bl-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <motion.div
                  variants={imageVariants}
                  className="h-80 bg-gray-800/50 p-4 overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Code editor-like interface */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-gray-400 text-sm">team-project.tsx</span>
                    </div>
                    
                    {/* Code snippets */}
                    <div className="font-mono text-sm">
                      <p className="text-blue-400">function InnovativeTeam() {'{'}</p>
                      <p className="pl-4 text-green-400">// Giovani sviluppatori al lavoro</p>
                      <p className="pl-4 text-purple-400">const technologies = ["React", "Node.js", "AI", "Cloud"];</p>
                      <p className="pl-4 text-orange-400">const passion = "Infinite";</p>
                      <p className="pl-4 text-yellow-400">const innovation = true;</p>
                      <p className="text-blue-400">{'}'}</p>
                    </div>

                    {/* Commit messages */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center text-sm text-gray-400">
                        <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center mr-2">✓</div>
                        <span>Feature: Implementata nuova UI dashboard</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-2">⟲</div>
                        <span>Update: Ottimizzazione performance</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={contentVariants}
                  className="p-10 pt-4"
                >
                  <h3 className="text-sm/4 font-semibold text-gray-300">{t('team-title')}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">{t('team-subtitle')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    {t('team-desc')}
                  </p>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 lg:rounded-bl-[2rem]" />
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="relative lg:col-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-gray-600/30 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <motion.div
                  variants={imageVariants}
                  className="h-80 bg-gray-800/50 backdrop-blur-sm"
                >
                  <ResponsiveContainer className="[&_.recharts-surface]:outline-none" width="100%">
                    <AreaChart accessibilityLayer data={chartData}>
                      <defs>
                        <linearGradient id={"colorUv" + index} x1="0" x2="0" y1="0" y2="1">
                          <stop
                            offset="5%"
                            stopColor={cn({
                              "hsl(var(--heroui-foreground))": color === "default",
                              "hsl(var(--heroui-success))": color === "success",
                              "hsl(var(--heroui-danger))": color === "danger",
                              "hsl(var(--heroui-warning))": color === "warning",
                              "hsl(var(--heroui-secondary))": color === "secondary",
                              "hsl(var(--heroui-primary))": color === "primary",
                            })}
                            stopOpacity={0.2}
                          />
                          <stop
                            offset="10%"
                            stopColor={cn({
                              "hsl(var(--heroui-foreground))": color === "default",
                              "hsl(var(--heroui-success))": color === "success",
                              "hsl(var(--heroui-danger))": color === "danger",
                              "hsl(var(--heroui-warning))": color === "warning",
                              "hsl(var(--heroui-secondary))": color === "secondary",
                              "hsl(var(--heroui-primary))": color === "primary",
                            })}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <YAxis domain={[Math.min(...chartData.map((d) => d.value)), "auto"]} hide={true} />
                      <Area
                        dataKey="value"
                        type="monotone"
                        fill={`url(#colorUv${index})`}
                        stroke={cn({
                          "hsl(var(--heroui-foreground))": color === "default",
                          "hsl(var(--heroui-success))": color === "success",
                          "hsl(var(--heroui-danger))": color === "danger",
                          "hsl(var(--heroui-warning))": color === "warning",
                          "hsl(var(--heroui-secondary))": color === "secondary",
                          "hsl(var(--heroui-primary))": color === "primary",
                        })}
                        strokeWidth={2}
                        fillOpacity={0.15}
                        animationDuration={1500}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div 
                  variants={contentVariants}
                  className="p-10 pt-4"
                >
                  <h3 className="text-sm/4 font-semibold text-gray-300">{t('growth-title')}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-white">{t('growth-subtitle')}</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    {t('growth-desc')}
                  </p>
                </motion.div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-lg shadow-black/30 ring-1 ring-white/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }
  