import { ArrowDown, Phone, Linkedin, Mail, Sparkles, Code, Zap, Star, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Grainient from './Grainient';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Web Full Stack Developer',
    'React Developer',
    'Laravel Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'SQL Developer',
    'HTML Developer',
    'CSS Developer',
    'Bootstrap Developer',
    'PHP Developer',
    'Python Developer',
    'Problem Solver',
    'Goal Oriented',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = useCallback((href: string) => {
    if (href.startsWith('#')) {
      requestAnimationFrame(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grainient WebGL Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Grainient
          color1="#a0ff9e"
          color2="#000000"
          color3="#282a28"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        {/* Dark overlay so text remains readable */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header with Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 glass-effect rounded-full px-5 py-2 mb-6 mt-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for an internship</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="text-primary font-medium text-lg tracking-wide">Hello, I'm</p>
            </div>
          </motion.div>

          {/* 3D Name Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 relative"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-foreground drop-shadow-2xl">Abderrahmane</span>
              <br />
              <span className="gradient-text relative inline-block mt-2 glow-effect-strong">
                Mouhoub
              </span>
            </h1>
          </motion.div>

          {/* Dynamic Role Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-8"
          >
            <div className="h-16 flex items-center justify-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium relative">
                <span className="relative inline-block px-4">
                  {roles[currentRole]}
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></span>
                </span>
              </h2>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Building the future through <span className="text-foreground font-semibold">elegant code</span> and <span className="text-foreground font-semibold">user-centric design</span>. Specializing in modern web applications that scale.
              </p>

              {/* Skill Highlights */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['React', 'PHP', 'HTML & CSS', 'Laravel'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-effect px-5 py-2.5 rounded-full text-sm font-medium text-foreground/90 transition-colors hover:text-primary flex items-center gap-2"
                  >
                    <Code size={16} className="text-primary" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)] transition-all hover:shadow-[0_0_60px_-15px_rgba(45,212,191,0.6)] rounded-full text-base h-14"
                onClick={() => handleButtonClick('#projects')}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  View Projects
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass-effect border-primary/30 hover:bg-primary/10 hover:text-primary min-w-[200px] rounded-full text-base h-14 transition-all"
                onClick={() => handleButtonClick('#contact')}
              >
                <div className="flex items-center gap-2 font-semibold">
                  <Mail size={18} />
                  Let's Talk
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                title={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;