import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

const botResponses: Record<string, string> = {
    hello: "Hi there! 👋 I'm a portfolio assistant. You can ask me about Abderrahmane's skills, projects, education, or how to get in contact!",
    hi: "Hey! 👋 How can I help you today? Feel free to ask about skills, projects, or contact info!",
    skills: "Abderrahmane is skilled in:\n• Frontend: React, TypeScript, Next.js\n• Backend: Node.js, Python\n• UI/UX: Tailwind CSS, Framer Motion\n• Tools: Git, Vite, VS Code",
    projects: "Check out the Projects section for a full showcase! Notable work includes web apps built with React, TypeScript, and modern tooling.",
    education: "Scroll to the Education section to see Abderrahmane's academic background and qualifications in detail.",
    contact: "You can reach Abderrahmane via the Contact section at the bottom of the page! Fill out the form or connect through social links.",
    experience: "Abderrahmane has experience building modern web applications using React, TypeScript, and various other cutting-edge technologies.",
    hire: "Interested in working together? Head to the Contact section and send a message! Abderrahmane is open to exciting opportunities.",
    default: "Great question! 🤔 I can help you learn about skills, projects, education, or how to get in contact. What would you like to know?",
};

function getBotResponse(input: string): string {
    const lower = input.toLowerCase();
    for (const [key, value] of Object.entries(botResponses)) {
        if (key !== 'default' && lower.includes(key)) {
            return value;
        }
    }
    return botResponses.default;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Hi! 👋 I'm your portfolio assistant. Ask me anything about Abderrahmane — his skills, projects, or how to contact him!",
            isBot: true,
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = () => {
        const text = inputValue.trim();
        if (!text) return;

        const userMsg: Message = { id: Date.now(), text, isBot: false };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const response = getBotResponse(text);
            const botMsg: Message = { id: Date.now() + 1, text: response, isBot: true };
            setIsTyping(false);
            setMessages(prev => [...prev, botMsg]);
        }, 900 + Math.random() * 500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 9998,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '12px',
            }}
        >
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                        style={{
                            width: '340px',
                            height: '460px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'rgba(10, 10, 22, 0.85)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                padding: '16px 20px',
                                background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.15), rgba(56, 189, 248, 0.10))',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}
                        >
                            <div
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, hsl(158, 82%, 57%), hsl(188, 86%, 53%))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: '0 0 16px rgba(45,212,191,0.4)',
                                }}
                            >
                                <Bot size={18} color="#0a0a16" />
                            </div>
                            <div>
                                <p style={{ margin: 0, fontWeight: 600, fontSize: '14px', color: '#fff' }}>Portfolio Assistant</p>
                                <p style={{ margin: 0, fontSize: '11px', color: 'rgba(45,212,191,0.8)' }}>● Online</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    marginLeft: 'auto',
                                    background: 'rgba(255,255,255,0.08)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '6px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.6)',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: 'auto',
                                padding: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(255,255,255,0.1) transparent',
                            }}
                        >
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    style={{
                                        display: 'flex',
                                        justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
                                    }}
                                >
                                    <div
                                        style={{
                                            maxWidth: '80%',
                                            padding: '10px 14px',
                                            borderRadius: msg.isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                                            fontSize: '13px',
                                            lineHeight: '1.5',
                                            whiteSpace: 'pre-line',
                                            background: msg.isBot
                                                ? 'rgba(255,255,255,0.06)'
                                                : 'linear-gradient(135deg, hsl(158, 82%, 57%), hsl(188, 86%, 53%))',
                                            color: msg.isBot ? 'rgba(255,255,255,0.85)' : '#0a0a16',
                                            fontWeight: msg.isBot ? 400 : 500,
                                            border: msg.isBot ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                            boxShadow: msg.isBot
                                                ? 'none'
                                                : '0 4px 16px rgba(45,212,191,0.25)',
                                        }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div
                                        style={{
                                            padding: '10px 16px',
                                            borderRadius: '4px 16px 16px 16px',
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            display: 'flex',
                                            gap: '4px',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {[0, 1, 2].map(i => (
                                            <motion.span
                                                key={i}
                                                style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: 'hsl(158, 82%, 57%)',
                                                    display: 'block',
                                                }}
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{
                                                    duration: 0.6,
                                                    repeat: Infinity,
                                                    delay: i * 0.15,
                                                    ease: 'easeInOut',
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Prompts */}
                        <div
                            style={{
                                padding: '8px 12px',
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                                display: 'flex',
                                gap: '6px',
                                flexWrap: 'wrap',
                            }}
                        >
                            {['Skills', 'Projects', 'Contact', 'Hire'].map(prompt => (
                                <button
                                    key={prompt}
                                    onClick={() => {
                                        setInputValue(prompt);
                                        setTimeout(() => sendMessage(), 50);
                                    }}
                                    style={{
                                        padding: '4px 10px',
                                        borderRadius: '20px',
                                        fontSize: '11px',
                                        background: 'rgba(45,212,191,0.08)',
                                        border: '1px solid rgba(45,212,191,0.2)',
                                        color: 'hsl(158, 82%, 57%)',
                                        cursor: 'pointer',
                                        fontWeight: 500,
                                        transition: 'background 0.2s',
                                    }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(45,212,191,0.16)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(45,212,191,0.08)')}
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div
                            style={{
                                padding: '12px 16px',
                                borderTop: '1px solid rgba(255,255,255,0.06)',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..."
                                style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    padding: '10px 14px',
                                    fontSize: '13px',
                                    color: '#fff',
                                    outline: 'none',
                                    fontFamily: 'inherit',
                                    transition: 'border-color 0.2s',
                                }}
                                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(45,212,191,0.4)')}
                                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                            />
                            <button
                                onClick={sendMessage}
                                style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, hsl(158, 82%, 57%), hsl(188, 86%, 53%))',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: '#0a0a16',
                                    boxShadow: '0 4px 12px rgba(45,212,191,0.3)',
                                    transition: 'opacity 0.2s, transform 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.opacity = '0.85';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                aria-label="Send message"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(prev => !prev)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, hsl(158, 82%, 57%), hsl(188, 86%, 53%))',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a0a16',
                    boxShadow: '0 8px 24px rgba(45,212,191,0.4), 0 0 0 4px rgba(45,212,191,0.1)',
                    flexShrink: 0,
                }}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'flex' }}
                        >
                            <X size={22} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'flex' }}
                        >
                            <MessageCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ChatBot;
