# SSV Electronics - TV Repair Services Website

## Overview
SSV Electronics is a professional TV repair services website built with React, Vite, and Tailwind CSS. The website features a modern, responsive design inspired by Shiftwave.com, showcasing the company's expertise in repairing all major TV brands with reliable warranty support.

## Recent Changes (November 13, 2025)

### Hero Banner Redesign - Shiftwave Style
Complete redesign of the hero section to match Shiftwave.com's modern aesthetic:

**Key Features:**
- **Container**: Max-width 1250px for optimal desktop viewing
- **Video Background**: Auto-playing technician video with 50% dark overlay for text visibility
- **Color Scheme**: 
  - Primary Red: #D71920
  - Secondary Navy: #001F3F
  - Hover states: #B01519
- **Typography**: Poppins font family with fluid responsive sizing using clamp()
- **Layout**:
  - Desktop: Left-aligned content with right-side statistic cards
  - Mobile: Centered content with 2x2 stat grid below hero
- **Animations**: Smooth fade-in and slide-up effects using Framer Motion

### Floating Social Icons
Added fixed-position social media icons on the right side:
- Facebook (brand blue)
- Instagram (gradient)
- WhatsApp (green) - with click-to-chat functionality

### Technical Implementation
1. **Vite Configuration** (`vite.config.js`):
   - Server configured for Replit environment
   - Host: 0.0.0.0, Port: 5000
   - AllowedHosts: true (required for Replit proxy)
   - HMR: WebSocket over port 443

2. **Deployment Configuration**:
   - Target: Autoscale (stateless web application)
   - Build: `npm run build`
   - Run: `npx vite preview --host 0.0.0.0 --port 5000`

3. **Font Integration**:
   - Google Fonts: Poppins and Inter
   - Applied globally via index.css

## Project Structure
```
├── src/
│   ├── assets/          # Images, logos, and videos
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SocialIcons.jsx  # NEW: Floating social media icons
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # UPDATED: Shiftwave-style hero section
│   │   ├── Services.jsx
│   │   ├── Warranty.jsx
│   │   ├── Booking.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # UPDATED: Added Poppins font, new color variables
├── public/
├── vite.config.js       # UPDATED: Replit environment configuration
└── package.json
```

## Technologies Used
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.2
- **Styling**: 
  - Tailwind CSS 4.1.17
  - PostCSS with Autoprefixer
- **Routing**: React Router DOM 7.9.5
- **Animations**: Framer Motion 12.23.24
- **Icons**: 
  - React Icons 5.5.0
  - Lucide React 0.553.0
- **HTTP Client**: Axios 1.13.2

## Development Workflow

### Running the Development Server
The `dev` workflow is configured to automatically start the development server:
```bash
npm run dev
```
Server runs on: http://localhost:5000 (mapped to Replit webview)

### Building for Production
```bash
npm run build
```

### Deployment
The project is configured for Replit Autoscale deployment. Click the "Deploy" button in Replit to publish to production.

## Supported TV Brands
Samsung, LG, Sony, Mi, Panasonic, OnePlus, Vu, TCL, BPL, and more.

## Features
1. **Responsive Hero Section** with video background
2. **Service Cards** showcasing key features
3. **Brand Showcase** with animated logo carousel
4. **Customer Testimonials** with ratings
5. **Floating Social Icons** for easy customer contact
6. **Multi-page Navigation** (Home, Services, Warranty, Booking, About, Contact)
7. **Call-to-Action Buttons** throughout the site
8. **Smooth Scroll Animations** using Framer Motion

## Contact Information
- Phone: +91 9291488856
- WhatsApp: Click the floating green icon
- Social Media: Facebook and Instagram links available via floating icons

## Browser Compatibility
Tested and optimized for modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Performance Optimizations
- Lazy loading for images
- Video optimization with autoplay and loop
- Code splitting with Vite
- Tailwind CSS purging for minimal bundle size
- Responsive images for different screen sizes

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text for readability

## Future Enhancements
Consider adding:
- Online booking system integration
- Live chat support
- Before/after repair galleries
- Customer review submission form
- Service area map integration
- Multi-language support

---

**Last Updated**: November 13, 2025
**Version**: 1.0.0 (Shiftwave Redesign)
