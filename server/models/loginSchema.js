import Ajv from "ajv";
import addFormats from "ajv-formats";

// AJV setup
const ajv = new Ajv({ allErrors: true, $data: true });
addFormats(ajv);

const loginSchema = {
  type: "object",
  properties: {
    username: { type: "string", minLength: 6 },
    password: { type: "string", minLength: 6 },
  },
  required: ["username", "password"],
};

export default loginSchema;
