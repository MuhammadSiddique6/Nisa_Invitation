import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './InvitationEnvelope.css';

const InvitationEnvelope = ({ isOpen, onOpen, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="envelope-container">
      <motion.div
        className="envelope"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          rotateY: isHovered && !isOpen ? 5 : 0
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="envelope-body">
          <div className="envelope-front">
            <div className="envelope-border"></div>
            <div className="envelope-decoration"></div>
            
            <motion.div
              className="envelope-flap"
              animate={{
                rotateX: isOpen ? 180 : 0,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            >
              <div className="flap-inner"></div>
              <div className="flap-pattern"></div>
            </motion.div>

            <motion.button
              className="wax-seal"
              onClick={onOpen}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="wax-seal-inner">
                <span className="seal-text">N & D</span>
              </div>
              <div className="wax-seal-shine"></div>
              <div className="wax-seal-glow"></div>
            </motion.button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="invitation-card-wrapper"
                initial={{ y: 0, opacity: 0, scale: 0.9 }}
                animate={{ y: -150, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                exit={{ y: 0, opacity: 0, scale: 0.9 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {!isOpen && (
          <motion.p
            className="envelope-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            Tap the seal to open
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvitationEnvelope;
