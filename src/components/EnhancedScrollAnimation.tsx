import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'fadeLeft' 
  | 'fadeRight'
  | 'scaleUp'
  | 'scaleDown'
  | 'rotateIn'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'bounce'
  | 'elastic'
  | 'flip'
  | 'zoom'
  | 'stagger'
  | 'wave';

interface EnhancedScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  staggerChildren?: number;
}

const createVariants = (animation: AnimationType, duration: number): Variants => {
  const baseTransition = { duration, ease: "easeOut" };
  
  switch (animation) {
    case 'fadeUp':
      return {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: baseTransition }
      };
    
    case 'fadeDown':
      return {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0, transition: baseTransition }
      };
    
    case 'fadeLeft':
      return {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: baseTransition }
      };
    
    case 'fadeRight':
      return {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: baseTransition }
      };
    
    case 'scaleUp':
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: baseTransition }
      };
    
    case 'scaleDown':
      return {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1, transition: baseTransition }
      };
    
    case 'rotateIn':
      return {
        hidden: { opacity: 0, rotate: -180, scale: 0.8 },
        visible: { opacity: 1, rotate: 0, scale: 1, transition: { ...baseTransition, type: "spring", stiffness: 100 } }
      };
    
    case 'slideUp':
      return {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: baseTransition }
      };
    
    case 'slideDown':
      return {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: baseTransition }
      };
    
    case 'slideLeft':
      return {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: baseTransition }
      };
    
    case 'slideRight':
      return {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: baseTransition }
      };
    
    case 'bounce':
      return {
        hidden: { opacity: 0, y: 60, scale: 0.8 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 10,
            duration 
          } 
        }
      };
    
    case 'elastic':
      return {
        hidden: { opacity: 0, scale: 0.3 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration 
          } 
        }
      };
    
    case 'flip':
      return {
        hidden: { opacity: 0, rotateY: -90 },
        visible: { 
          opacity: 1, 
          rotateY: 0, 
          transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration 
          } 
        }
      };
    
    case 'zoom':
      return {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 20,
            duration 
          } 
        }
      };
    
    case 'wave':
      return {
        hidden: { opacity: 0, y: 40, rotateZ: -5 },
        visible: { 
          opacity: 1, 
          y: 0, 
          rotateZ: 0,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            duration 
          } 
        }
      };
    
    case 'stagger':
      return {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      };
    
    default:
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: baseTransition }
      };
  }
};

const EnhancedScrollAnimation: React.FC<EnhancedScrollAnimationProps> = ({
  children,
  animation = 'fadeUp',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  staggerChildren = 0.1
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  const variants = createVariants(animation, duration);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedScrollAnimation;