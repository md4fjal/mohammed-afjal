"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science (BSc)",
    school: "LBS Collage Jaipur",
    period: "2019 - 2022",
    result: "65%",
    color: "purple-400",
  },
  {
    degree: "Master of Computer Application (MCA)",
    school: "Jaipur National University",
    period: "2022 - 2024",
    result: "CGPA: 8.8",
    color: "primary",
  },
];

export default function Education() {
  return (
    <div id="education" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Academic <span className="text-gradient">Foundation</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          My formal education that provided the theoretical and practical
          grounding for my career.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="group p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 glass rounded-2xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {item.degree}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {item.school}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                {item.period}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Award className="w-4 h-4 text-primary" />
                {item.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
