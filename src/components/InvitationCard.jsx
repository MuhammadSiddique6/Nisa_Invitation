import { motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import './InvitationCard.css';

const InvitationCard = () => (
  <motion.article
    className="invitation-card"
    initial={{ opacity: 0, y: 24, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    whileHover={{ y: -7, rotate: 0.35 }}
  >
    <div className="card-border">
      <div className="card-inner">
        <div className="card-grain" aria-hidden="true" />
        <div className="card-orbit card-orbit-one" aria-hidden="true" />
        <div className="card-orbit card-orbit-two" aria-hidden="true" />

        <motion.header
          className="card-header"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="card-eyebrow">
            <span className="eyebrow-star" aria-hidden="true">✦</span>
                      بسم الله الرحمن الرحيم
<br></br>
            A celebration of love
            <span className="eyebrow-star" aria-hidden="true">✦</span>
          </span>
          <p className="celebrate-text">With the blessings of Almighty Allah</p>
          <p className="celebrate-subtext">Request the pleasure of your company at the</p>
        </motion.header>
<motion.div
          className="family-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <p className="family-intro">Grand daughter of</p>
          <p className="family-names">Mr. &amp; Mrs. Ehsan Khan</p>
        </motion.div>
        <motion.div
          className="names-section"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="name-rule" aria-hidden="true">
            <span />
            <span className="rule-diamond" />
            <span />
          </div>
          <h1 className="couple-names">
            <span className="bride-name">Nisa Farhan</span>
            <span className="ampersand" aria-label="and">&</span>
            <span className="groom-name">Daniyal Arshad</span>
          </h1>
          <div className="name-rule name-rule-bottom" aria-hidden="true">
            <span />
            <span className="rule-diamond" />
            <span />
          </div>
        </motion.div>

        

        <motion.div
          className="event-panel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="event-heading">
            <span className="event-spark" aria-hidden="true">✦</span>
            Engagement ceremony
            <span className="event-spark" aria-hidden="true">✦</span>
          </div>
          <div className="event-details">
            <div className="event-detail">
              <span className="detail-icon"><CalendarDays size={18} strokeWidth={1.7} /></span>
              <div>
                <span className="detail-label">Sunday</span>
                <time className="detail-value" dateTime="2026-11-01">1 November 2026</time>
              </div>
            </div>
            <span className="detail-divider" aria-hidden="true" />
            <div className="event-detail">
              <span className="detail-icon"><Clock3 size={18} strokeWidth={1.7} /></span>
              <div>
                <span className="detail-label">Evening reception</span>
                <time className="detail-value" dateTime="19:00">7:00 PM – 10:00 PM</time>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.a
          className="venue-section"
          href="https://www.google.com/maps/search/?api=1&query=Noor+Jahan+Wedding+Hall"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Noor Jahan Banquet Hall in Google Maps"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <div className="venue-icon" aria-hidden="true">
            <MapPin size={19} strokeWidth={1.7} />
          </div>
          <div className="venue-copy">
            <span className="venue-label">Celebration venue · View map</span>
            <p className="venue-name">Noor Jahan Banquet Hall</p>
          </div>
          <div className="venue-map-art" aria-hidden="true">
            <span className="map-route" />
            <span className="map-dot map-dot-one" />
            <span className="map-dot map-dot-two" />
          </div>
        </motion.a>

        <motion.div
          className="bismillah"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.15 }}
        >
        </motion.div>
      </div>
    </div>
  </motion.article>
);

export default InvitationCard;
