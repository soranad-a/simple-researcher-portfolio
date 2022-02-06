import Ajv from "ajv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { EmailBody, emailSchema } from "./types/ajv_schemas";
import { ErrorBody } from "./types/error_body";
import { getAllRequiredEnvVars, sendEmail, verifyRecaptcha } from "./Utils";

const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();

const envVars = getAllRequiredEnvVars();
var jsonParser = bodyParser.json();

app.use(
  cors({
    origin: envVars.frontendUrl,
  })
);

app.post("/email", jsonParser, async (req, res) => {
  const ajv = new Ajv();
  const validate = ajv.compile(emailSchema);

  console.log('[INFO]: Received email from frontend. content:', req.body);

  if (validate(req.body)) {
    const emailObject: EmailBody = req.body;

    try {
      await verifyRecaptcha(
        envVars.smtpGoogleRecaptchaSecret,
        emailObject.recaptcha.response
      );
    } catch {
      res
        .status(400)
        .send(
          new ErrorBody(
            400,
            "WrongRecaptcha",
            "The provided recaptcha could not be validated."
          )
        );
    }

    try {
      sendEmail(envVars, emailObject, () => {
        res.status(200).send();
      });
      console.log('[INFO]: Email send-out was successful.');
    } catch {
      res
        .status(400)
        .send(
          new ErrorBody(
            400,
            "InternalServerError",
            "Server side error. Please try again later."
          )
        );
    }
  } else {
    res
      .status(400)
      .send(
        new ErrorBody(
          400,
          "InvalidBodySchema",
          "The specified schema was not correct."
        )
      );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
