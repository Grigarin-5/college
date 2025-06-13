import React from 'react';
import { motion } from 'framer-motion';

interface TextLabelProps {
  text: string | React.ReactNode;
  color?: 'white' | 'black' | 'green' | 'gray' | 'light' | 'dark';
  variant?: 'default' | 'nav' | 'button' | 'tag';
  className?: string;
  animate?: boolean;
  delay?: number;
  isActive?: boolean;
}

const TextLabel: React.FC<TextLabelProps> = ({
  text,
  color = 'black',
  variant = 'default',
  className = '',
  animate = false,
  delay = 0.2,
  isActive = false
}) => {
  const colorStyles = {
    white: 'text-white',
    black: 'text-black',
    green: 'text-green-600',
    gray: isActive ? 'text-white' : 'text-gray-400 hover:text-white/80',
    light: 'text-green-50/90',
    dark: 'text-gray-800'
  };

  const variantStyles = {
    default: 'text-sm sm:text-sm font-light',
    nav: 'text-sm sm:text-sm font-medium tracking-wider uppercase',
    button: 'text-sm sm:text-sm font-medium tracking-wider uppercase',
    tag: 'text-sm sm:text-sm font-light tracking-wider uppercase'
  };

  const baseStyles = 'font-arvo transition-colors duration-300';

  const content = (
    <span className={`${baseStyles} ${colorStyles[color]} ${variantStyles[variant]} ${className}`}>
      {text}
    </span>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default TextLabel; 