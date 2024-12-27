import { response } from "express";
import State from "../model/state.js";
import City from "../model/city.js";
import mongoose from "mongoose";
export async function insertState() {
  //const city = await City.findOne({ cityId: 1 }).populate("State").exec();
  /* const state = await State.findOne({ stateId: 1 })
    .populate({
      path: "city",
    })
    .exec(); */
  ///console.log(city);
  /* const city = City.aggregate([
    {
      $lookup: {
        from: "states",
        localField: "stateId",
        foreignField: "stateId",
        as: "state",
      },
    },
  ])
    .then((results) => {
      console.log(results);
    })
    .catch((err) => {
      console.error(err);
    }); */
  //console.log(state);
  //const data = await fetchData();
  /* for (const element of data) {
  } */
  //console.log(data);
  /* 
  //Instance method
  const state = new State({ stateId: 12 });
  console.log(await state.getState()); */
  /*
   //Statics Method call
  const states = await State.findByName("");
  console.log(states); */
  /* //Query Helper custom created function in Schema definition (sortByName)
  const state = await State.find().sortByName("name").exec();
  console.log(state); */
  //throw new Error();
  //fetchData();
}

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
