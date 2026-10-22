import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CountdownTimer.css';

const TARGET_DATE = new Date('2026-11-01T19:00:00+05:00');

const getTimeLeft = () => {
  const difference = TARGET_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    complete: false,
  };
};

const FlipUnit = ({ value, label }) => {
  const display = String(value).padStart(2, '0');

  return (
    <div className="flip-unit">
      <div className="flip-card" aria-hidden="true">
        <div className="flip-shine" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={display}
            className="flip-value"
            initial={{ y: -28, opacity: 0, rotateX: -70 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: 28, opacity: 0, rotateX: 70 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="flip-label">{label}</span>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const secondProgress = useMemo(
    () => ((60 - timeLeft.seconds) / 60) * 100,
    [timeLeft.seconds]
  );

  if (timeLeft.complete) {
    return (
      <div className="countdown-container">
        <motion.div
          className="celebration-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>The celebration has begun!</h2>
          <p>Daniyal & Nisa are exchanging their vows of forever.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="countdown-container" aria-label="Countdown to the engagement">
      <motion.p
        className="countdown-kicker"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Engagement Ceremony
      </motion.p>
      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Counting down to the special day
      </motion.h2>
      <p className="countdown-date">1 November 2026 · 7:00 PM</p>

      <div
        className="countdown-grid"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        <FlipUnit value={timeLeft.days} label="Days" />
        <span className="time-separator" aria-hidden="true">:</span>
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <span className="time-separator" aria-hidden="true">:</span>
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <span className="time-separator" aria-hidden="true">:</span>
        <div className="seconds-wrap">
          <svg className="seconds-ring" viewBox="0 0 120 120" aria-hidden="true">
            <circle className="ring-track" cx="60" cy="60" r="54" />
            <circle
              className="ring-progress"
              cx="60"
              cy="60"
              r="54"
              style={{ strokeDashoffset: 339.3 - (339.3 * secondProgress) / 100 }}
            />
          </svg>
          <FlipUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <p className="sr-only">
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
        and {timeLeft.seconds} seconds remaining
      </p>
    </section>
  );
};

export default CountdownTimer;
