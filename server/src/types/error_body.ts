type ErrorName =
  | "InvalidBodySchema"
  | "MissingRecaptcha"
  | "InternalServerError"
  | "WrongRecaptcha";

export class ErrorBody {
  status: number;
  name: ErrorName;
  message: string;

  constructor(status: number, name: ErrorName, message: string) {
    this.status = status;
    this.name = name;
    this.message = message;
  }
}
