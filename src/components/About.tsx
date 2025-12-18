import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former VP of Engineering at a major tech company with 20+ years in AI research.',
  },
  {
    name: 'Marcus Weber',
    role: 'CTO & Co-Founder',
    bio: 'Hardware architect with experience designing chips for leading semiconductor companies.',
  },
  {
    name: 'Aisha Patel',
    role: 'VP of Product',
    bio: 'Product leader specializing in human-computer interaction and user experience.',
  },
  {
    name: 'James Rodriguez',
    role: 'VP of Engineering',
    bio: 'Systems engineer with expertise in embedded systems and real-time computing.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
            Building the Bridge Between
            <br />
            <span className="text-gradient">Human Intent and Machine Action</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2018, RealHand emerged from a simple vision: to create hardware 
            that truly understands and responds to human needs. We combine decades of 
            engineering expertise with breakthrough AI research to build devices that 
            feel like natural extensions of human capability.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-display font-semibold text-foreground text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-border group-hover:border-primary/30 transition-colors duration-300">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
