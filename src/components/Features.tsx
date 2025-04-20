import { motion } from 'framer-motion';
import { Brain, ChartPieSlice, Shield, Money } from 'phosphor-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300"
  >
    <div className="text-accent mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: <Brain weight="duotone" />,
      title: "Personalized Recommendations",
      description: "Our AI analyzes your spending habits to match you with the perfect credit cards.",
    },
    {
      icon: <ChartPieSlice weight="duotone" />,
      title: "Rewards Maximizer",
      description: "Compare cashback, points, and travel rewards to get the most value from your cards.",
    },
    {
      icon: <Money weight="duotone" />,
      title: "Fee Transparency",
      description: "Clear breakdown of fees, APRs, and hidden costs before you apply.",
    },
    {
      icon: <Shield weight="duotone" />,
      title: "Secure & Private",
      description: "Bank-level encryption keeps your personal data safe and secure.",
    },
  ];

  return (
    <section className="bg-primary py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Choose Cardo?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Smart features designed to help you make informed decisions about your credit cards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 