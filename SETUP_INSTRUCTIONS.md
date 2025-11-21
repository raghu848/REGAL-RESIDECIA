# Regal Residencia - Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version 14 or higher)
- MongoDB (local installation or cloud instance like MongoDB Atlas)
- npm (comes with Node.js) or yarn

## Project Structure

The project follows a standard MERN stack structure:
```
regal-residencia/
├── client/                 # React frontend application
│   ├── public/             # Static assets
│   └── src/                # React components and application logic
├── models/                 # Mongoose data models
├── routes/                 # Express API routes
├── server.js               # Main server file
├── .env                    # Environment variables
├── package.json            # Server dependencies
└── README.md               # Project documentation
```

## Installation Steps

### 1. Clone or Download the Project

If you haven't already, download the project files to your local machine.

### 2. Install Server Dependencies

Navigate to the project root directory and install the server dependencies:

```bash
cd regal-residencia
npm install
```

### 3. Install Client Dependencies

Navigate to the client directory and install the frontend dependencies:

```bash
cd client
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root directory with the following content:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/regalresidencia
```

If you're using MongoDB Atlas or another cloud MongoDB service, replace the `MONGODB_URI` with your connection string.

### 5. Start MongoDB

If you're using a local MongoDB installation, make sure the MongoDB service is running:

- **Windows**: Start the MongoDB service from Services or run `mongod` command
- **Mac/Linux**: Run `mongod` in a terminal

## Running the Application

### Development Mode

To run the application in development mode with hot reloading:

1. **Start the server** (in the project root directory):
   ```bash
   npm run dev
   ```

2. **Start the client** (in a new terminal, navigate to the client directory):
   ```bash
   cd client
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Mode

To build and run the application in production mode:

1. **Build the React frontend** (from the client directory):
   ```bash
   cd client
   npm run build
   ```

2. **Start the server** (from the project root directory):
   ```bash
   cd ..
   npm start
   ```

The application will be available at http://localhost:5000 (both frontend and backend served from the same port).

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/inquiry` - Submit a new inquiry
- `GET /api/inquiry` - Get all inquiries (for admin purposes)

## Integration Setup

### Facebook Pixel

To integrate Facebook Pixel:
1. Obtain your Facebook Pixel ID
2. Add the Facebook Pixel base code to `client/public/index.html` in the designated placeholder area

### WhatsApp Chat

To integrate WhatsApp chat:
1. Obtain your WhatsApp business number
2. Add the WhatsApp chat widget code to `client/public/index.html` in the designated placeholder area

### CRM Integration

To integrate with a CRM system:
1. Update the backend API routes in `routes/inquiry.js` to send data to your CRM
2. Add CRM API credentials to the `.env` file

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT value in `.env` file
2. **MongoDB connection error**: Verify MongoDB is running and connection string is correct
3. **Dependency installation errors**: Clear npm cache with `npm cache clean --force` and retry
4. **CORS errors**: The CORS middleware is already configured, but you may need to adjust settings for production

### Network Issues

If you encounter network issues during dependency installation:
1. Check your internet connection
2. If behind a corporate firewall, configure npm proxy settings
3. Try using a different network or VPN

## Customization

### Styling

All styling uses CSS variables defined in the `GlobalStyle` component in `client/src/App.js`. You can modify colors by changing these variables:

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
- Project details in `client/src/components/ProjectOverview.js`
- Amenities in `client/src/components/Amenities.js`
- Living spaces in `client/src/components/LivingSpaces.js`
- Testimonials in `client/src/components/Testimonials.js`
- Contact information in `client/src/components/InquiryForm.js`

## Deployment

### Hosting Options

1. **Heroku**:
   - Set up MongoDB with MongoDB Atlas
   - Deploy using Heroku CLI or GitHub integration

2. **DigitalOcean App Platform**:
   - Create separate services for frontend and backend
   - Configure environment variables

3. **AWS**:
   - Use Elastic Beanstalk for backend
   - Use S3 + CloudFront for frontend

4. **Vercel**:
   - Deploy frontend to Vercel
   - Host backend separately (Heroku, DigitalOcean, etc.)

### Environment Variables for Production

When deploying to production, make sure to set the following environment variables:
- `NODE_ENV=production`
- `PORT=process.env.PORT` (or your hosting platform's port)
- `MONGODB_URI` (your production MongoDB connection string)

## Support

For any issues or questions regarding the setup, please refer to:
- The project documentation in `README.md`
- The project summary in `PROJECT_SUMMARY.md`
- Contact the development team