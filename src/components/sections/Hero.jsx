import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroStats } from '../../data/homeSections'
import { Button } from '../ui/Button'
import { Counter } from '../ui/Counter'

const heroImageSrc = '/assets/hero-section-photo.png'
const motionEase = [0.22, 1, 0.36, 1]
const ballColors = ['#000000', '#020202', '#050505', '#070707', '#0a0a0a', '#0d0d0d']

function createLetterBalls() {
  const balls = []

  const addBall = (letter, index, x, y, colorOffset = 0) => {
    const globalIndex = balls.length

    balls.push({
      id: `${letter}-ball-${index}`,
      color: ballColors[(globalIndex + colorOffset) % ballColors.length],
      x,
      y,
      size: 7 + ((globalIndex * 11) % 11),
      floatX: (((globalIndex * 7) % 13) - 6) * .55,
      floatY: -3.5 - ((globalIndex * 5) % 9),
      duration: 3.2 + (globalIndex % 8) * .24,
      delay: (globalIndex % 16) * .035,
      strength: 16 + (globalIndex % 8) * 2.5
    })
  }

  const oCount = 68
  for (let index = 0; index < oCount; index += 1) {
    const angle = (index / oCount) * Math.PI * 2
    const lane = (index % 3) - 1
    const jitterX = (((index * 29) % 11) - 5) * .12
    const jitterY = (((index * 31) % 13) - 6) * .12

    addBall(
      'o',
      index,
      29 + Math.cos(angle) * (17 + lane * 1.6) + jitterX,
      50 + Math.sin(angle) * (31 + lane * 1.35) + jitterY
    )
  }

  const cCount = 66
  const startAngle = 44
  const endAngle = 316
  for (let index = 0; index < cCount; index += 1) {
    const progress = index / (cCount - 1)
    const angle = ((startAngle + progress * (endAngle - startAngle)) * Math.PI) / 180
    const lane = (index % 3) - 1
    const jitterX = (((index * 37) % 13) - 6) * .12
    const jitterY = (((index * 41) % 11) - 5) * .12

    addBall(
      'c',
      index,
      72 + Math.cos(angle) * (18 + lane * 1.65) + jitterX,
      50 + Math.sin(angle) * (31 + lane * 1.35) + jitterY,
      4
    )
  }

  return balls
}

const heroBalls = createLetterBalls()

function InteractiveHeroBalls({ shouldReduceMotion }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50, active: false })

  const handlePointerMove = (event) => {
    if (shouldReduceMotion) return

    const rect = event.currentTarget.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      active: true
    })
  }

  const resetPointer = () => setPointer((current) => ({ ...current, active: false }))

  return (
    <div
      className="interactive-balls relative mx-auto aspect-square w-[min(100%,540px)] overflow-hidden"
      role="img"
      aria-label="Interactive colorful floating balls arranged as O and C letters"
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.18),transparent_62%)]" aria-hidden="true" />
      {heroBalls.map((ball) => {
        const deltaX = ball.x - pointer.x
        const deltaY = ball.y - pointer.y
        const distance = Math.max(Math.hypot(deltaX, deltaY), .001)
        const influence = pointer.active ? Math.max(0, 1 - distance / 24) : 0
        const pushX = (deltaX / distance) * influence * ball.strength
        const pushY = (deltaY / distance) * influence * ball.strength
        const hoverScale = 1 + influence * .7

        return (
          <motion.span
            key={ball.id}
            className="absolute rounded-full will-change-transform"
            aria-hidden="true"
            style={{
              left: `${ball.x}%`,
              top: `${ball.y}%`,
              width: ball.size,
              height: ball.size,
              marginLeft: -ball.size / 2,
              marginTop: -ball.size / 2,
              background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,.38), ${ball.color} 38%, rgba(0,0,0,.98) 118%)`,
              boxShadow: `0 0 ${ball.size * 1.2}px rgba(0,0,0,.34), inset ${Math.max(2, ball.size * .18)}px ${Math.max(2, ball.size * .16)}px ${Math.max(4, ball.size * .34)}px rgba(255,255,255,.16), inset -${Math.max(2, ball.size * .18)}px -${Math.max(2, ball.size * .18)}px ${Math.max(4, ball.size * .34)}px rgba(0,0,0,.62)`
            }}
            animate={shouldReduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : pointer.active
                ? { x: pushX, y: pushY, scale: hoverScale }
                : { x: [0, ball.floatX, 0], y: [0, ball.floatY, 0], scale: [1, 1.08, 1] }
            }
            transition={pointer.active
              ? { duration: .28, ease: motionEase }
              : { duration: ball.duration, repeat: Infinity, ease: 'easeInOut', delay: ball.delay }
            }
          />
        )
      })}
    </div>
  )
}

export function Hero({ introComplete = true }) {
  const shouldReduceMotion = useReducedMotion()
  const animationState = introComplete || shouldReduceMotion ? 'visible' : 'hidden'
  const itemTransition = shouldReduceMotion ? { duration: 0 } : { duration: .58, ease: motionEase }
  const heroItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: itemTransition }
  }
  const heroHeadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: shouldReduceMotion ? { duration: 0 } : { duration: .68, ease: motionEase } }
  }
  const heroCtaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: shouldReduceMotion ? { duration: 0 } : { duration: .52, ease: motionEase } }
  }
  const heroStatsVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : .05,
        delayChildren: shouldReduceMotion ? 0 : .08
      }
    }
  }
  const heroVisualVariants = {
    hidden: { opacity: 0, y: 34, scale: .975 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { duration: .72, ease: motionEase, delay: .12 }
    }
  }

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden bg-white pt-[calc(var(--header-height)+.65rem)] pb-7" aria-labelledby="hero-title">
      <img
        className="pointer-events-none fixed inset-x-0 top-[-8%] z-0 h-[116svh] w-full object-cover will-change-transform"
        style={{ transform: 'scale(1.04)' }}
        src={heroImageSrc}
        alt=""
        decoding="async"
        fetchPriority="high"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-white/20" aria-hidden="true" />
      <div className="container-page relative z-[1] grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,.78fr)]">
        <motion.div
          className="hero__content"
          initial={animationState}
          animate={animationState}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : .075,
                delayChildren: shouldReduceMotion ? 0 : .04
              }
            }
          }}
        >
          <motion.p className="eyebrow text-black" variants={heroItemVariants}><span />UK-registered consumer brand development company</motion.p>
          <motion.h1 id="hero-title" className="heading-font max-w-[620px] text-[clamp(2.15rem,4.2vw,4.15rem)] font-extrabold leading-[1.06] tracking-[-.055em] text-black" variants={heroHeadingVariants}>Building Modern Consumer Brands for Everyday Living.</motion.h1>
          <motion.p className="mt-3 max-w-[600px] text-[clamp(.94rem,1.16vw,1.02rem)] font-semibold leading-[1.58] text-[#151518]" variants={heroItemVariants}>Omnicartix is a UK-registered company focused on developing high-quality consumer brands across wellness, lifestyle, home, and emerging product categories. This is the official corporate website for Omnicartix, not an eCommerce store. We believe in creating products that combine innovation, reliability, and exceptional customer experience.</motion.p>
          <motion.div className="mt-5 flex flex-wrap gap-3" aria-label="Hero calls to action" variants={heroCtaVariants}>
            <Button href="#about" className="min-h-[46px] px-4 py-3 ring-1 ring-black/15">Explore Our Company</Button>
            <Button href="#contact" variant="secondary" className="min-h-[46px] bg-white px-4 py-3 text-black shadow-[5px_5px_0_rgba(0,0,0,.12)] ring-1 ring-black/15">Contact Us</Button>
          </motion.div>
          <motion.div className="mt-5 max-w-[560px] border-l-2 border-black/30 pl-4 text-sm font-bold text-black" variants={heroItemVariants}>
            Built around everyday needs, careful product thinking, and customer experiences that feel simple, useful, and dependable.
          </motion.div>
          <motion.dl className="mt-5 grid grid-cols-3 gap-2" aria-label="Website focus statistics" variants={heroStatsVariants}>
            {heroStats.map((stat) => (
              <motion.div key={stat.label} className="rounded-[6px] border border-[rgba(17,17,17,.1)] bg-white/90 p-3 shadow-[5px_5px_0_rgba(0,0,0,.08)] max-sm:px-2 max-sm:py-2" variants={heroItemVariants}>
                <dt className="heading-font text-[clamp(1.25rem,2.6vw,1.75rem)] font-extrabold leading-none text-[var(--primary)]"><Counter target={stat.target} /></dt>
                <dd className="mt-1 text-[.78rem] leading-tight text-[var(--muted)] max-sm:text-[.68rem]">{stat.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div className="mx-auto w-full max-w-[540px]" initial={animationState} animate={animationState} variants={heroVisualVariants}>
          <InteractiveHeroBalls shouldReduceMotion={shouldReduceMotion} />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-[-1px] h-11 bg-gradient-to-b from-transparent to-[var(--background)] [clip-path:polygon(0_48%,14%_58%,30%_43%,48%_57%,66%_42%,82%_56%,100%_45%,100%_100%,0_100%)]" aria-hidden="true" />
    </section>
  )
}
