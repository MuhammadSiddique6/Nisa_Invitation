import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import './ShareInvitation.css';

const ShareInvitation = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Daniyal & Nisa Engagement Invitation',
      text: 'You are invited to the engagement ceremony of Daniyal Arshad & Nisa Farhan on 1 November 2026 at 7:00 PM at Noor Jahan Wedding Hall.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        handleCopyLink();
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        handleCopyLink();
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <button
      className="share-button"
      onClick={handleShare}
      aria-label="Share invitation"
    >
      {copied ? <Check size={20} /> : <Share2 size={20} />}
      <span>{copied ? 'Copied!' : 'Share Invitation'}</span>
    </button>
  );
};

export default ShareInvitation;
