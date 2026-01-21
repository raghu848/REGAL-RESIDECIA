require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'gdplmohali@gmail.com',
    pass: process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Regal Residencia Backend API is running!');
});

// Inquiry form submission endpoint
app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !phone || !message) {
      return res.status(400).json({ 
        error: 'Name, phone, and message are required fields' 
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'gdplmohali@gmail.com',
      to: process.env.EMAIL_TO || 'gdplmohali@gmail.com',
      subject: `New Inquiry from Regal Residencia - ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This inquiry was received from the Regal Residencia website.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Inquiry submitted successfully! We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({ 
      error: 'Failed to submit inquiry. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints:`);
  console.log(`GET  / - Health check`);
  console.log(`POST /api/inquiry - Submit inquiry form`);
  console.log(`GET  /health - Health status`);
});