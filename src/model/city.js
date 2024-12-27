import mongoose from "mongoose";

const citySchema = new mongoose.Schema(
  {
    cityId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      length: 200,
      required: [true, "City name is required"],
    },
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
    status: {
      type: String,
      enum: ["y", "n"],
      default: "y",
    },
  },
  {
    timestamps: true,
  }
);

const City = mongoose.model("City", citySchema);
export default City;
