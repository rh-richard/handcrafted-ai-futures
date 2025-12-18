import { Brain, Cpu, Fingerprint, Shield, Zap, Wifi } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Neural Processing',
    description: 'On-device AI processing with custom neural engines for real-time decision making.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Integration',
    description: 'Advanced biometric sensors that seamlessly integrate with your security infrastructure.',
  },
  {
    icon: Zap,
    title: 'Ultra-Low Latency',
    description: 'Sub-millisecond response times for critical applications requiring instant feedback.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and security protocols built into every device.',
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Powerful edge processing capabilities that reduce cloud dependency.',
  },
  {
    icon: Wifi,
    title: 'Seamless Connectivity',
    description: 'Multi-protocol support including 5G, WiFi 6E, and proprietary mesh networks.',
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            AI-Powered Hardware
            <br />
            <span className="text-gradient">Redefined</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proprietary technology stack combines cutting-edge hardware engineering 
            with advanced artificial intelligence to deliver unprecedented performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(217_100%_50%/0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
