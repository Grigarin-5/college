'use client'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  const getDirectionVariants = () => {
    switch (direction) {
      case 'down':
        return { y: -75 }
      case 'left':
        return { x: 75 }
      case 'right':
        return { x: -75 }
      default: // up
        return { y: 75 }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...getDirectionVariants(),
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
} 