let puppeteer = require("puppeteer");
const { id, pass, name } = require("./credential");
let tab;
(async function(){

try{

    let browser= await puppeteer.launch({headless:false, defaultViewport : null, 
        args: ["--start-maximized"],
        // slowMo:70
    });

    let allpages = await browser.pages();

    tab = allpages[0];
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector('input[aria-label="Phone number, username, or email"]');
    await tab.type('input[aria-label="Phone number, username, or email"]', id);
    await tab.type('input[aria-label="Password"]', pass);
    await tab.click(".sqdOP.L3NKy.y3zKF");

    await naviAndClick(".sqdOP.L3NKy.y3zKF");
    await tab.waitForSelector(".aOOlW.HoLwm");
    await tab.click(".aOOlW.HoLwm");

    await tab.waitForSelector('input[placeholder="Search"]',{ visible: true});
    await tab.type('input[placeholder="Search"]',"enaaggarwal001",{delay:100});

    await tab.waitForSelector(".drKGC .fuqBx a",{ visible: true});
    let profile = await tab.$(".drKGC .fuqBx a");
    await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle0"}) ,profile.click()]);
    
    await tab.waitForSelector(".v1Nh3.kIKUG._bz0w", {visible:true});
    await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle0"}) ,tab.click(".v1Nh3.kIKUG._bz0w")]);
    // await tab.click("_9AhH0");

    await tab.waitForSelector('section .QBdPU span',{visible:true});
    await tab.click('section .QBdPU span');

    for(let i =0;i<15;i++){
        await Promise.all([tab.waitForNavigation({waitUntil:"networkidle0"}) ,tab.click("._65Bje.coreSpriteRightPaginationArrow") ]);
        await tab.waitForSelector('section .QBdPU span' , {visible:true});
        await tab.click('section .QBdPU span');
    }

}
catch(err){
    console.log(err);
}



})();

async function naviAndClick(selector){
    try{
        await tab.waitForNavigation({waitUntil:"networkidle2"});
        await tab.click(selector); 
    }
    catch(err){
        console.log(err);
    }
}

//blackjack_india