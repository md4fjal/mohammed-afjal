"use client";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Technologies Mastered", value: "15+" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="p-6 glass-dark rounded-3xl border border-border flex flex-col items-center justify-center text-center group hover:border-primary/20 transition-all duration-500"
        >
          <span className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-500">
            {stat.value}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
