import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { googleReviews } from '../google_reviews';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          O que nossos clientes dizem
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Confira a satisfação de quem já transformou o sono com a Loja Castor Cabo Frio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {googleReviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-6 rounded-xl shadow-lg border border-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                {review.text}
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">{review.author}</p>
              <p className="text-xs text-muted-foreground">{review.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;


