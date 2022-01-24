// Importing env variables
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/food";
import Image from "./API/images";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/user";
import Menu from "./API/Menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);

zomato.get("/", (req,res) => res.json({message: "SetUp Success Yay!!"}));

zomato.listen(4000, ()=> console.log("Server is up and running"));
