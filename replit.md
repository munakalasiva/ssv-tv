# TV Repair Service Website

## Overview
This is a React + Vite single-page application for a TV repair service business (SSV). The application provides information about TV repair services, allows customers to book appointments, view warranty information, contact the business, and read blog posts. It also includes an admin dashboard for managing bookings, contacts, services, gallery, and blog posts.

**Current State:** Frontend-only application configured for Replit environment. The app expects a backend API but runs standalone in development mode. Admin features will require a backend API to be fully functional.

**Last Updated:** November 26, 2025

## Recent Changes
- **November 26, 2025**: Initial Replit setup
  - Configured Vite dev server for Replit (port 5000, host 0.0.0.0)
  - Updated API configuration to use environment variables
  - Set up workflow for development server
  - Configured deployment settings for production
  - Updated .gitignore for Node.js and Vite

## Project Architecture

### Technology Stack
- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.2
- **Routing:** React Router DOM 7.9.5
- **Styling:** Tailwind CSS 4.1.17
- **Animations:** Framer Motion 12.23.24
- **HTTP Client:** Axios 1.13.2
- **Icons:** Lucide React, React Icons

### Project Structure
```
├── public/               # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── blogs/           # Blog components (BlogCard, BlogDetails, BlogList, BlogPage)
│   ├── components/      # Reusable components (Navbar, Footer, etc.)
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin dashboard pages
│   │   ├── About.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── Warranty.jsx
│   ├── api.js           # Axios API configuration
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

### Key Features
1. **Public Pages:**
   - Home page with service overview
   - Services listing
   - Warranty information
   - Booking form for appointments
   - About page
   - Contact form
   - Blog section

2. **Admin Dashboard:**
   - Login authentication (token-based)
   - Manage bookings
   - View contact form submissions
   - Manage gallery images
   - Create/edit/delete blog posts
   - Manage services

### Backend API Integration
The app is configured to communicate with a backend API at the URL specified in the `VITE_API_BASE_URL` environment variable (defaults to `http://localhost:5000/api`).

**API Endpoints Expected:**
- `/bookings` - GET, POST (booking management)
- `/contacts` - GET, POST (contact form submissions)
- `/services` - GET, POST, PUT, DELETE (service management)
- `/gallery` - GET, POST, DELETE (gallery management)
- `/blogs` - GET, POST, PUT, DELETE (blog management)
- `/admin/login` - POST (admin authentication)

**Note:** The backend is not included in this repository. To use admin features, you'll need to:
1. Set up a backend API server
2. Update the `VITE_API_BASE_URL` environment variable to point to your backend

## Development

### Running Locally
The app runs automatically via the configured workflow. To manually start:
```bash
npm run dev
```
Access at: `http://localhost:5000` (or use the Replit webview)

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Environment Variables

### Development & Production
- **VITE_API_BASE_URL**: Backend API base URL (default: `http://localhost:5000/api`)
  - Update this to your actual backend API URL when deploying

## Deployment

The project is configured for Replit's autoscale deployment:
- **Build command:** `npm run build`
- **Run command:** `npm run preview`
- **Type:** Autoscale (stateless web app)

To deploy:
1. Ensure `VITE_API_BASE_URL` is set to your production backend URL
2. Click the "Deploy" button in Replit
3. The app will build and deploy automatically

## Notes
- This is a frontend-only application
- Admin features require a backend API to function
- Authentication uses localStorage for token storage
- The app uses responsive design with Tailwind CSS
- Images and assets are stored in `src/assets/`

## Standalone Mode (No Backend)
When running without a backend API, the application will:
- Display public pages (Home, About, Services, Warranty, Contact) with static content
- Show "No gallery items found" on the Home page gallery section
- Show "Loading services..." on the Services page
- Log API errors to the console (expected behavior)
- Contact form submissions will show success message but not actually send data
- Admin login will not work without a backend authentication endpoint
