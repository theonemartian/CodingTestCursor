import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  delay: number;
}

const Testimonial = ({ name, role, quote, image, delay }: TestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300"
  >
    <div className="flex items-center mb-6">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent"
      />
      <div>
        <h4 className="text-xl font-bold text-white">{name}</h4>
        <p className="text-white/60">{role}</p>
      </div>
    </div>
    <p className="text-white/80 italic">&ldquo;{quote}&rdquo;</p>
  </motion.div>
);

const Stories = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Travel Enthusiast",
      quote: "Thanks to Cardo's recommendations, I found a travel card that saved me over $500 in my first year. The personalized suggestions were spot-on!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
    },
    {
      name: "John Martinez",
      role: "Small Business Owner",
      quote: "As a business owner, I needed a card with no annual fee and great rewards. Cardo helped me find exactly what I was looking for.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
    },
  ];

  return (
    <section className="bg-primary/95 py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/40" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Real Stories, Real Savings
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See how Cardo has helped others find their perfect credit cards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              image={testimonial.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories; 