import { Status } from "./enums";

export interface Invoice {
  Id: number,
  Date: Date,
  Status: Status,
  Amount: number
}
