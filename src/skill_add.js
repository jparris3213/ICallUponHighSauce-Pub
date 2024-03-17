//Main Imports, Prompts, and Data for Usage

import * as puppeteer from "puppeteer";
//const dotenv = import("dotenv")

//const username = process.env.SITE_USERNAME;
//const pword = process.env.SITE_PASS;

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export async function add_skill(
  category,
  skills_build_order,
  page,
  specialization_skill
) {
  //KNOWLEDGE SKILLS
  var category = category; //Knowledge
  var skills_build_order = skills_build_order;
  var specialization_skill = specialization_skill;
  await page.waitForSelector(`details[data-categoryid='${category}']`, {
    visible: true,
  });
  var array_length = skills_build_order.length;

  if (category === 8) {
    console.log("Enabling Freebuild Mode for Trade Skill Test");
    await delay(3000); 
    await page.waitForSelector("#rdToggleFreeBuildMode");
    await page.click(
      "li.togglr:nth-child(13) > label:nth-child(1) > span:nth-child(2)",
      { clickCount: 1 }
    );
    await page.reload();
    console.log("5");
    await delay(1000);
    console.log("4");
    await delay(1000);
    console.log("3");
    await delay(1000);
    console.log("2");
    await delay(1000);
    console.log("1");
  } //Turns on Free Build Mode for Testing

  for (var i = 0; i < array_length; i++) {
    //main skill add process
    console.log(`${[i]} of ${array_length}`);
    await page.click(`details[data-categoryid='${category}']`); //Opens Category
    await delay(1000);
    await page.waitForSelector(
      `button.white.star[data-skillid='${skills_build_order[i]}']`, //Checks for Existence of Add Skill Star
      { visible: true }
    );
    await page.click(
      `button.white.star[data-skillid='${skills_build_order[i]}']` //Clicks Star for skill id i
    );

    if (await page.$(`h6#teacherlessModeAlert[class="hidden"]`)) {
      //Checks if Teacherless Mode is hidden, meaning not active, and backs out to activate/re-start teacherless mode and then continues
      console.log("TeacherlessModeLostError");
      await page.reload(); //reload page to 'back out' of skill
      //console.log("Close Button Clicked")
      await page.waitForSelector("#rdToggleTeacherlessMode");
      await page.click(
        "li.togglr:nth-child(12) > label:nth-child(1) > span:nth-child(2)",
        { clickCount: 1 }
      );
      await page.reload();
      await page.click(`details[data-categoryid='${category}']`); //Opens Category
      await delay(1000);
      await page.waitForSelector(
        `button.white.star[data-skillid='${skills_build_order[i]}']`, //Checks for Existence of Add Skill Star
        { visible: true }
      );
      await page.click(
        `button.white.star[data-skillid='${skills_build_order[i]}']` //Clicks Star for skill id i
      );
    }

    await delay(2000); //If Specialization - Cel Gen
    if (skills_build_order[i] === specialization_skill) {
      await page.waitForSelector(`button#btnFinal`);
      const skill_name = await page.$eval("header > div > h1", element => (element.innerHTML));
      console.log(`This is a Specialization: ${skill_name}`);
      await delay(1000);
      await page.click(`button#btnFinal`);
    } else {
      if (category === 8) {
        await page.waitForSelector(`button#btnFinal`);
        const skill_name = await page.$eval("header > div > h1", element => (element.innerHTML));
        console.log(`This Requires Pupil Credits: ${skill_name}`);
        if (await page.$(`h6#freeBuildModeAlert[class="hidden"]`)) {
          console.log("Free Build Mode Lost, Re-Enabling");
          await page.reload();
          await page.waitForSelector("#rdToggleFreeBuildMode");
          await page.click(
            "li.togglr:nth-child(13) > label:nth-child(1) > span:nth-child(2)",
            { clickCount: 1 }
          );
          await page.reload();
          await page.click(`details[data-categoryid='${category}']`); //Opens Category
          await delay(1000);
          await page.waitForSelector(
            `button.white.star[data-skillid='${skills_build_order[i]}']`, //Checks for Existence of Add Skill Star
            { visible: true }
          );
          await page.click(
            `button.white.star[data-skillid='${skills_build_order[i]}']` //Clicks Star for skill id i
          );
        }

        await delay(3000);
        await page.click(`button#btnFinal`);
      } else {
        await delay(3000);
        await page.waitForSelector(`button#btnFinal`, { visible: true });
        await page.waitForSelector(`td.numericcell[data-trans-type="debit"]`,{visible: true});
        const skill_name = await page.$eval("header > div > h1", element => {return element.innerHTML});
        const build = await page.$eval(`td.numericcell[data-trans-type="debit"]`, element => {return element.innerHTML});
        
        console.log(`${skill_name} : ${build} Added without issue`);
        await page.click(`button#btnFinal`); //Click Add Skill Button
      }
    }
    console.log(`Skill Added ${skills_build_order[i]}`);

    await page.reload();
    await delay(1000);
  }
}

// Locate the full title with a unique string
/* const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    );
    const fullTitle = await textSelector?.evaluate(el => el.textContent);
  
    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle); */
