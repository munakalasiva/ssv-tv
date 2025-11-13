# TV Repair Services Website

## Overview
This is a professional TV repair services website built with React + Vite. The site showcases SSV Enterprises' TV repair services, featuring a modern, animated UI with brand showcases, customer testimonials, and booking functionality.

## Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM 7

## Project Structure
- `/src/components/` - Reusable components (Navbar, Footer, WhatsApp/Call buttons, Cards)
- `/src/pages/` - Page components (Home, Services, Warranty, Booking, About, Contact)
- `/src/assets/` - Images, logos, and video files
- `/public/` - Static assets

## Key Features
- Video background hero section
- Animated stats cards
- Brand carousel with auto-scroll
- Customer testimonials
- Responsive design
- WhatsApp and Call floating action buttons
- Multi-page navigation

## Development
- **Dev Server**: Runs on port 5000 at 0.0.0.0
- **Command**: `npm run dev`
- **HMR**: Configured for Replit proxy with WebSocket support

## Deployment
- **Type**: Autoscale (stateless web app)
- **Build**: `npm run build`
- **Preview**: Vite preview server on port 5000

## Configuration Notes
- Vite configured with `allowedHosts: true` for Replit proxy compatibility
- HMR configured with WSS protocol on port 443 for Replit environment
- Fixed styled-jsx syntax issues (replaced with standard React style tags)

## Recent Changes (Nov 13, 2025)
- Imported from GitHub
- Configured for Replit environment
- Fixed Vite host allowance for proxy
- Removed Next.js styled-jsx syntax in favor of standard React
- Set up development workflow and deployment configuration
- All dependencies installed and working
