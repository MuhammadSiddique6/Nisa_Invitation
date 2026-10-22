import { motion } from 'framer-motion';
import { useState } from 'react';
import './InvitationCard.css';

const InvitationCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="invitation-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="card-border">
        <div className="card-inner">
          <div className="card-decoration-top"></div>
          
          <div className="paisley-pattern"></div>
          <div className="geometric-pattern"></div>
          
          <motion.div
            className="card-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="ornament-top"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="ornament-left"></div>
              <div className="ornament-center"></div>
              <div className="ornament-right"></div>
            </motion.div>

            <motion.p
              className="save-the-date"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              ✦ SAVE THE DATE ✦
            </motion.p>

            <motion.p
              className="celebrate-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              ~ With the blessings of Almighty Allah ~
            </motion.p>

            <motion.p
              className="celebrate-subtext"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Request the pleasure of your company at the
            </motion.p>

            <motion.div
              className="names-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div 
                className="name-wrapper groom-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="name-ornament"></div>
                <h1 className="groom-name">Daniyal Arshad</h1>
                <div className="name-ornament"></div>
              </motion.div>
              
              <div className="ampersand-container">
                <div className="ampersand-line"></div>
                <div className="ampersand">&</div>
                <div className="ampersand-line"></div>
              </div>
              
              <motion.div 
                className="name-wrapper bride-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="name-ornament"></div>
                <h1 className="bride-name">Nisa Farhan</h1>
                <div className="name-ornament"></div>
              </motion.div>
            </motion.div>

            <motion.div
              className="family-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <p className="family-intro">Grand daughter of</p>
              <p className="family-names">Mr. & Mrs. Ehsan Khan</p>
            </motion.div>

            <motion.div
              className="divider-ornament"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="divider-flower"></div>
              <div className="divider-line"></div>
              <div className="divider-flower"></div>
            </motion.div>

            <motion.div
              className="date-time-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="date-wrapper">
                <div className="date-icon">📅</div>
                <p className="date">1 November 2026</p>
              </div>
              <div className="time-wrapper">
                <div className="time-icon">🕐</div>
                <p className="time">7:00 PM – 10:00 PM</p>
              </div>
            </motion.div>

            <motion.p
              className="ceremony-type"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              ❧ ENGAGEMENT CEREMONY ❧
            </motion.p>

            <motion.div
              className="venue-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <div className="venue-icon">🕌</div>
              <p className="venue-label">VENUE</p>
              <p className="venue-name">Noor Jahan Wedding Hall</p>
            </motion.div>

            <motion.div
              className="bismillah"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              بسم الله الرحمن الرحيم
            </motion.div>
          </motion.div>

          <div className="card-decoration-bottom"></div>
          
          <div className="mughal-arch-left"></div>
          <div className="mughal-arch-right"></div>
          <div className="floral-corner-top-left"></div>
          <div className="floral-corner-top-right"></div>
          <div className="floral-corner-bottom-left"></div>
          <div className="floral-corner-bottom-right"></div>
          
          <div className="border-ornament-top"></div>
          <div className="border-ornament-bottom"></div>
          <div className="border-ornament-left"></div>
          <div className="border-ornament-right"></div>
          
          {isHovered && <div className="card-glow"></div>}
        </div>
      </div>
    </motion.div>
  );
};

export default InvitationCard;
