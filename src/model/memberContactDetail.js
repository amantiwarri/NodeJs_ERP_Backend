import { Schema, model } from "mongoose";

const memberContactDetailSchema = Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: "Member",
  },
  codeId: {
    type: Number,
  },
  name: {
    type: String,
    length: 255,
  },
  address: {
    addressLine1: {
      type: String,
      length: 200,
    },
    addressLine2: {
      type: String,
      length: 200,
    },
    zipCode: {
      type: String,
      length: 10,
    },
    city: {
      type: String,
      //ref: "City",
    },
    state: {
      type: String,
      //ref: "State",
    },
    country: {
      type: String,
      //ref: "Country",
    },
  },
  contact: {
    mobile: [
      {
        mobileNumber: {
          type: Number,
          length: 10,
        },
      },
    ],
    phone: [
      {
        phoneNumber: {
          type: String,
          length: 15,
        },
      },
    ],
    email: [
      {
        type: String,
      },
    ],
    website: {
      type: String,
    },
  },
  codeId: Number,
  gstNo: String,
  designation: String,
  dob: Date,
  isAuthorisedRepresentative: String,
});

const MemberContactDetail = model(
  "MemberContactDetail",
  memberContactDetailSchema
);

export default MemberContactDetail;
