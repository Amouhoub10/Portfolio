import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Front-End',
    description: 'Building elegant and responsive user interfaces',
    accent: 'from-blue-500 to-cyan-400',
    span: 'md:col-span-2',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Redux / Toolkit', level: 85 },
      { name: 'Bootstrap', level: 60 },
      { name: 'Ajax / jQuery', level: 75 },
    ]
  },
  {
    title: 'Back-End',
    description: 'Architecting robust server-side solutions',
    accent: 'from-violet-500 to-purple-400',
    span: 'md:col-span-1',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'Express.js', level: 65 }
    ]
  },
  {
    title: 'Database',
    description: 'Designing efficient data structures',
    accent: 'from-emerald-500 to-teal-400',
    span: 'md:col-span-1',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'NoSQL', level: 75 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 85 }
    ]
  },
  {
    title: 'Tools & DevOps',
    description: 'Streamlining development workflows',
    accent: 'from-orange-500 to-amber-400',
    span: 'md:col-span-2',
    skills: [
      { name: 'Git/GitHub/GitLab', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Agile Methodologies', level: 85 },
      { name: 'POO', level: 85 },
      { name: 'Web Security', level: 75 },
      { name: 'Jira', level: 75 },
      { name: 'CI/CD & DevOps Basics', level: 65 },
      { name: 'Ajax / jQuery', level: 75 },
      { name: 'Bootstrap', level: 60 },
      { name: 'Office Suite', level: 80 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              My <span className="gradient-text glow-effect-strong inline-block">Technical Arsenal</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and high-performance web applications.
            </p>
          </motion.div>

          {/* Bento Grid — 3 equal columns on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`glass-effect p-7 rounded-3xl transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(45,212,191,0.2)] group relative overflow-hidden ${category.span}`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.accent} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{category.description}</p>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.06 }}
                      className="relative px-3 py-1.5 bg-background/50 border border-border/50 rounded-lg overflow-hidden group/skill cursor-default"
                    >
                      {/* progress underline */}
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary/40 group-hover/skill:bg-primary transition-colors duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                      <span className="text-xs font-medium text-foreground/90 relative z-10 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
