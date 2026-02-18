import { Heart, User, BookOpen, Leaf } from "lucide-react";

const experiences = [
  {
    icon: Heart,
    title: "Trauma-Informed Inner Work",
    description: "Guided emotional release & clarity building",
  },
  {
    icon: User,
    title: "Shadow Integration",
    description: "Embrace hidden parts of yourself safely",
  },
  {
    icon: Leaf,
    title: "Mind-Body Regulation",
    description: "Somatic tools for balance & grounding",
  },
  {
    icon: BookOpen,
    title: "Reflective Workbooks",
    description: "Structured journaling for transformation",
  },
];

const ExperienceSection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--experience-bg-from)) 0%, hsl(var(--experience-bg-to)) 100%)",
      }}
    >
      {/* Ocean wave / texture feel via a subtle overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 200 Q360 100 720 200 Q1080 300 1440 200 L1440 400 L0 400Z"
            fill="hsl(var(--secondary))"
            opacity="0.4"
          />
          <path
            d="M0 250 Q360 150 720 250 Q1080 350 1440 250 L1440 400 L0 400Z"
            fill="hsl(var(--primary))"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-primary">
          What You Will Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-7 flex flex-col items-start gap-4 shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "hsl(0 0% 100% / 0.75)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "hsl(var(--muted))" }}
                >
                  <Icon size={22} className="text-secondary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex items-start gap-2 text-muted-foreground">
                  <span className="text-secondary font-bold mt-0.5">✓</span>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
