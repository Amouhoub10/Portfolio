import { ExternalLink, Github, Database, Globe, Code, Star, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

const projects = [
  {
    title: 'ScanEat',
    description: 'ScanEat is a restaurant system where each table has a unique QR code that lets customers order directly from their phone. Features real-time order management, digital menus, and seamless payment integration.',
    technologies: ['React', 'Laravel', 'MySQL', 'Stripe API'],
    icon: Database,
    liveUrl: '#',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
    featured: true,
    metrics: { stars: 42, views: 1200 },
    status: 'In Progress'
  },
  {
    title: 'AlloVirtuel',
    description: 'AlloVirtuel is a digital agency that helps local businesses build websites and establish a strong online presence. Complete CMS solution with SEO optimization, analytics dashboard, and client management system.',
    technologies: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    icon: Code,
    liveUrl: '#',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
    featured: false,
    metrics: { stars: 28, views: 850 },
    status: 'Live'
  },
  {
    title: 'Tanger Explorer',
    description: 'A tourism website showcasing the beautiful city of Tanger. Features interactive galleries, location guides, cultural information, weather integration, and multilingual support for tourists.',
    technologies: ['React', 'Laravel', 'MySQL', 'Google Maps API'],
    icon: Globe,
    liveUrl: '#',
    githubUrl: 'https://github.com',
    category: 'Full Stack',
    featured: false,
    metrics: { stars: 35, views: 950 },
    status: 'Done'
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12 }
  }
};

const ProjectsSection = () => {
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-5 py-2 mb-6 shadow-glow">
              <Star className="text-primary animate-pulse w-4 h-4" />
              <span className="text-sm font-medium text-primary">Selected Works</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Featured <span className="gradient-text glow-effect-strong inline-block">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Showcasing scalable architectures, clean codebases, and engaging user experiences through practical applications.
            </p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group glass-effect rounded-3xl border border-border/50 overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(45,212,191,0.3)] bg-gradient-to-br from-card to-background"
              >
                {/* Visual Header / Banner */}
                <div className="relative h-48 bg-muted/20 flex items-center justify-center overflow-hidden border-b border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 glass-effect rounded-full px-3 py-1.5 z-20 backdrop-blur-md">
                    <span className={`text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 ${project.status === 'Live' ? 'text-emerald-400' :
                      project.status === 'Done' ? 'text-blue-400' : 'text-amber-400'
                      }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary/10 border border-primary/20 text-primary rounded-full px-3 py-1.5 z-20 flex items-center gap-1.5 shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                      <Star size={12} className="fill-primary" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">Featured</span>
                    </div>
                  )}

                  {/* Icon Presentation */}
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="p-6 rounded-2xl bg-card border border-primary/10 shadow-xl group-hover:border-primary/30 transition-colors duration-300">
                      <project.icon className="text-primary/70 group-hover:text-primary transition-colors" size={48} />
                    </div>
                  </div>

                  {/* Decorational Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="currentColor" /></pattern></defs>
                      <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs font-medium text-muted-foreground border-border bg-transparent">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="font-display font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-semibold tracking-wide bg-primary/5 text-primary/80 rounded-md border border-primary/10 group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                    <Button variant="hero" size="sm" className="w-full flex-1 rounded-xl h-10 shadow-glow group/btn overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                        check project  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-20"
          >
            <div className="glass-effect rounded-3xl p-10 max-w-2xl mx-auto border border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

              <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-8 shadow-[0_0_30px_-5px_rgba(45,212,191,0.4)] hover:shadow-[0_0_40px_-5px_rgba(45,212,191,0.6)] transition-all"
                onClick={() => handleButtonClick('#contact')}
              >
                <div className="flex items-center gap-2 font-semibold">
                  Let's Connect <ExternalLink size={16} />
                </div>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;