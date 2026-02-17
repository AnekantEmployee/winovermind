"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    { label: "Experienced", value: 8 },
    { label: "Teams", value: 122 },
    { label: "Clients", value: 563 },
    { label: "Project Done", value: 232 },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-6" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-white/20 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:flex-1 md:px-8">
              <p className="text-sm text-white/80 mb-2">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {inView && <CountUp end={stat.value} duration={2} />} +
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
