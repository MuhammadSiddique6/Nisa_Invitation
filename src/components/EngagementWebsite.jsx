import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RingIntro from './RingIntro';
import InvitationEnvelope from './InvitationEnvelope';
import InvitationCard from './InvitationCard';
import CountdownTimer from './CountdownTimer';
import MusicControls from './MusicControls';
import VenueButton from './VenueButton';
import ShareInvitation from './ShareInvitation';
import './EngagementWebsite.css';

const EngagementWebsite = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenInvitation = () => {
    setCurrentStep('envelope');
  };

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setCurrentStep('invitation');
    }, 1500);
  };

  const handleReplay = () => {
    setIsEnvelopeOpen(false);
    setCurrentStep('intro');
  };

  useEffect(() => {
    if (currentStep === 'invitation') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  return (
    <div className="engagement-website">
      <MusicControls />

      <AnimatePresence mode="wait">
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            className="step-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RingIntro onOpen={handleOpenInvitation} />
          </motion.div>
        )}

        {currentStep === 'envelope' && (
          <motion.div
            key="envelope"
            className="step-envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InvitationEnvelope
              isOpen={isEnvelopeOpen}
              onOpen={handleOpenEnvelope}
            >
              <InvitationCard />
            </InvitationEnvelope>
          </motion.div>
        )}

        {currentStep === 'invitation' && (
          <motion.div
            key="invitation"
            className="step-invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="invitation-section">
              <InvitationCard />
              
              <motion.div
                className="action-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                
              </motion.div>
            </div>

            <div className="countdown-section">
              <div className="forever-rings" aria-hidden="true">
                <span className="forever-ring forever-ring-left" />
                <span className="forever-ring forever-ring-right" />
              </div>
              <CountdownTimer />
            </div>

            <div className="controls-section">
              <motion.div
                className="control-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <VenueButton />
                <ShareInvitation />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EngagementWebsite;
