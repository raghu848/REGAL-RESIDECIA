# Regal Residencia - Quick Start Guide

## 🚀 Getting Started Quickly

Follow these simple steps to get the Regal Residencia website up and running:

### 1. **Prerequisites Check**
Make sure you have:
- [ ] Node.js (v14 or higher)
- [ ] MongoDB (local or cloud instance)
- [ ] Internet connection for downloading dependencies

### 2. **Install Dependencies**
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 3. **Configure Environment**
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/regalresidencia
```

### 4. **Start MongoDB**
Ensure MongoDB is running on your system.

### 5. **Launch Development Environment**
```bash
npm run dev
```

### 6. **Access the Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure Overview

```
regal-residencia/
├── 📦 package.json        # Server dependencies
├── 🖥️ server.js          # Express server
├── 🌐 .env               # Environment variables
├── 📁 models/            # Database models
├── 📁 routes/            # API routes
├── 📁 client/            # React frontend
│   ├── 📦 package.json   # Client dependencies
│   ├── 📁 public/        # Static assets
│   └── 📁 src/           # React components
│       ├── 📄 App.js     # Main app component
│       ├── 📄 index.js   # Entry point
│       └── 📁 components/ # UI components
└── 📄 README.md          # Documentation
```

## 🎯 Key Features Ready to Use

- ✅ Premium dark theme with gold accents
- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Inquiry form with MongoDB integration
- ✅ Integration points for Facebook Pixel, WhatsApp, and CRM
- ✅ Optimized for performance and accessibility

## 🛠️ Customization Points

1. **Colors**: Modify CSS variables in `client/src/App.js`
2. **Content**: Edit components in `client/src/components/`
3. **Images**: Replace placeholder URLs with your actual images
4. **Contact Info**: Update in `client/src/components/InquiryForm.js`

## 🚢 Deployment Preparation

1. Update `.env` with production MongoDB URI
2. Build client: `cd client && npm run build`
3. Start server: `npm start`

## 📞 Support

For detailed instructions, see:
- `SETUP_INSTRUCTIONS.md` - Complete setup guide
- `README.md` - Project documentation
- `PROJECT_SUMMARY.md` - Feature overview

---

**🎉 Your Regal Residencia luxury real estate website is ready to showcase premium living in Mohali!**