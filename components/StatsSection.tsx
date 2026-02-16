export default function StatsSection() {
  const stats = [
    { label: "Experienced", value: "8 +" },
    { label: "Teams", value: "122 +" },
    { label: "Clients", value: "563 +" },
    { label: "Project Done", value: "232 +" },
  ];

  return (
    <section className="bg-gradient-primary py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <p className="text-sm text-white/80 mb-2">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
