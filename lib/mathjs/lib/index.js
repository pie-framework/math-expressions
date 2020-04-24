// import customized constants file
import type from "./type";
import constants from "./constants";
import { expression, json, error } from "mathjs";

export default [
  type, // data types (Matrix, Complex, Unit, ...)
  constants, // constants
  expression, // expression parsing
  // mathjsFunction, // functions
  json, // serialization utility (math.json.reviver)
  error, // errors
];
