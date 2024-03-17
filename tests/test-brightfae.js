//Main Imports, Prompts, and Data for Usage "env-cmd -f ./config/dev.env node test-darkfae.js"
//const puppeteer = import("puppeteer");
import * as puppeteer from "puppeteer";
import { my_login } from "../src/log_in.js";
import { add_skill } from "../src/skill_add.js";


export async function bright_overcaster(username,pword){
console.log(username)

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve,time)
    });
}
const browser = await puppeteer.launch( {headless: false});
const page = await browser.newPage();

//Log in and Create a character
var char_name = "ABrightCaster";//Char# on site
console.log(char_name);
var build_add = 4000;
var ancestry_choice = `#arch_c67f0e12822c4ee2a6b982ff0056fddd`
var class_choice = `#arch_ea67543dc1b54e51b4e388f532370a13`;
var knowledge_build_order = [2,3,4,6] ;
var magic_build_order_primary = [19,194,194,11,194,11,12,194,11,12,13,11,12,13,14,12,13,14,15,13,14,15,16,14,15,16,17,15,16,17,18,16,17,18,17,18,18]
var magic_build_order_secondary = [116,115,115,123,115,123,124,115,123,124,125,123,124,125,126,124,125,126,127,125,126,127,128,126,127,128,129,127,128,129,130,128,129,130,129,130,130];
var weapon_build_order = [27,227,33]
var combat_build_order = [46,46,46,46,46,46,41,41,45,309,308,311,313,310,312,314,44,42,43]
var stealth_build_order = [52,51,51,51,50]
var prod_build_order = [80,82,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,81,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,83,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79,79]
var trade_build_order = [88,88,88,88,88,88,88,88,88,94,94,94,94,94,94,94,94,94,99,104,98,91,91,91,91,91,91,91,91,91,102,102,102,102,102,97,100,105,107,90,96,95,93,101,102,92,89];
await my_login(char_name,build_add,ancestry_choice,class_choice,username,pword,page);
await delay(2000);

//Build By Category
var category = 5 //Knowledge Category
await add_skill(category,knowledge_build_order,page);//Adds Knowledge Skills
await delay(2000);
var category = 6; //Magic Category
await add_skill(category,magic_build_order_primary,page,19);//Magic Skills (Primary Column)
await delay(2000);
var category = 6; //Magic Category
await add_skill(category,magic_build_order_secondary,page,116);//Magic Skills (Secondary Column)
await delay(2000);
//var category = 1; //Weapon Category
//await add_skill(category,weapon_build_order,page);//Weapon Category
/* await delay(2000);
var category = 3; //Stealth
await add_skill(category,stealth_build_order,page);//Stealth Category
await delay(2000);
var category = 2; //Combat
await add_skill(category,combat_build_order,page);//Combat Skills
await delay(2000);
var category = 4; //Production
await add_skill(category,prod_build_order,page);//Production Skills
await delay(2000);
var category = 8; //Trade
await add_skill(category,trade_build_order,page);//Trade Skills */
console.log("Char Built")
await page.close();



}
