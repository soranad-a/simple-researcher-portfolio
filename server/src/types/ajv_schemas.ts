import { JSONSchemaType } from "ajv";
import { Language } from "AppConst";

export type EmailBody = {
  name: string;
  email: string;
  message: string;
  language: Language,
  recaptcha: {
    response: string;
  };
};

export const emailSchema: JSONSchemaType<EmailBody> = {
  type: "object",
  properties: {
    email: { type: "string" },
    message: { type: "string" },
    name: { type: "string" },
    language: { type: "string" },
    recaptcha: {
      type: "object",
      properties: {
        response: { type: "string" },
      },
      required: ["response"],
    },
  },
  required: ["email", "message", "name", "recaptcha"],
  additionalProperties: true,
};
