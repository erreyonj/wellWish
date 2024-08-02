import React from 'react'
import mongoose, {Document, Schema} from 'mongoose'
import connectDB from "@/config/database";

makeWish().catch(err => console.log(err));

async function makeWish() {
  // 4. Connect to MongoDB
  await connectDB()

  const myWish = new Wish({
  title: 'Fathers',
  subtitle: 'Day',
  caption: 'Some words about Fathers day',
  well: 'Well ID'
  });
  await myWish.save();
}


// export interface WishItem extends Document {
//   title: String,
//   subtitle: String,
//   caption: String,
//   well: String
// }


interface WishItem {
  title: String,
  subtitle: String,
  caption: String,
  well: String
}


const WishSchema = new Schema<WishItem>({
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
  },
});


const Wish = mongoose.models.Wish || mongoose.model<WishItem>('Wish', WishSchema);

// const WishSchema: Schema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   subtitle: {
//     type: String,
//   },
//   caption: {
//     type: String,
//     required: true,
//   },
//   well: {
//     type: String,
//   },
// });

// const Wish  = mongoose.models.Wish || mongoose.model<WishItem>("Wish", WishSchema)


export default Wish;



