const mongoose = require('mongoose');

async function connectDb() {
  const URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URI)

    console.log('Connected to MongoDB!!')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
    process.exit(1)
  }
}

module.exports = connectDb;
