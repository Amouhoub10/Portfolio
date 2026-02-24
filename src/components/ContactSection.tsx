import { Mail, Linkedin, Phone, MapPin, Send, Zap, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion, Variants } from 'framer-motion';
import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdeayman05@gmail.com',
    href: 'mailto:mouhoubabderrahmane2005@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/AbderrahmaneMouhoub',
    href: 'https://www.linkedin.com/in/abderrahmane-mouhoub-a601912bb/',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+212606-553-035',
    href: 'tel:+212606553035',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tanger, Morocco',
    href: '#',
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_jdsj57c',
        'template_bqv0k0s',
        formRef.current,
        'u161_xyXgJGffKHSi'
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            description: "Thank you for reaching out. I will get back to you soon.",
          });
          formRef.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message.", {
            description: "Please try again later or contact me directly via email.",
          });
          console.error('EmailJS Error:', error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 glass-effect rounded-full px-5 py-2 mb-6 shadow-glow">
              <Zap className="text-primary animate-pulse w-4 h-4" />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Get In <span className="gradient-text glow-effect-strong inline-block">Touch</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm currently open for new internship opportunities. Whether you have a question
              or just want to say hi, I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Contact Info (Left Side) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-2 space-y-6"
            >
              <h3 className="font-display text-2xl font-bold mb-8 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <motion.a
                    variants={itemVariants}
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 glass-effect rounded-2xl border border-primary/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <link.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">{link.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
              className="lg:col-span-3"
            >
              <div className="glass-effect rounded-3xl p-8 md:p-10 border border-primary/20 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                <h3 className="font-display text-2xl font-bold mb-8 text-foreground relative z-10">
                  Send Me a Message
                </h3>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 glass-effect hover:border-primary/30"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 glass-effect hover:border-primary/30"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground/80 pl-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Your subject"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 glass-effect hover:border-primary/30"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50 glass-effect hover:border-primary/30 resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-14 shadow-glow group overflow-hidden relative">
                    <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-base tracking-wide">
                      {isSubmitting ? (
                        <>
                          Sending...
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
