import { connect } from "mongoose";

export default async function connectMongoDb() {
  try {
    await connect("mongodb://127.0.0.1:27017/rentap");
    console.log("MongoDB Connected :)");
  } catch (error) {
    console.log("MongoDB Not Connected :(", error);
  }
}
