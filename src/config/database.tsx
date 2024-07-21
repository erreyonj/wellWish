import React from 'react'
import mongoose from 'mongoose';

const connection: { isConnected?: number} = {}

const connectDB = async () => {
    if (connection.isConnected){
        return
    }

    try {
        const db = await mongoose.connect(process.env.DB_STRING!);
        connection.isConnected = db.connections[0].readyState
        console.log(`MongoDB Connected: ${db.connection.host}`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };

export default connectDB
