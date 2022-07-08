import Ajv from "ajv";
import addFormats from "ajv-formats";

// AJV setup
const ajv = new Ajv({ allErrors: true, $data: true });
addFormats(ajv);

const registrationSchema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    username: { type: "string", minLength: 6 },
    password: { type: "string", minLength: 6 },
    passwordRepeat: { const: { $data: "1/password" } },
  },
  required: ["email", "username", "password", "passwordRepeat"],
};

export default registrationSchema;
