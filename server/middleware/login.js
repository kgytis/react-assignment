// Registration data validation related imports
import Ajv from "ajv";
import addFormats from "ajv-formats";

import loginSchema from "../models/loginSchema.js";

// Ajv setup
const ajv = new Ajv({ allErrors: true, $data: true });
addFormats(ajv);

const loginValidation = async (req, res, next) => {
  try {
    if (req.body) {
      // will execute if body will not be empty
      const validate = ajv.compile(loginSchema);
      const data = {
        username: req.body.username,
        password: req.body.password,
      };
      const valid = validate(data);
      if (!valid)
        // if some of the information will not match the written schema -> error will be send
        return res.status(400).send({ msg: validate.errors });
    }
  } catch (err) {
    return res.status(400).send({ msg: err });
  }
  next();
};

export default loginValidation;
