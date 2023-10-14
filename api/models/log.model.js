import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    guid_device: {
      type: String,
    },
    HR: {
      type: Number,
      default: null
    },
    RR: {
      type: Number,
      default: null
    },
    rrRMS: {
      type: Number,
      default: null
    },
    date_created: {
      type: String,
    },
    time_created: {
      type: String,
    },
    date_update: {
      type: String,
    },
    time_update: {
      type: String,
    },
    timestamp: {
      type: Number,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    hour: {
      type: String,
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    datetime: {
      type: String,
    },
    create_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Log = mongoose.model("log", LogSchema); 

export default Log;