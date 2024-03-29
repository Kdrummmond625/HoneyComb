import mongoose from 'mongoose';
import User from './models/userSchema.js';
import bcrypt from "bcryptjs"
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB.");

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);


    const admin = new User({
      username: "adminUsername",
      email: "admin@example.com",
      password: hashedPassword, // Use a hashed password
      roles: ['user', 'admin'],
      // Include other necessary fields as per your schema
    });

    await admin.save();
    console.log("Admin user created successfully.");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }

  mongoose.connection.close();
};

createAdmin();
