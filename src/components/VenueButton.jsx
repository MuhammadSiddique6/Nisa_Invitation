import { MapPin } from 'lucide-react';
import './VenueButton.css';

const VENUE_GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Noor+Jahan+Wedding+Hall';

const VenueButton = () => {
  const handleViewLocation = () => {
    window.open(VENUE_GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className="venue-button"
      onClick={handleViewLocation}
      aria-label="View venue location on Google Maps"
    >
      <MapPin size={20} />
      <span>View Location</span>
    </button>
  );
};

export default VenueButton;
