//Main Imports, Prompts, and Data for Usage

import * as puppeteer from "puppeteer"
//const dotenv = import("dotenv")


//const username = process.env.SITE_USERNAME;
//const pword = process.env.SITE_PASS;


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve,time)
    });
}


export async function my_login(char_name,build_add,ancestry_choice,class_choice,username,pword,page) {

    let build = String(build_add)

    //Open myLARP Shadowmoor Page
    await page.goto(`https://shadowmoor.mylarp.dev/login.asp?loadTab=signIn`);
    
    //Set Webpage Size
    await page.setViewport({width: 1920, height: 2160 });
    //Wait for Page Load before continuing
    await page.waitForSelector('body >>> input#emailLogin',{visible:true});
    //Enter staff email into login area
    await page.type('body >>> input#emailLogin', username);
    //enter staff email into login area    
    await page.type(`body >>> input.loginPassword`, pword);
    //Click "Sign In" Button to load profile
    await page.click(`body >>> button#btnSignIn`)
    //Create New Character
    const create_button = `logistics/character/create.asp`
    await page.waitForSelector(`#chars > footer:nth-child(3) > a:nth-child(1)`,{visible:true});
    await page.goto(`https://shadowmoor.mylarp.dev/logistics/character/create.asp`)
    //Enter Name
    await page.waitForSelector(`#name`,{visible:true});
    await page.type('#name', char_name);
    //Select Ancestry - Barbarian
    await page.click(ancestry_choice)
    //Select Class - Scholar
    await page.click(class_choice)
    //Click Create Character Button
    await delay(2000);
    await page.click(`#btnSubmitCreate`)

    //Wait for Page load - Char Sheet
    await page.waitForSelector(`#pointPools > tbody:nth-child(3) > tr:nth-child(2) > th:nth-child(1) > a:nth-child(1)`,{visible:true})
    //Click Build Link
   await page.click(`#pointPools > tbody:nth-child(3) > tr:nth-child(2) > th:nth-child(1) > a:nth-child(1)`)
   await page.waitForSelector(`div.required:nth-child(8) > input:nth-child(2)`,{visible:true})
    //Add build
    await delay(1000);
        //Add Amount
   await page.type(`div.required:nth-child(8) > input:nth-child(2)`, build);
   
   await page.select("#frmManualAdd_expiration", "252");
        //Select Type
        //Unsure how to handle dropdown in puppetteer yet
        //Add Reason
   await page.type(`div.required:nth-child(11) > textarea:nth-child(2)`, `motherlode;!;!;!`);
        //Accept
    await page.waitForSelector(`html body div.bodyWrapper div.flexbox form#frmManualAdd.flexibleForm button.btnUpdate`)
   await page.click(`html body div.bodyWrapper div.flexbox form#frmManualAdd.flexibleForm button.btnUpdate`);
   await page.waitForSelector(`#RobBox > div.innerDiv.success > footer > button`);
   await page.click(`#RobBox > div.innerDiv.success > footer > button`)
   await page.click(`.breadcrumb > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`)
   console.log(`Created ${char_name} a ${ancestry_choice} ${class_choice} with ${build} build to Spend`)
}

