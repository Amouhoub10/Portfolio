import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
}

interface GooeyNavProps {
    items: NavItem[];
    particleCount?: number;
    particleDistances?: number[];
    particleR?: number;
    initialActiveIndex?: number;
    animationTime?: number;
    timeVariance?: number;
    colors?: number[];
}

const GooeyNav: React.FC<GooeyNavProps> = ({
    items,
    initialActiveIndex = 0,
}) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // IntersectionObserver for accurate active section detection
        const sectionIds = items.map(item => item.href.substring(1));

        const sectionElements = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        if (sectionElements.length === 0) return;

        const visibilityMap = new Map<string, number>();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    visibilityMap.set(entry.target.id, entry.intersectionRatio);
                });

                // Find the section with the highest intersection ratio
                let maxRatio = 0;
                let activeSectionId = sectionIds[0];

                sectionIds.forEach(id => {
                    const ratio = visibilityMap.get(id) ?? 0;
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        activeSectionId = id;
                    }
                });

                const idx = sectionIds.indexOf(activeSectionId);
                if (idx !== -1) {
                    setActiveIndex(idx);
                }
            },
            {
                root: null,
                rootMargin: '-10% 0px -60% 0px',
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
            }
        );

        sectionElements.forEach(el => observerRef.current!.observe(el));

        return () => {
            observerRef.current?.disconnect();
        };
    }, [items]);

    const handleNavClick = useCallback((index: number, href: string) => {
        setActiveIndex(index);
        setIsMobileMenuOpen(false);

        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            if (targetId === 'home' && !document.getElementById('home')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }, []);

    return (
        <>
            {/* SVG Filter for the Gooey Effect */}
            <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }}>
                <defs>
                    <filter id="gooey-nav">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {/* Centered Desktop Nav — always fixed at top center */}
            <nav
                className="hidden md:block"
                style={{
                    position: 'fixed',
                    top: '24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 9999,
                    width: 'max-content',
                }}
            >
                <div
                    className="relative flex items-center justify-center p-2 rounded-full border border-white/10 shadow-2xl"
                    style={{
                        filter: 'url(#gooey-nav)',
                        background: 'rgba(10, 10, 20, 0.65)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
                    }}
                >
                    {items.map((item, index) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavClick(index, item.href)}
                            className="relative px-6 py-2.5 text-sm font-medium transition-colors z-10"
                        >
                            <span
                                className={`relative z-20 font-semibold tracking-wide transition-colors duration-300 ${activeIndex === index
                                        ? 'text-primary-foreground'
                                        : 'text-white/60 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </span>

                            {activeIndex === index && (
                                <motion.div
                                    layoutId="goo-bubble"
                                    className="absolute inset-0 bg-primary rounded-full z-0"
                                    style={{
                                        boxShadow: '0 0 20px rgba(45, 212, 191, 0.5)',
                                    }}
                                    transition={{ type: 'spring', bounce: 0.35, duration: 0.7 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Nav Header — always fixed */}
            <nav
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    background: 'rgba(8, 8, 18, 0.80)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
                className="md:hidden"
            >
                <div className="px-6 h-16 flex items-center justify-between">
                    <span className="font-display font-bold text-lg gradient-text">Portfolio</span>
                    <button
                        className="text-foreground p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        className="py-4 border-t border-white/10"
                        style={{
                            background: 'rgba(8, 8, 18, 0.95)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        <div className="flex flex-col gap-2 px-6">
                            {items.map((item, index) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(index, item.href)}
                                    className={`px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeIndex === index
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-white/60 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default GooeyNav;
