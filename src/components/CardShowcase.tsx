import { motion } from 'framer-motion';
import { CreditCard, Airplane, Money, Buildings } from 'phosphor-react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  rewards: string;
  fee: string;
  color: string;
  delay: number;
}

const Card = ({ title, icon, rewards, fee, color, delay }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group"
    >
      <div
        className={`w-full h-64 rounded-2xl p-6 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-10 ${color}`}
      >
        <div className="flex justify-between items-start">
          <div className="text-white/90 text-3xl">{icon}</div>
          <div className="text-white/80 font-bold">CARDO</div>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          <div className="space-y-1">
            <p className="text-white/80">{rewards}</p>
            <p className="text-white/60 text-sm">{fee}</p>
          </div>
        </div>

        {/* Card chip */}
        <div className="absolute top-1/2 left-6 w-12 h-8 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-md" />
      </div>

      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
    </motion.div>
  );
};

const CardShowcase = () => {
  const cards = [
    {
      title: "Travel Elite",
      icon: <Airplane weight="duotone" />,
      rewards: "5% travel rewards",
      fee: "$95 annual fee",
      color: "bg-gradient-to-br from-purple-600 to-blue-700",
    },
    {
      title: "Cashback Pro",
      icon: <Money weight="duotone" />,
      rewards: "3% cashback on all purchases",
      fee: "No annual fee",
      color: "bg-gradient-to-br from-green-600 to-emerald-700",
    },
    {
      title: "Business Rewards",
      icon: <Buildings weight="duotone" />,
      rewards: "2x points on business expenses",
      fee: "$150 annual fee",
      color: "bg-gradient-to-br from-orange-600 to-red-700",
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
            Featured Cards
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our selection of premium credit cards tailored to your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              rewards={card.rewards}
              fee={card.fee}
              color={card.color}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardShowcase; 