import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './RingIntro.css';

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 19) % 88)}%`,
  delay: i * 0.55,
  duration: 9 + (i % 6),
  drift: i % 2 === 0 ? 24 : -24,
  size: 10 + (i % 7),
}));

const captions = {
  enter: 'Daniyal  &  Nisa',
  reach: 'Two hearts. One promise.',
  exchange: 'They exchange rings',
  celebrate: 'Two hearts, one beautiful beginning',
  idle: 'Two hearts, one beautiful beginning',
};

const RingIntro = ({ onOpen }) => {
  const [phase, setPhase] = useState('enter');
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    setPhase('enter');
    const timers = [
      setTimeout(() => setPhase('reach'), 1400),
      setTimeout(() => setPhase('exchange'), 2800),
      setTimeout(() => setPhase('celebrate'), 5000),
      setTimeout(() => setPhase('idle'), 6800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [replayKey]);

  const armsOut = phase !== 'enter';
  const exchanging = phase === 'exchange' || phase === 'celebrate' || phase === 'idle';
  const celebrating = phase === 'celebrate' || phase === 'idle';

  const replayCeremony = () => {
    setReplayKey((key) => key + 1);
  };

  return (
    <div className="ring-intro">
      <div className="gold-particles" aria-hidden="true" />
      <div className="petal-field" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={`${replayKey}-${petal.id}`}
            className="petal"
            style={{
              left: petal.left,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              '--drift': `${petal.drift}px`,
              width: petal.size,
              height: petal.size * 0.7,
            }}
          />
        ))}
      </div>

      <button
        type="button"
        className="ceremony-stage"
        onClick={replayCeremony}
        aria-label="Replay ring exchange ceremony"
      >
        <div className="stage-glow" />
        <div className="stage-floor" />

        <div className={`person groom ${armsOut ? 'arms-out' : ''} ${celebrating ? 'celebrate' : ''}`}>
          <div className="person-shadow" />
          <div className="arm arm-back" />
          <div className="torso">
            <div className="sherwani" />
            <div className="sash" />
            <div className="buttons" />
          </div>
          <div className="arm arm-front">
            <div className="hand" />
            <div className={`finger-ring ${celebrating ? 'worn' : 'hidden'}`} />
          </div>
          <div className="neck" />
          <div className="head">
            <div className="hair" />
            <div className="face">
              <span className="eye" />
              <span className="eye" />
              <span className="smile" />
            </div>
          </div>
          <p className="person-name">Daniyal</p>
        </div>

        <div className={`person bride ${armsOut ? 'arms-out' : ''} ${celebrating ? 'celebrate' : ''}`}>
          <div className="person-shadow" />
          <div className="arm arm-back" />
          <div className="torso">
            <div className="lehenga" />
            <div className="dupatta" />
          </div>
          <div className="arm arm-front">
            <div className="hand" />
            <div className={`finger-ring ${celebrating ? 'worn' : 'hidden'}`} />
          </div>
          <div className="neck" />
          <div className="head">
            <div className="hair bun" />
            <div className="face">
              <span className="eye" />
              <span className="eye" />
              <span className="smile" />
            </div>
          </div>
          <p className="person-name">Nisa</p>
        </div>

        <motion.div
          key={`groom-ring-${replayKey}`}
          className="flying-ring groom-ring"
          initial={{ x: -150, y: 18, scale: 0.7, opacity: 0 }}
          animate={
            celebrating
              ? { x: 118, y: 10, scale: 0.55, opacity: 0 }
              : exchanging
                ? { x: [-118, 0, 118], y: [18, -70, 10], scale: 1.15, opacity: 1, rotate: 420 }
                : { x: -118, y: 18, scale: 1, opacity: armsOut ? 1 : 0 }
          }
          transition={{ duration: exchanging ? 1.85 : 0.6, ease: 'easeInOut' }}
        >
          <span className="ring-band" />
          <span className="ring-diamond" />
        </motion.div>

        <motion.div
          key={`bride-ring-${replayKey}`}
          className="flying-ring bride-ring"
          initial={{ x: 150, y: 18, scale: 0.7, opacity: 0 }}
          animate={
            celebrating
              ? { x: -118, y: 10, scale: 0.55, opacity: 0 }
              : exchanging
                ? { x: [118, 0, -118], y: [18, -70, 10], scale: 1.15, opacity: 1, rotate: -420 }
                : { x: 118, y: 18, scale: 1, opacity: armsOut ? 1 : 0 }
          }
          transition={{ duration: exchanging ? 1.85 : 0.6, ease: 'easeInOut' }}
        >
          <span className="ring-band" />
          <span className="ring-diamond" />
        </motion.div>

        <AnimatePresence>
          {celebrating && (
            <motion.div
              className="sparkle-burst"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <span key={i} className={`burst-spark spark-${i}`} />
              ))}
              <span className="heart heart-1">♥</span>
              <span className="heart heart-2">♥</span>
              <span className="heart heart-3">♥</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div className="intro-text">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`${replayKey}-${phase}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            {captions[phase]}
          </motion.h1>
        </AnimatePresence>
        <p className="replay-hint">Tap the couple to watch the rings again</p>
      </div>

      <motion.button
        className="open-btn"
        onClick={onOpen}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: celebrating ? 1 : 0.35, y: 0 }}
        transition={{ duration: 0.7, delay: celebrating ? 0.2 : 0 }}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="btn-text">Open Your Invitation</span>
        <span className="btn-shine" />
      </motion.button>
    </div>
  );
};

export default RingIntro;
