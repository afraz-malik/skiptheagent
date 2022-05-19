import mongoose from 'mongoose'
const Schema = mongoose.Schema

const adsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'userid. id is a required field'],
    },
    city: {
      type: String,
      required: true,
    },
    car_info: {
      type: String,
    },
    model: {
      type: String,
    },
    mileage_km: {
      type: String,
    },
    photos: {
      type: Array,
    },
    description: {
      type: String,
    },
    selling: {
      transaction_type: {
        type: String,
      },
      price: {
        type: String,
      },
    },
    details: {
      exterior_color: {
        type: String,
      },
      reg_city: {
        type: String,
      },
      engine_type: {
        type: String,
      },
      engine_capacity: {
        type: String,
      },
      transmission: {
        type: String,
      },
      assembly: {
        type: String,
      },
      body_type: {
        type: String,
      },
      make: {
        type: String,
      },
    },
    features: {
      abs: {
        type: Boolean,
      },
      airbags: {
        type: Boolean,
      },
      am_fm: {
        type: Boolean,
      },
      ac: {
        type: Boolean,
      },
      power_mirrors: {
        type: Boolean,
      },
      power_steering: {
        type: Boolean,
      },
      cd_player: {
        type: Boolean,
      },
      cassete: {
        type: Boolean,
      },
      immobilizer: {
        type: Boolean,
      },
      power_locks: {
        type: Boolean,
      },
      nav_system: {
        type: Boolean,
      },
    },
    contact_info: {
      phone: {
        type: String,
      },
      secondar_phone: {
        type: String,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    required: true,
    default: '',
  }
)

export default mongoose.model('ads', adsSchema)
