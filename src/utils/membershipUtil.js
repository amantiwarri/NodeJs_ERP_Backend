import Member from "../model/member.js";
import MemberRegistration from "../model/memberRegistration.js";

// Function to find max regId
export async function findMaxRegId() {
  try {
    const maxRegId = await Member.findOne().sort("-regId");
    return maxRegId ? maxRegId.regId + 1 : 1; // Return 1 if no documents found
  } catch (error) {
    console.error("Error finding max regId:", error);
    throw error;
  }
}

export async function findMaxFileNo() {
  try {
    const result = await Member.aggregate([
      {
        $group: {
          _id: null,
          maxFileNo: { $max: "$fileNo" },
        },
      },
    ]);
    return result[0] ? result[0].maxFileNo + 1 : 1;
  } catch (error) {
    console.error("Error found in Max File no" + error);
    throw error;
  }
}

export async function findMaxAppId() {
  try {
    const result = await MemberRegistration.aggregate([
      {
        $group: {
          _id: null,
          maxAppId: { $max: "$appId" },
        },
      },
    ]);
    return result[0] ? result[0].maxAppId + 1 : 1;
  } catch (error) {
    console.error("Error found in Max App id" + error);
    throw error;
  }
}
