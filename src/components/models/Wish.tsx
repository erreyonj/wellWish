import React from 'react'
import mongoose, {Document, Schema} from 'mongoose'

export interface WishItem extends Document {
  title: String,
  subtitle: String,
  caption: String,
  well: String
}

const WishSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
  well: {
    type: String,
  }
});

const Wish  = mongoose.models.Wish || mongoose.model<WishItem>("Wish", WishSchema)


export default Wish;



