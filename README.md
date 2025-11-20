# Regal Residencia - Luxury Real Estate Website

A premium dark-themed single-page website for the Regal Residencia luxury residential project in Mohali, built with the MERN stack.

## Project Overview

This project showcases a sophisticated, modern website for Regal Residencia - a luxury residential-commercial project located in Mohali Sector 114. The site features a rich dark color palette with gold accents, elegant typography, and smooth animations to create a premium brand experience.

## Features

- **Dark Theme Design**: Sophisticated dark interface with gold accents for a luxury feel
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Modern UI Components**: Elegant cards, grids, and sections with soft shadows and gradients
- **Inquiry Form**: Secure, user-friendly form with MongoDB integration
- **Integration Ready**: Placeholders for Facebook Pixel, WhatsApp chat, and CRM connectors

## Technology Stack

- **Frontend**: React.js with Styled Components and Framer Motion
- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Deployment**: Ready for deployment with npm scripts

## Project Structure

```
regal-residencia/
├── client/                 # React frontend
│   ├── public/             # Static assets
│   └── src/                # React components and styles
│       ├── components/     # Reusable UI components
│       ├── App.js          # Main application component
│       └── index.js        # Entry point
├── models/                 # Mongoose models
├── routes/                 # API routes
├── server.js               # Express server
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd regal-residencia
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Create a `.env` file in the root directory with your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the Application

1. Start the development server:
   ```bash
   # In the root directory
   npm run dev
   ```

2. Start the React frontend:
   ```bash
   # In a new terminal, navigate to client directory
   cd client
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Building for Production

1. Build the React frontend:
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Integration Points

The website includes placeholders for:

1. **Facebook Pixel**: Tracking script in `public/index.html`
2. **WhatsApp Chat**: Widget placeholder in `public/index.html`
3. **CRM Connectors**: Backend API endpoints ready for CRM integration

## Customization

### Styling

The website uses CSS variables for consistent theming. You can modify colors in the `GlobalStyle` component in `App.js`:

```css
:root {
  --primary-dark: #0a0a0a;
  --secondary-dark: #121212;
  --accent-gold: #d4af37;
  --accent-silver: #c0c0c0;
  --text-light: #f5f5f5;
  --text-muted: #aaaaaa;
}
```

### Content

All content is easily customizable in the React components:
- Project details in `ProjectOverview.js`
- Amenities in `Amenities.js`
- Living spaces in `LivingSpaces.js`
- Testimonials in `Testimonials.js`

## API Endpoints

- `POST /api/inquiry` - Submit inquiry form data

## Deployment

The application can be deployed to any platform that supports Node.js applications:
- Heroku
- AWS Elastic Beanstalk
- DigitalOcean App Platform
- Vercel (for frontend) + separate backend hosting

## Development Standards

- **Code Style**: Follows standard JavaScript/React best practices
- **Component Structure**: Reusable, modular components
- **Accessibility**: Semantic HTML and ARIA attributes
- **Performance**: Optimized images and lazy loading

## Future Improvements

- Add more interactive elements
- Implement advanced animations
- Add virtual tour integration
- Enhance form validation
- Add admin dashboard for inquiry management

## License

This project is proprietary to Regal Residencia and should not be distributed without permission.

## Support

For support, contact the development team or project manager.