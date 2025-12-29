import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    id: "fintech-dashboard",
    title: "FinanceFlow",
    category: "Fintech",
    year: "2024",
    client: "FinanceFlow Inc.",
    duration: "6 months",
    description:
      "A comprehensive financial dashboard for modern banking with real-time analytics, transaction tracking, and intelligent insights.",
    challenge:
      "FinanceFlow needed a modern, intuitive platform to help users manage their finances across multiple accounts while providing real-time insights and predictions.",
    solution:
      "We built a responsive web application using Next.js and TypeScript, with real-time data synchronization, interactive charts, and AI-powered spending predictions.",
    results: [
      "40% increase in user engagement",
      "25% reduction in customer support tickets",
      "4.8/5 average user satisfaction rating",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
    color: "#E0D9FF",
  },
  {
    id: "health-app",
    title: "VitalTrack",
    category: "Healthcare",
    year: "2024",
    client: "MediCare Solutions",
    duration: "8 months",
    description:
      "Patient monitoring and health tracking application for clinics with real-time vitals monitoring and appointment management.",
    challenge:
      "Healthcare providers needed a HIPAA-compliant solution to monitor patients remotely while maintaining seamless communication between care teams.",
    solution:
      "We developed a secure, real-time monitoring platform with encrypted data transmission, role-based access control, and integration with popular medical devices.",
    results: [
      "30% improvement in patient outcomes",
      "50% reduction in hospital readmissions",
      "99.9% uptime achieved",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "HL7 FHIR", "Azure"],
    color: "#D6F5F0",
  },
  {
    id: "ecommerce-platform",
    title: "ShopNest",
    category: "E-commerce",
    year: "2024",
    client: "ShopNest Retail",
    duration: "5 months",
    description:
      "Next-gen shopping experience with AI-powered recommendations, seamless checkout, and personalized user journeys.",
    challenge:
      "Traditional e-commerce platforms weren't providing the personalized experience modern shoppers expect, leading to high cart abandonment rates.",
    solution:
      "We created an AI-driven shopping platform with personalized recommendations, one-click checkout, and a mobile-first design that adapts to user preferences.",
    results: [
      "35% increase in conversion rate",
      "45% reduction in cart abandonment",
      "2x increase in average order value",
    ],
    technologies: ["Next.js", "Stripe", "TensorFlow", "Elasticsearch", "GCP"],
    color: "#FFF4D6",
  },
  {
    id: "saas-analytics",
    title: "DataPulse",
    category: "SaaS",
    year: "2023",
    client: "DataPulse Analytics",
    duration: "7 months",
    description:
      "Business intelligence platform with customizable dashboards, real-time reporting, and predictive analytics.",
    challenge:
      "Businesses struggled to extract actionable insights from their data, with existing tools being too complex or too limited.",
    solution:
      "We built an intuitive analytics platform with drag-and-drop dashboard creation, natural language querying, and automated insight generation.",
    results: [
      "60% faster report generation",
      "3x increase in data-driven decisions",
      "90% user retention rate",
    ],
    technologies: ["React", "Python", "Apache Spark", "Kubernetes", "AWS"],
    color: "#E0D9FF",
  },
  {
    id: "ai-assistant",
    title: "NeuralChat",
    category: "AI/ML",
    year: "2023",
    client: "TechCorp International",
    duration: "10 months",
    description:
      "Conversational AI assistant for enterprise customer support with multi-language support and context awareness.",
    challenge:
      "Enterprise customers needed 24/7 support across multiple channels, but traditional chatbots provided poor user experiences.",
    solution:
      "We developed an advanced AI assistant using large language models with custom fine-tuning for enterprise knowledge bases and seamless human handoff.",
    results: [
      "70% reduction in support costs",
      "95% customer satisfaction score",
      "80% of queries resolved without human intervention",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "FastAPI", "Redis"],
    color: "#D6F5F0",
  },
  {
    id: "health-platform",
    title: "MediConnect",
    category: "Healthcare",
    year: "2023",
    client: "MediConnect Health",
    duration: "9 months",
    description:
      "Telemedicine platform connecting patients with doctors remotely with video consultations and prescription management.",
    challenge:
      "Access to healthcare was limited in rural areas, and patients needed a secure, easy-to-use platform for remote consultations.",
    solution:
      "We built a HIPAA-compliant telemedicine platform with HD video calls, e-prescriptions, and integration with pharmacy networks.",
    results: [
      "50,000+ consultations in first year",
      "98% patient satisfaction rate",
      "40% reduction in no-show appointments",
    ],
    technologies: ["React", "WebRTC", "Node.js", "PostgreSQL", "Twilio"],
    color: "#FFF4D6",
  },
  {
    id: "crypto-wallet",
    title: "CryptoVault",
    category: "Fintech",
    year: "2023",
    client: "CryptoVault Labs",
    duration: "6 months",
    description:
      "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features.",
    challenge:
      "Cryptocurrency users needed a secure, user-friendly wallet that supported multiple blockchains without compromising on security.",
    solution:
      "We developed a non-custodial wallet with hardware security module integration, biometric authentication, and support for 20+ blockchain networks.",
    results: [
      "$100M+ in assets secured",
      "Zero security breaches",
      "4.9/5 App Store rating",
    ],
    technologies: ["React Native", "Rust", "Solidity", "Web3.js", "HSM"],
    color: "#E0D9FF",
  },
  {
    id: "marketplace",
    title: "ArtisanHub",
    category: "E-commerce",
    year: "2023",
    client: "ArtisanHub Global",
    duration: "4 months",
    description:
      "Marketplace connecting artisans with global buyers, featuring verified sellers and secure payments.",
    challenge:
      "Artisans in developing countries had no easy way to reach global markets, while buyers struggled to find authentic handmade products.",
    solution:
      "We created a marketplace with artisan verification, story-telling features, and a logistics network optimized for fragile handmade goods.",
    results: [
      "10,000+ artisans onboarded",
      "Orders from 50+ countries",
      "85% repeat customer rate",
    ],
    technologies: [
      "Next.js",
      "Stripe Connect",
      "Algolia",
      "Cloudinary",
      "Vercel",
    ],
    color: "#D6F5F0",
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Codology",
    };
  }

  return {
    title: `${project.title} | Codology`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
