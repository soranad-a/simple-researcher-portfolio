type LanguageData = {
  subject: string;
  emailDescription: string;
  emailEndNote: string;
  emailNoHtmlNote: string;
  yourName: string;
  yourEmail: string;
  yourMessage: string;
};

export type EmailConfigType = {[key in Language]: LanguageData};

export const EMAIL_CONFIG: EmailConfigType = {
  "en-US": {
    emailNoHtmlNote:
      "Please Note: It seems like your email application can not show the correct style of this message.",
    emailDescription: 'Thank you for your message. You will receive a response soon!',
    emailEndNote: 'This is an automatically generated e-mail. If you have further questions, you can directly response to this message.',
    subject: "New Website Request",
    yourEmail: "Your E-Mail",
    yourMessage: "Your Message",
    yourName: "Your Name",
  },
  de: {
    emailDescription: "Danke für Ihre Nachricht. Sie werden in Kürze eine Antwort erhalten!",
    emailEndNote: "Dies ist eine automatisch generierte E-Mail. Wenn Sie weitere Fragen haben, können Sie direkt auf diese antworten.",
    emailNoHtmlNote: "Achtung: Es scheint, dass Ihre E-Mail-Anwendung nicht den korrekten Stil dieser Nachricht anzeigen kann.",
    subject: "Neue Webseiten-Anfrage",
    yourEmail: "Ihre E-Mail",
    yourMessage: "Ihre Nachricht",
    yourName: "Ihr Name",
  },
};

export const ALL_LANGUAGES = ["en-US", "de"]; // equal to the browser native language abbreviations

export type Language = typeof ALL_LANGUAGES[number];
