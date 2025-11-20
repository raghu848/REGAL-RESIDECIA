const express = require('express');
const router = express.Router();
// We'll use a mock array to store inquiries when MongoDB is not available
let mockInquiries = [];

// POST route for submitting inquiry form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format' 
      });
    }
    
    // Create inquiry object
    const newInquiry = {
      _id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    };
    
    // Try to save to MongoDB if available, otherwise use mock storage
    try {
      const Inquiry = require('../models/Inquiry');
      const inquiry = new Inquiry(newInquiry);
      await inquiry.save();
      res.status(201).json({ 
        message: 'Inquiry submitted successfully', 
        inquiry 
      });
    } catch (dbError) {
      // Use mock storage if MongoDB is not available
      mockInquiries.push(newInquiry);
      res.status(201).json({ 
        message: 'Inquiry submitted successfully (mock mode)', 
        inquiry: newInquiry 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to submit inquiry', 
      details: error.message 
    });
  }
});

// GET route for fetching all inquiries (for admin purposes)
router.get('/', async (req, res) => {
  try {
    // Try to fetch from MongoDB if available, otherwise use mock storage
    try {
      const Inquiry = require('../models/Inquiry');
      const inquiries = await Inquiry.find().sort({ createdAt: -1 });
      res.status(200).json(inquiries);
    } catch (dbError) {
      // Use mock storage if MongoDB is not available
      const sortedInquiries = [...mockInquiries].sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      res.status(200).json(sortedInquiries);
    }
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch inquiries', 
      details: error.message 
    });
  }
});

module.exports = router;