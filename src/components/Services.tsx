"use client";

import {
  Monitor,
  Smartphone,
  Cpu,
  Layout,
  Database,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building high-performance, scalable web applications using React, Next.js, and modern back-end technologies.",
    icon: <Monitor className="w-6 h-6" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning user interfaces that provide exceptional user experiences.",
    icon: <Layout className="w-6 h-6" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Mobile Optimization",
    description:
      "Ensuring your applications look and perform beautifully across all devices and screen sizes.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    title: "Backend Architecture",
    description:
      "Designing robust server-side systems and database schemas for seamless data management.",
    icon: <Database className="w-6 h-6" />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Performance Tuning",
    description:
      "Optimizing application speed and reliability through deep technical analysis and best practices.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "SEO Strategy",
    description:
      "Implementing modern SEO techniques to ensure your digital products are discoverable and rank well.",
    icon: <Search className="w-6 h-6" />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function Services() {
  return (
    <div id="services" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          What I <span className="text-gradient">Deliver</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          Comprehensive digital solutions tailored to meet modern business needs
          and user expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
