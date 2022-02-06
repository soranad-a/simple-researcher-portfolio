import axios from "axios";
import nodemailer from "nodemailer";
import {
  ALL_LANGUAGES,
  EmailConfigType,
  EMAIL_CONFIG,
  Language,
} from "./AppConst";
import { EmailBody } from "./types/ajv_schemas";

/**
 * This function checks if all required env vars are set.
 * @returns true if all required env vars are set, otherwise false
 */
export const getAllRequiredEnvVars = (): EnvVars => {
  const envVars = {
    smtpServerAdress: process.env.SMTP_SERVER_ADDRESS,
    smtpPort: process.env.SMTP_PORT,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpGoogleRecaptchaSecret: process.env.GOOGLE_RECAPTCHA_SECRET,
    fromAddress: process.env.FROM_ADDRESS,
    frontendUrl: process.env.FRONTEND_URL,
  };
  if (Object.values(envVars).some((envVar) => typeof envVar === "undefined")) {
    throw new ReferenceError("Not all required references are set");
  } else {
    return {
      fromAddress: envVars.fromAddress as string,
      frontendUrl: envVars.frontendUrl as string,
      smtpGoogleRecaptchaSecret: envVars.smtpGoogleRecaptchaSecret as string,
      smtpPassword: envVars.smtpPassword as string,
      smtpPort: envVars.smtpPort as string,
      smtpUsername: envVars.smtpUsername as string,
      smtpServerAdress: envVars.smtpServerAdress as string,
    };
  }
};

/**
 * This function checks if a given recaptcha response is valid by accessing the google api.
 * @param recaptchaSecret The secret key of the registered domain at google.
 * @param recaptchaResponse The response after challenge fulfillment.
 */
export const verifyRecaptcha = async (
  recaptchaSecret: string,
  recaptchaResponse: string
) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`;

  const responseFromGoogle = await axios.post(url);
  if (!responseFromGoogle.data.success == true) {
    throw new Error("Received no success flag from google.");
  }
};

/**
 * This function triggers a send of an email by using the env variables and the received Email object from frontend.
 * @param envVars The EnvVars object
 * @param emailObject The received EmailBody object
 * @param callback Function which should be called after email send success
 */
export const sendEmail = async (
  envVars: EnvVars,
  emailObject: EmailBody,
  callback: () => void
) => {
  const transporter = nodemailer.createTransport({
    host: envVars.smtpServerAdress,
    port: Number(envVars.smtpPort) || 0,
    secure: false,
    auth: {
      user: envVars.smtpUsername,
      pass: envVars.smtpPassword,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const translatedMessageObject = composeMessage(
    emailObject.name,
    emailObject.message,
    emailObject.email,
    emailObject.language ? emailObject.language : ALL_LANGUAGES[0]
  );

  const message = {
    from: envVars.fromAddress,
    to: emailObject.email,
    bcc: envVars.fromAddress,
    subject: translatedMessageObject.subject,
    html: translatedMessageObject.html,
    text: translatedMessageObject.text,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error while email send occured:", err);
      throw new Error("Sending out the email failed");
    } else {
      console.log("Sent an email out. Info:", info);
      callback();
    }
  });
};

/**
 * This function creates the email content and subject based on the found language.
 *
 * @param name Name of the user
 * @param message Message of the user
 * @param email Email of the user
 * @param language Selected language
 * @returns object containing the html, text and subject of the email
 */
const composeMessage = (
  name: string,
  message: string,
  email: string,
  language: Language
): { html: string; text: string; subject: string } => {
  return {
    subject: EMAIL_CONFIG[language].subject,
    html: `<p>${EMAIL_CONFIG[language].emailDescription}</p><p>${EMAIL_CONFIG[language].yourName}: ${name}<br />${EMAIL_CONFIG[language].yourEmail}: ${email}<br />${EMAIL_CONFIG[language].yourMessage}: ${message}</p><p>${EMAIL_CONFIG.emailEndNote}</p>`,
    text: `[${EMAIL_CONFIG[language].emailNoHtmlNote}] ${EMAIL_CONFIG[language].yourName}: ${name} ${EMAIL_CONFIG[language].yourEmail}: ${email} ${EMAIL_CONFIG[language].yourMessage}: ${message} ${EMAIL_CONFIG.emailEndNote}`,
  };
};

type EnvVars = {
  smtpServerAdress: string;
  smtpPort: string;
  smtpUsername: string;
  smtpPassword: string;
  smtpGoogleRecaptchaSecret: string;
  fromAddress: string;
  frontendUrl: string;
};
