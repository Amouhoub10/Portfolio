import {
  Code2,
  Lightbulb,
  Target,
  Briefcase,
  User,
  Award,
  TrendingUp,
  Heart,
  Sparkles,
  Zap,
  BookOpen,
  Coffee,
  Globe,
  ChevronRight,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Skills',
    description: 'Proficient in React, JavaScript, MySQL, HTML & CSS, PHP, Laravel and modern frameworks',
    color: 'from-blue-500 to-cyan-500',
    stats: '5+ Technologies'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Analytical approach to building efficient, scalable solutions with clean architecture',
    color: 'from-yellow-500 to-orange-500',
    stats: 'bunch of projects'
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on delivering quality, functional applications with attention to detail',
    color: 'from-primary to-emerald-500',
    stats: '100% Completion'
  },
  {
    icon: Briefcase,
    title: 'Seeking Internship',
    description: 'Ready to contribute and grow in a professional environment with passion and dedication',
    color: 'from-purple-500 to-pink-500',
    stats: 'Available Now'
  },
];

const achievements = [
  { icon: Award, title: 'Web Full Stack', desc: 'Specialized Digital Development Technician – Full-Stack Web' },
  { icon: TrendingUp, title: 'Multiple Projects Completed', desc: 'Delivered functional applications and websites' },
  { icon: BookOpen, title: 'Continuous Learner', desc: 'Always exploring new technologies and frameworks' },
  { icon: Globe, title: 'Team-Oriented Developer', desc: 'Enjoys working in collaborative environments' }
];

const skills = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Team Collaboration', level: 85 },
  { name: 'Project Management', level: 80 },
  { name: 'Creativity', level: 95 }
];

const timeline = [
  {
    year: '2023',
    title: 'Started Web Development Journey',
    desc: 'Began learning HTML, CSS, and JavaScript'
  },
  {
    year: '2024',
    title: 'Deepened Development Skills',
    desc: 'Expanded knowledge in Python and PHP, learned Git version control, and gained basic understanding of web security'
  },
  {
    year: '2025',
    title: 'Advanced Full-Stack & DevOps Skills',
    desc: 'Worked with React, SQL and NoSQL databases, Laravel, Jira, SonarQube, and DevOps tools'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  }
};

const AboutSection = () => {
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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-5 py-2 mb-6 shadow-glow">
              <User className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get to Know <span className="gradient-text glow-effect-strong inline-block">Me Better</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Passionate developer crafting digital experiences with modern technologies and creative problem-solving.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Enhanced Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect p-10 rounded-3xl relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20 shadow-glow">
                    <Sparkles className="text-primary" size={26} />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-foreground">
                    My Story
                  </h3>
                </div>

                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    I'm <span className="font-semibold text-foreground">Abderrahmane Mouhoub</span>, a passionate
                    <span className="text-primary font-semibold"> Web Full Stack Developer</span> based in Tanger, Morocco,
                    with a burning desire to create digital experiences that make a difference.
                  </p>

                  <div className="grid grid-cols-2 gap-6 my-8">
                    <div className="glass-effect p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform border border-primary/10">
                      <div className="text-3xl font-bold gradient-text mb-2">+10</div>
                      <div className="text-sm font-medium">Languages & Tools</div>
                    </div>
                    <div className="glass-effect p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform border border-primary/10">
                      <div className="text-3xl font-bold gradient-text mb-2">Multiple</div>
                      <div className="text-sm font-medium">Completed Projects</div>
                    </div>
                  </div>

                  <p className="leading-relaxed">
                    My journey began with curiosity about how websites work, evolving into a deep passion
                    for clean, efficient code. Through dedicated training, I've mastered both front-end and
                    back-end technologies, enabling me to build complete, scalable applications.
                  </p>

                  <p className="leading-relaxed">
                    Currently pursuing professional opportunities, I'm eager to apply my skills in a dynamic
                    environment where I can contribute meaningfully while continuing to grow and learn.
                  </p>
                </div>
              </div>

              {/* Location & Status */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="glass-effect p-6 text-center group hover:-translate-y-2 transition-transform duration-300 border-primary/10">
                  <MapPin className="text-primary mx-auto mb-3" size={28} />
                  <div className="font-bold text-foreground text-lg">Tanger</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mt-1">Based in</div>
                </Card>

                <Card className="glass-effect p-6 text-center group hover:-translate-y-2 transition-transform duration-300 border-primary/10">
                  <Briefcase className="text-primary mx-auto mb-3" size={28} />
                  <div className="font-bold text-foreground text-lg">Available</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mt-1">For internship</div>
                </Card>
              </div>
            </motion.div>

            {/* Enhanced Highlights Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-foreground">
                What I Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item) => (
                  <motion.div
                    variants={itemVariants}
                    key={item.title}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-effect p-8 rounded-3xl group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className="text-white" size={26} />
                    </div>

                    <Badge variant="outline" className="mb-4 text-xs font-semibold bg-background/50 border-border">
                      {item.stats}
                    </Badge>

                    <h4 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-24"
          >
            <h3 className="font-display text-4xl font-bold text-center mb-12 text-foreground">
              Achievements & <span className="gradient-text glow-effect-strong">Milestones</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <motion.div variants={itemVariants} key={achievement.title}>
                  <Card className="glass-effect p-8 text-center group hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center justify-center border-primary/10 hover:border-primary/30 hover:shadow-[0_15px_30px_-15px_rgba(45,212,191,0.3)]">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-500">
                      <achievement.icon className="text-primary" size={32} />
                    </div>
                    <h4 className="font-bold text-foreground mb-3 text-lg">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Soft Skills Progress */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-4xl font-bold mb-10 text-foreground">
                Soft Skills & <span className="gradient-text glow-effect-strong">Mindset</span>
              </h3>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <Card
                    key={skill.name}
                    className="glass-effect p-6 border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-foreground text-lg">{skill.name}</h4>
                      <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{skill.level}%</span>
                    </div>

                    <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-display text-4xl font-bold mb-10 text-foreground">
                My <span className="gradient-text glow-effect-strong">Journey</span>
              </h3>

              <div className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-transparent"></div>

                {timeline.map((item, index) => (
                  <motion.div
                    variants={itemVariants}
                    key={item.title}
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-start`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                      <Card className="glass-effect p-6 hover:-translate-y-2 transition-transform duration-300 border-primary/10 hover:border-primary/30 group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                            <Calendar size={18} />
                          </div>
                          <Badge variant="outline" className="text-xs font-bold bg-background/50 border-primary/20 text-primary">{item.year}</Badge>
                        </div>
                        <h4 className="font-bold text-foreground mb-2 text-xl group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="glass-effect p-10 max-w-3xl mx-auto rounded-3xl border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

              <div className="flex items-center justify-center gap-4 mb-8">
                <Zap className="text-primary animate-pulse w-8 h-8" />
                <h3 className="font-display text-3xl font-bold text-foreground tracking-tight">
                  Ready to Work Together?
                </h3>
                <Zap className="text-primary animate-pulse w-8 h-8" />
              </div>

              <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-xl mx-auto">
                I'm excited to bring fresh perspectives and dedication to your team.
                Let's create something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-8 shadow-glow" onClick={() => handleButtonClick('#projects')}>
                  <div className="flex items-center gap-2 font-semibold">
                    <Star size={18} />
                    <span>See My Projects</span>
                  </div>
                </Button>

                <Button variant="outline" size="lg" className="glass-effect rounded-full h-14 px-8 border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors" onClick={() => handleButtonClick('#contact')}>
                  <div className="flex items-center gap-2 font-semibold">
                    <Heart size={18} />
                    <span>Get In Touch</span>
                    <ChevronRight size={18} />
                  </div>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;