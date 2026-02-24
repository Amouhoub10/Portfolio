import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Education Card */}
          <div className="card-gradient rounded-2xl border border-border p-8 md:p-10 relative overflow-hidden">
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={32} />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Specialized Technician in Digital Development
              </h3>
              
              <p className="text-xl text-primary font-medium mb-6">
                Web Full Stack Specialization
              </p>

              {/* Details */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>2023 - Present</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} />
                  <span>CMC TTA</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive professional training program focused on modern web development 
                technologies and practices. The curriculum covers front-end and back-end development, 
                database management, version control, and software development methodologies. 
                Practical project-based learning with real-world application development.
              </p>

              {/* Key Learnings */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-display font-semibold text-foreground mb-4">Key Areas of Study</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Web Development',
                    'Database Design',
                    'OPP Concepts',
                    'Front-end Frameworks',
                    'Back-end Frameworks',
                    'HTML & CSS & Bootstrap',
                    'MySQL & NoSQL',
                    'PHP Programming',
                    'JavaScript',
                    'Project Management',
                    'Version Control (Git)',
                    'DevOps Basics',
                    'Agile Methodologies',
                    'Project management tools (Jira, Trello)',
                    'Problem-Solving Skills',
                    'Team Collaboration',
                    'Effective Communication',
                    'Time Management',
                    'Critical Thinking',
                    'Adaptability',
                    'Continuous Learning',
                    'Attention to Detail',
                    'Creativity',
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-muted rounded-lg text-sm text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
