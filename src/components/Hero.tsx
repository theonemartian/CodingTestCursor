import { motion } from 'framer-motion';
import { CreditCard } from 'phosphor-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/95 via-primary to-primary/90 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Find Your Perfect Credit Card with Cardo
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            AI-powered recommendations tailored to you.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Animated 3D credit card */}
        <motion.div
          className="mt-16"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-96 h-56 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-6 backdrop-blur-sm shadow-2xl border border-white/10 relative">
            <div className="flex justify-between items-start">
              <CreditCard size={32} className="text-accent" />
              <div className="text-white/80">CARDO</div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-white/80 text-lg mb-2">**** **** **** 1234</div>
              <div className="text-white/60 text-sm">JOHN DOE</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 