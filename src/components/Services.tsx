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
    <div id="services" className="scroll-mt-24 py-12">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          What I <span className="text-gradient">Deliver</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Comprehensive digital solutions tailored to meet modern business needs
          and exceed user expectations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-10 glass-dark rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div
              className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
            >
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
