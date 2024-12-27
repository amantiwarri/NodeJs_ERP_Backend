import Member from "../model/member.js";
import MemberContactDetail from "../model/memberContactDetail.js";
import MemberRegistration from "../model/memberRegistration.js";
import {
  findMaxAppId,
  findMaxFileNo,
  findMaxRegId,
} from "../utils/membershipUtil.js";

export async function getMembers(req, res, next) {
  //res.send("Get Members");

  const members = await Member.find()
    .aggregate([
      {
        from: "membercontactdetails",
        localField: "_id",
        foreignField: "regId",
        as: "contactDetails",
      },
    ])
    .exec();
  console.log(members);
  res.send("Get Members");
}

export const getMemberByFilter = (req, res) => {
  const { org } = req.body;
  res.send("Member List with Filters : " + org);
};

export async function members(req, res) {
  const {
    dgftRcmcDetail,
    constitution,
    estdYear,
    panNumber,
    tanNumber,
    exporterType,
    exportPerformance,
    products,
    otherProducts,
    iec,
  } = req.body;
  const object = req.body;

  /* const regId = await findMaxRegId()
    .then((regId) => {
      return regId;
    })
    .catch((error) => {
      console.log("Something went wrong: " + error);
      res.sendStatus(400).send({ message: "Error finding max regId", error });
    }); */
  const fileNo = await findMaxFileNo()
    .then((fileNo) => {
      return fileNo;
    })
    .catch((error) => {
      res.sendStatus(400).send({ message: "Error finding max fileNo", error });
    });

  const member = await Member.create({
    memberId: null,
    fileNo: fileNo,
    status: "A",
    membershipGrantDate: null,
    username: "",
    password: "",
    workflowId: "ws1",
    membershipStatus: "",
  })
    .then((data) => {
      return data.toJSON();
    })
    .catch((error) => console.log(error.message));

  if (member) {
    object["regId"] = member["regId"];
    /* const appId = await findMaxAppId()
      .then((appId) => {
        return appId;
      })
      .catch((error) => {
        res
          .sendStatus(400)
          .send({ message: "Error finding max fileNo", error });
      }); */
    const memberRegistration = await MemberRegistration.create({
      //appId: appId,
      regId: member._id,
      panNo: panNumber,
      tanNo: tanNumber,
      exporterType: exporterType,
      constitution: constitution,
      constitutionYear: estdYear,
      iecNo: iec.number,
      iecIssueDate: iec.iecIssueDate,
      iecIssuingAuthority: iec.iecIssuingAuthority,
      station: iec.station,
    })
      .then((data) => {
        return data.toJSON();
      })
      .catch((error) => console.log(error.message));

    if (memberRegistration) {
      const insertMany = modifyObject(
        object,
        member._id,
        memberRegistration._id
      );
      console.log(insertMany);
      insertManyMemberContactDetail(insertMany);
      res.send("Members:" + insertMany[0].name);
    }
  }
}

function insertManyMemberContactDetail(obj) {
  const response = MemberContactDetail.insertMany(obj)
    .then((response) => {
      console.log(response);
      response.toJSON();
    })
    .catch((error) => {
      console.log("Error: " + error.message);
    });
  return response;
}

function modifyObject(object, regId, appId) {
  const insertMany = [];
  for (const key in object) {
    switch (key) {
      case "organization":
        object["organization"]["codeId"] = 2;
        object["organization"]["regId"] = regId;
        //object["organization"]["appId"] = appId;
        insertMany.push(object["organization"]);
        break;
      case "billingDetails":
        object["billingDetails"]["codeId"] = 116;
        object["organization"]["regId"] = regId;
        //object["organization"]["appId"] = appId;
        insertMany.push(object["billingDetails"]);
        break;
      case "contactPerson":
        object["contactPerson"]["codeId"] = 5;
        object["organization"]["regId"] = regId;
        //object["organization"]["appId"] = appId;
        insertMany.push(object["contactPerson"]);
        break;
      case "directors":
        insertMany.push(
          ...object["directors"].map((directer) => {
            directer.codeId = 3;
            directer.regId = regId;
            //directer.appId = appId;
            return directer;
          })
        );
        break;
      case "officeAddress":
        insertMany.push(
          ...object["officeAddress"].map((office) => {
            office.codeId = 2;
            office.regId = regId;
            //office.appId = appId;
            return office;
          })
        );
        break;
    }
  }

  return insertMany;
}
