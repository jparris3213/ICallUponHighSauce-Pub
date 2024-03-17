//Main Imports, Prompts, and Data for Usage
//const puppeteer = import("puppeteer");
//import * as puppeteer from "puppeteer";
//import { my_login } from "./log_in.js";
//import { add_skill } from "./skill_add.js";
import { dark_overcaster } from "./tests/test-darkfae.js";
import { reavertemp } from "./tests/test-reavertemp.js";
import { bright_overcaster } from "./tests/test-brightfae.js";
import { abarwar } from "./tests/test-barwar.js";
import { abartemp } from "./tests/test-bartemp.js";
import { abarthief } from "./tests/test-barrogue.js";
import { abaracle } from "./tests/test-baracle.js";
import { abarschol } from "./tests/test-barscholar.js";
//Import Username and Pass from environment variables
const username = process.env.SITE_USERNAME;
const pword = process.env.SITE_PASS;
console.log(username)

/* function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve,time)
    });
} */

//Tests To Run
await dark_overcaster(username,pword);

await reavertemp(username,pword);

await abarschol(username,pword);
/* 
await bright_overcaster(username,pword);

await abarwar(username,pword);
await abartemp(username,pword);
await abarthief(username,pword);
await abaracle(username,pword); */
