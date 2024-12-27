import { Schema, model } from "mongoose";

const memberRegistrationSchema = new Schema({
  regId: {
    type: Schema.Types.ObjectId,
    ref: "Member",
  },
  panNo: {
    type: String,
  },
  exporterType: {
    type: String,
    enum: ["M", "E", "MM"],
  },
  constitution: {
    type: String,
  },
  constitutionYear: {
    type: String,
  },
  iecNo: {
    type: String,
    required: true,
  },
  iecIssueDate: {
    type: Date,
  },
  iecIssuingAuthority: {
    type: String,
  },
  ssiNo: {
    type: String,
  },
  ssiIssueDate: {
    type: Date,
  },
  ssiIssuingAuthority: {
    type: String,
  },
});

const MemberRegistration = model(
  "MemberRegistration",
  memberRegistrationSchema
);

export default MemberRegistration;
