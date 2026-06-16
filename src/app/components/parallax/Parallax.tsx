import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export function ParallaxLayer({ children, className = "", speed = 0.35 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-40 * speed, 40 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0 will-change-transform" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

type ParallaxHeroProps = {
  children: ReactNode;
  background: ReactNode;
  className?: string;
  style?: CSSProperties;
  imageSpeed?: number;
  contentSpeed?: number;
};

export function ParallaxHero({
  children,
  background,
  className = "",
  style,
  imageSpeed = 0.45,
  contentSpeed = 0.12,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : ["0%", `${imageSpeed * 100}%`]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, contentSpeed * 200]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: backgroundY }}>
        {background}
      </motion.div>
      <motion.div className="relative z-10 will-change-transform" style={{ y: contentY, opacity }}>
        {children}
      </motion.div>
    </section>
  );
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({ children, className = "", delay = 0, y = 28 }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
