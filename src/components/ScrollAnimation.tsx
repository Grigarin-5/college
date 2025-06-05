'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimation = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  threshold = 0.1
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-100px",
    amount: threshold
  });

  const getInitialAnimation = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalAnimation = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : direction === 'up' ? 50 : -50,
          transition: {
            opacity: { duration: 0.5 },
            y: { duration: 0.5, type: "spring", stiffness: 100 }
          }
        };
      case 'left':
      case 'right':
        return { 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : direction === 'left' ? 50 : -50,
          transition: {
            opacity: { duration: 0.5 },
            x: { duration: 0.5, type: "spring", stiffness: 100 }
          }
        };
      default:
        return { 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 50,
          transition: {
            opacity: { duration: 0.5 },
            y: { duration: 0.5, type: "spring", stiffness: 100 }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialAnimation()}
      animate={getFinalAnimation()}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 