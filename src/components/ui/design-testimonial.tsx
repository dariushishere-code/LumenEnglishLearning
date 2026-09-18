import { useState } from "react";
import { Quote, Star } from "lucide-react";

export function Testimonial() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Software Engineer",
      content: "Lumen helped me master technical vocabulary in just weeks. The daily practice is a game-changer!",
      rating: 5,
    },
    {
      name: "Reza K.",
      role: "Student",
      content: "Finally an app that understands bilingual learning. The Persian-English support is perfect.",
      rating: 5,
    },
    {
      name: "Alex T.",
      role: "Developer",
      content: "The code-specific vocabulary deck is exactly what I needed for my career growth.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-fg mb-2">What Our Users Say</h2>
        <p className="text-sm text-muted">Join thousands of learners mastering English vocabulary</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="glass rounded-xl p-6 flex flex-col gap-4 hover:shadow-border-hover transition-all">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} fill="currentColor" />
              ))}
            </div>
            <Quote size={24} className="text-muted opacity-50" />
            <p className="text-sm text-fg leading-relaxed flex-1">{t.content}</p>
            <div className="pt-4 border-t border-border/50">
              <div className="font-medium text-sm text-fg">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
