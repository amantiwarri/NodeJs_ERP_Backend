import mongoose from "mongoose";
const StatesSchema = new mongoose.Schema(
  {
    stateId: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: [true, "State name is required"],
    },
  },
  {
    timestamps: true,
  }
);

//instance methods, they are called on instance of Model.
StatesSchema.methods.getState = function (cb) {
  return mongoose.model("State").findOne({ stateId: this.stateId }, cb);
};

//statics method, they are called on Model name.
StatesSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

//Query Helper
StatesSchema.query.sortByName = function (name) {
  return this.sort({ [name]: 1 });
};

const State = mongoose.model("State", StatesSchema);
export default State;
