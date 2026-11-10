import { motion, useReducedMotion } from 'framer-motion'

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  delay: (i % 7) * 1.15,
  duration: 11 + (i % 6) * 2,
  size: 12 + (i % 4) * 5,
}))

export default function PetalField() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null
  return <div className="petal-field" aria-hidden="true">
    {petals.map((petal) => <motion.span key={petal.id} className="petal"
      style={{ left: petal.left, fontSize: petal.size }}
      initial={{ y: '-12vh', opacity: 0, rotate: 0 }}
      animate={{ y: '112vh', opacity: [0, 0.75, 0.65, 0], rotate: 360 }}
      transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: 'linear' }}
    >✿</motion.span>)}
  </div>
}
