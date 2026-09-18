import { Quote, Star, Users } from "lucide-react";

export function Testimonial() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Software Engineer",
      content: "Lumen helped me master technical vocabulary in just weeks. The daily practice is a game-changer!",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      name: "Reza K.",
      role: "Student",
      content: "Finally an app that understands bilingual learning. The Persian-English support is perfect.",
      rating: 5,
      avatar: "👨‍🎓",
    },
    {
      name: "Alex T.",
      role: "Developer",
      content: "The code-specific vocabulary deck is exactly what I needed for my career growth.",
      rating: 5,
      avatar: "👨‍💻",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
            <Users size={16} />
            <span className="text-xs font-medium uppercase tracking-wider">Community Love</span>
          </div>
          <h2 className="text-3xl font-bold text-fg mb-3">Trusted by Learners Worldwide</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Join thousands of students and professionals who have transformed their English vocabulary with Lumen
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-accent">5K+</div>
            <div className="text-xs text-muted mt-1">Active Learners</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-ok">2K+</div>
            <div className="text-xs text-muted mt-1">Words Learned</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-warn">4.9</div>
            <div className="text-xs text-muted mt-1">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:shadow-border-hover hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                ))}
              </div>
              
              {/* Quote Icon */}
              <Quote size={28} className="text-accent/20 -ml-1 -mt-2" />
              
              {/* Content */}
              <p className="text-sm text-fg leading-relaxed flex-1 italic">
                "{t.content}"
              </p>
              
              {/* User Info */}
              <div className="pt-4 border-t border-border/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-fg">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted mb-4">Ready to start your learning journey?</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25 transition-all font-medium">
            <span>Join Now — It's Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}
