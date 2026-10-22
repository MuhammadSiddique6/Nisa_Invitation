# Daniyal & Nisa Engagement Invitation

A luxurious, interactive Pakistani engagement invitation website featuring elegant animations, cinematic transitions, and a live countdown timer.

## Features

- **Cinematic Opening**: Two golden engagement rings with realistic animations and sparkle effects
- **Interactive Envelope**: Click-to-open envelope animation with wax seal
- **Beautiful Invitation Card**: Mughal-inspired design with elegant typography
- **Live Countdown Timer**: Counts down to 1 November 2026 at 7:00 PM Pakistan Standard Time (UTC+05:00)
- **Background Music**: Optional wedding-style music with mute/unmute controls
- **Venue Location**: Google Maps integration for the wedding venue
- **Share Functionality**: Web Share API with copy-link fallback
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Accessibility**: Keyboard navigation, focus states, and reduced-motion support

## Event Details

- **Groom**: Daniyal Arshad
- **Bride**: Nisa Farhan
- **Family**: Grand daughter of Mr. and Mrs. Ehsan Khan
- **Date**: 1 November 2026
- **Time**: 7:00 PM – 10:00 PM onwards
- **Venue**: Noor Jahan Wedding Hall

## Technology Stack

- React.js
- Vite
- Framer Motion (animations)
- Lucide React (icons)
- Google Fonts (Cormorant Garamond, Playfair Display)

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization

### Replacing the Invitation Image

If you have a custom invitation artwork image:

1. Place your image in the `public/images/` folder
2. Update `src/components/InvitationCard.jsx` to use your image:
   ```jsx
   import invitationImage from '/images/your-invitation.png';
   
   // Add the image in your component
   <img src={invitationImage} alt="Engagement Invitation" className="custom-invitation-image" />
   ```
3. Add corresponding CSS in `InvitationCard.css` for the image styling

### Replacing Ring Images

If you have custom ring images:

1. Place transparent PNG/WebP images in `public/images/`
2. Update `src/components/RingIntro.jsx`:
   ```jsx
   import ringLeft from '/images/ring-left.png';
   import ringRight from '/images/ring-right.png';
   
   // Replace the CSS rings with images
   <img src={ringLeft} alt="Ring" className="ring-image" />
   ```

### Replacing Envelope Images

If you have custom envelope artwork:

1. Place envelope images in `public/images/`
2. Update `src/components/InvitationEnvelope.jsx` to use your images

### Adding Background Music

1. Place your music file in `public/music/` folder
2. Name it `wedding-music.mp3` or update the path in `src/components/MusicControls.jsx`:
   ```jsx
   src="/music/your-music-file.mp3"
   ```

### Changing Google Maps Location

Update the venue URL in `src/components/VenueButton.jsx`:

```jsx
const VENUE_GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Your+Venue+Name+Here';
```

### Updating Event Information

Edit the event details in `src/components/InvitationCard.jsx`:

- Names, date, time, venue, and family introduction
- All text is clearly marked and easy to find

### Changing Countdown Date

Update the target date in `src/components/CountdownTimer.jsx`:

```jsx
const targetDate = new Date('2026-11-01T19:00:00+05:00');
```

Format: `YYYY-MM-DDTHH:mm:ss+TZ` where TZ is the timezone offset (e.g., +05:00 for Pakistan Standard Time)

## Project Structure

```
nisa-farhan-inviatation/
├── public/
│   ├── images/          # Place custom images here
│   ├── music/           # Place music files here
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── RingIntro.jsx           # Opening rings animation
│   │   ├── RingIntro.css
│   │   ├── InvitationEnvelope.jsx  # Envelope with opening animation
│   │   ├── InvitationEnvelope.css
│   │   ├── InvitationCard.jsx      # Main invitation card
│   │   ├── InvitationCard.css
│   │   ├── CountdownTimer.jsx      # Live countdown timer
│   │   ├── CountdownTimer.css
│   │   ├── MusicControls.jsx       # Music player controls
│   │   ├── MusicControls.css
│   │   ├── VenueButton.jsx         # Google Maps button
│   │   ├── VenueButton.css
│   │   ├── ShareInvitation.jsx     # Share functionality
│   │   ├── ShareInvitation.css
│   │   ├── EngagementWebsite.jsx   # Main component with animation flow
│   │   └── EngagementWebsite.css
│   ├── App.jsx                     # (Not used, replaced by EngagementWebsite)
│   ├── App.css
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Animation Flow

1. **Step 1**: Website loads with two golden rings
2. **Step 2**: Rings rotate and sparkle with introductory text
3. **Step 3**: Visitor clicks "Open Your Invitation"
4. **Step 4**: Rings fade out, closed envelope appears
5. **Step 5**: Visitor clicks envelope or wax seal
6. **Step 6**: Envelope opens, card slides out
7. **Step 7**: Full invitation becomes visible with text animations
8. **Step 8**: Scroll down to see countdown and controls
9. **Step 9**: Replay animation button available

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Uses Framer Motion for smooth, GPU-accelerated animations
- Reduced-motion support for accessibility
- Lazy loading of components
- Optimized CSS with hardware acceleration

## Accessibility Features

- Keyboard navigation support
- Visible focus states on all interactive elements
- ARIA labels for screen readers
- Reduced-motion preference support
- Semantic HTML structure

## Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## Troubleshooting

### Music not playing
- Browsers require user interaction before playing audio
- Ensure the music file exists in `public/music/`
- Check browser console for errors

### Countdown showing wrong time
- Verify the target date format in `CountdownTimer.jsx`
- Check timezone offset (Pakistan is UTC+05:00)

### Images not loading
- Ensure images are in the `public/` folder
- Check file paths in component imports
- Verify image file names match exactly

## License

This project is created for personal use for Daniyal & Nisa's engagement ceremony.

## Contact

For questions or support, please contact the website administrator.
