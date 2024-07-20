import React from 'react'
import mongoose from 'mongoose'

const SingleWishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  img: {
    type: Image,
    required: false,
  },
  caption: {
    type: String,
    required: true,
  },
})


export default mongoose.model("Wish", SingleWishSchema)
// const Wish = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Wish
