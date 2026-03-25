import {
    Rocket, Users, BrainCircuit, TrendingDown,
    Briefcase, Terminal, Smartphone, CloudCog, Layers, Cpu,
    Truck, HeartPulse, ShoppingCart, Plane, Banknote, MonitorPlay, GraduationCap, Home, Car, Droplet, Utensils, Trophy,
    Search, Layout, Code, ShieldCheck, Globe, Zap
} from 'lucide-react';

export const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Tech', href: '#stack' },
    { label: 'Industries', href: '#industries' }
];

export const stats = [
    {
        Icon: Rocket, iconColor: '#3b82f6', iconBg: 'rgba(59, 130, 246, 0.15)',
        target: 40, suffix: '%', suffixColor: '#3b82f6',
        title: 'Faster Deployment',
        desc: 'Ship production-ready features\n in weeks, not months'
    },
    {
        Icon: Users, iconColor: '#a855f7', iconBg: 'rgba(168, 85, 247, 0.15)',
        target: 10, suffix: 'x', suffixColor: '#a855f7',
        title: 'Traffic Capacity',
        desc: 'Handle scale without expensive\n rewrites or downtime'
    },
    {
        Icon: BrainCircuit, iconColor: '#e11d48', iconBg: 'rgba(225, 29, 72, 0.15)',
        target: 3, suffix: 'x', suffixColor: '#e11d48',
        title: 'Faster AI Integration',
        desc: 'Deploy AI features on your existing\n stack without starting over'
    },
    {
        Icon: TrendingDown, iconColor: '#10b981', iconBg: 'rgba(16, 185, 129, 0.15)',
        target: 30, suffix: '%', suffixColor: '#10b981',
        title: 'Cost Reduction',
        desc: 'Optimized architecture means lower\n hosting & maintenance costs'
    },
];

export const services = [
    { Icon: Briefcase, title: 'IT Consulting', desc: 'We guide businesses with expert IT consulting to plan, build, and scale software, mobile apps, and AI solutions efficiently.', features: ['Strategic Roadmap', 'Tech Stack Audit', 'Architecture Design'] },
    { Icon: BrainCircuit, title: 'AI Development', desc: 'We help develop full-cycle AI solutions, build models like machine learning, NLPs, integrate AI into existing systems, and automate workflows.', features: ['LLM Orchestration', 'Data Pipelines', 'Predictive Modeling'] },
    { Icon: Terminal, title: 'Software Development', desc: 'We develop custom software solutions that solve operational challenges, improve efficiency, and align perfectly with your long-term business goals.', features: ['Scalable Backend', 'Performant APIs', 'Legacy Migration'] },
    { Icon: Rocket, title: 'MVP Development', desc: 'Our agile MVP development service helps you test a product idea in the real market to validate, gather feedback, refine, and drive value with minimum resources.', features: ['6-Week Launch', 'Core Feature Focus', 'Lean Architecture'] },
    { Icon: Cpu, title: 'IoT App & Software', desc: 'We build innovative IoT solutions powered by artificial intelligence that connect devices, collect data, and help businesses make faster, better decisions.', features: ['Real-time Monitoring', 'Edge Computing', 'Hardware Sync'] },
    { Icon: CloudCog, title: 'Cloud Solutions', desc: 'We provide end-to-end cloud consulting, development, and migration services that improve scalability, reliability, and data accessibility.', features: ['AWS/GCP/Azure', 'Serverless Ops', 'CI/CD Automation'] },
    { Icon: Layers, title: 'Product Engineering', desc: 'We provide end-to-end design, development, testing, and maintenance of your software product, backed by our product engineering expertise.', features: ['Lifecycle Mgmt', 'Full-Stack Eng', 'QA Automation'] },
    { Icon: Users, title: 'Dedicated Teams', desc: 'Our dedicated developers act as an extension of your in-house team, offering flexibility, expertise, and complete project ownership.', features: ['On-Demand Talent', 'Seamless Integration', 'Agile Velocity'] },
    { Icon: Smartphone, title: 'App Development', desc: 'We build award-winning custom mobile apps that enhance business efficiency, improve user customer experience & loyalty, and give you a competitive edge.', features: ['Native iOS/Android', 'Cross-Platform', 'UX/UI Design'] },
];

export const cases = [
    {
        accent: '#6366f1', industry: 'HealthTech', industryStyle: { color: '#4f46e5', background: 'rgba(99,102,241,.1)' },
        img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
        title: 'AI Diagnostic Assistant for Clinic Chain',
        problem: 'Manual patient intake was slow across 40+ clinics',
        solution: 'AI triage assistant that classifies symptoms and routes patients',
        result: '62% faster intake',
        stack: ['OpenAI', 'Next.js', 'AWS', 'PostgreSQL'],
    },
    {
        accent: '#f59e0b', industry: 'FinTech', industryStyle: { color: '#d97706', background: 'rgba(245,158,11,.1)' },
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        title: 'Real-Time Fraud Detection Engine',
        problem: 'Legacy system missed 34% of fraud patterns, $2M/year loss',
        solution: 'ML pipeline analyzing 200+ signals in real-time',
        result: 'Fraud ↓78%',
        stack: ['Python', 'TensorFlow', 'Node.js', 'Redis'],
    },
    {
        accent: '#10b981', industry: 'E-commerce', industryStyle: { color: '#059669', background: 'rgba(16,185,129,.1)' },
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
        title: 'Personalization Engine for D2C Brand',
        problem: 'Generic recommendations led to 1.4% conversion rate',
        solution: 'AI recommendation engine trained on behavioral data',
        result: 'Conversion 4.1%',
        stack: ['LangChain', 'React', 'Django', 'AWS'],
    },
];

export const processSteps = [
    { Icon: Search, title: 'Discovery & Analysis', desc: 'Understand business goals and technical needs to create a clear plan for development.' },
    { Icon: Layout, title: 'Architecture Design', desc: 'Build a strong and scalable system design that fits your business needs.' },
    { Icon: Code, title: 'Development Phase', desc: 'Use modern tools and agile methods to build reliable, high-quality software faster.' },
    { Icon: ShieldCheck, title: 'Testing & QA', desc: 'Test the software in different environments to ensure top performance and stability.' },
    { Icon: Globe, title: 'Deployment & Integration', desc: 'Launch smoothly within existing systems with minimal business disruption.' },
    { Icon: Zap, title: 'Continuous Improvement', desc: 'Keep improving and updating the software as your business and technology grow.' },
];

export const techStack = [
    { Icon: BrainCircuit, category: 'AI / ML', items: ['OpenAI', 'LangChain', 'TensorFlow', 'HuggingFace', 'PyTorch'] },
    { Icon: Layout, category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer'] },
    { Icon: Smartphone, category: 'Mobile', items: ['iOS', 'Android', 'React Native', 'Flutter'] },
    { Icon: CloudCog, category: 'Core Backend', items: ['Node.js', 'Python', 'Django', 'Go', 'FastAPI'] },
];

export const industries = [
    { Icon: Truck, name: 'Logistics', features: ['Fleet tracking Software', 'Load Planning Software', 'Warehouse Management System'] },
    { Icon: HeartPulse, name: 'Healthcare', features: ['Telemedicine App', 'EHR, EMR, Patient Portal', 'Medical Billing Software'] },
    { Icon: ShoppingCart, name: 'eCommerce', features: ['B2B, B2C, C2C, & PoS Marketplaces', 'Order Management software (OMS)', 'Inventory Management Software (IMS)'] },
    { Icon: Plane, name: 'Travel', features: ['Booking Engine Software', 'Travel Itinerary App', 'Loyalty Management Software'] },
    { Icon: Banknote, name: 'Fintech', features: ['Digital Wallet Platforms', 'KYC AML Software', 'P2P Payment Solutions'] },
    { Icon: MonitorPlay, name: 'Entertainment', features: ['OTT Streaming Apps', 'Music Streaming Apps', 'Content Management Solutions'] },
    { Icon: GraduationCap, name: 'Education', features: ['School Management System', 'LMS Software Development', 'Online Assessment Platform'] },
    { Icon: Home, name: 'Real Estate', features: ['Property Management Software', 'Real Estate CRM System', 'Brokers & Agents Tools'] },
    { Icon: Car, name: 'Automotive', features: ['Telematics Solutions', 'Dealership Management', 'EV Charging Software'] },
    { Icon: Droplet, name: 'Oil & Gas', features: ['SCADA Software Tools', 'Asset Monitoring Systems', 'HSE Compliance Tech'] },
    { Icon: Utensils, name: 'Restaurant', features: ['POS Integration Services', 'Reservation System Development', 'Cloud Kitchen Software'] },
    { Icon: Trophy, name: 'Sports', features: ['Live Score Platforms', 'Performance Analytics', 'Fantasy Sports App'] },
];

export const testimonials = [
    { quote: "DeetyaEnterprise delivered our AI model in 5 weeks. We went from prototype to production and closed a $3M enterprise deal within months.", name: "Arjun Mehta", role: "CTO", company: "MedPulse", image: "https://i.pravatar.cc/150?u=arjun" },
    { quote: "Their team doesn't just write code — they think like founders. They challenged our assumptions and built something far better than we imagined.", name: "Sarah Collins", role: "CEO", company: "FinScale", image: "https://i.pravatar.cc/150?u=sarah" },
];
