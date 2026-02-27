"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const stats = [
    { label: "Satisfied with our Service", value: 5000, suffix: "Clients Onboarded" },
    { label: "Working With Passion", value: 15, suffix: "Experience" },
    { label: "We Have Completed", value: 600, suffix: "Projects Done" },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-6" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-white/20 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index} className="md:flex-1 md:px-8 flex flex-col justify-center items-center">
              <p className="text-3xl md:text-4xl font-bold text-white text-start">
                {inView && <CountUp end={stat.value} duration={2} />}+ 
              </p>
              <span className="text-lg font-normal text-white">{stat.suffix}</span>
              {/* <p className="text-sm text-white/80 mt-2 text-start">{stat.label}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
