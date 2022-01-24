import express from "express";

// config
import { initializeMailgun } from "../../config/mail.config";

const Router = express.Router();

/*
Route    /mail
Des      send a mail
params   none
Acccess  public
Method   post
body     from, to, subject, text
*/
Router.post("/mail", async(req, res) => {
  try {
    // the maildata object should contain exact properties as below
    const {from, to, subject, text} = req.body.maiData;

    // Initializing mailgun library
    const sendMail = initializeMailgun();

    await sendMail.messages().send({ from, to, subject, text });

    return res.status(200).json({ status: "success sent" });
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;
