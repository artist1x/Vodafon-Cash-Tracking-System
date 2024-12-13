const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // MongoDB URI from the environment variable (either MongoDB Atlas or local MongoDB)
    const uri = process.env.MONGODB_URI; // Make sure this is set in your .env file

    // Connect to MongoDB without the deprecated options
    await mongoose.connect(uri);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


const disconnectDB = async () => {
  try {
    // غلق الاتصال بـ MongoDB
    await mongoose.connection.close();
    console.log('MongoDB disconnected successfully');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };
