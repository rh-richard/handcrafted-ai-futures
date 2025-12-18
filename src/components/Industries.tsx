import { Factory, Building2, HeartPulse, Car, ShieldCheck, Cog } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Smart automation and predictive maintenance for Industry 4.0',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    description: 'Medical-grade devices with AI-powered diagnostics',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Advanced driver assistance and autonomous systems',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Building2,
    name: 'Smart Buildings',
    description: 'Intelligent building management and security',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ShieldCheck,
    name: 'Defense',
    description: 'Mission-critical systems with hardened security',
    color: 'from-slate-500 to-zinc-500',
  },
  {
    icon: Cog,
    name: 'Robotics',
    description: 'Precision control systems for advanced robotics',
    color: 'from-violet-500 to-purple-500',
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Industries
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Transforming Industries
            <br />
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our technology powers innovation across diverse sectors, 
            enabling businesses to achieve unprecedented efficiency and intelligence.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
