import mailgun from "mailgun-js";
import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(_dirname, "../.env"),
});
export function initializeMailgun() {
  return mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });
}
