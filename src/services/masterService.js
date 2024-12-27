import City from "../model/city";

async function insertCity() {
  const city = new City({ cityId: 1, name: "Noida", stateId: 5 });
  city
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log("Error Occurred : " + err);
    });
  console.log(city);
}
export default insertCity;
