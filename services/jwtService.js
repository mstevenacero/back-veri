import Jwt from "jsonwebtoken";
import { config } from "../config/index.js";

async function generateToken(pass) {
  if (pass) {
    const payload = {
      check: true,
    };
    const token = Jwt.sign(payload, config.secretPass, {
      expiresIn: "7d",
    });
    return token;
  } else {
    console.log("no se pudo crear token");
  }
}

export default {
  generateToken,
};
