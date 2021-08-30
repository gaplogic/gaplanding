require("dotenv").config();

import diskdb from "diskdb";
import Joi from "joi";

// DATABASE
diskdb.connect("./db/", ["posts"]);
export const db = diskdb;

// SCHEMAS
export const postSchema = Joi.object({
  _id: Joi.string().alphanum().length(32),
  title: Joi.string().required(),
  text: Joi.string().required(),
});
