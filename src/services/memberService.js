import State from "../model/state.js";

export async function getState() {
  const states = await State.find({}).exec();
  console.log(states);
  //return states;
}
