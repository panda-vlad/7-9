import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
mongoose.connect(process.env.MLAB_URL, { useNewUrlParser: true })
export const Users = mongoose.model("Users", {
  userId: {
    type:Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  }
})

export const Locations = mongoose.model("Locations", {
  locationId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  coords: {
    type: String,
    required: true
  }
})
