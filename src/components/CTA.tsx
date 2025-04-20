import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

const CTA = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary animate-gradient-x" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready for Smarter Card Choices?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of users who've found their perfect credit cards with Cardo.
            Start your journey to better rewards today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
          >
            <span>Start Now</span>
            <ArrowRight weight="bold" className="w-5 h-5" />
          </motion.button>

          <p className="mt-8 text-white/60 text-sm">
            No credit check required. Free to use.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 