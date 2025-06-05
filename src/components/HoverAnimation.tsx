'use client'
import { motion } from 'framer-motion';

interface HoverAnimationProps {
  children: React.ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
}

const HoverAnimation = ({ 
  children, 
  scale = 1.05,
  rotate = 0,
  className = '' 
}: HoverAnimationProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        rotate: rotate,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation; 