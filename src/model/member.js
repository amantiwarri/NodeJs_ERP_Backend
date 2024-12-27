import mongoose from "mongoose";
const memberSchema = mongoose.Schema(
  {
    memberId: {
      type: Number,
    },
    fileNo: {
      type: Number,
      unique: [true, "File no should be unique"],
    },
    status: {
      type: String,
      enum: ["A", "I"],
      default: "A",
    },
    membershipGrantDate: {
      type: Date,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    workflowId: {
      type: String,
    },
    membershipStatus: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Member = mongoose.model("Member", memberSchema);

export default Member;
