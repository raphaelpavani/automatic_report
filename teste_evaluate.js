const axios = require('axios');
const cheerio = require('cheerio');
const UserAgent = require('user-agents');
//const url = 'http://www.sigpri.mg.gov.br/sigpri-web/faces/index.xhtml?GLO=true';
const url = 'https://sip.policiacivil.mg.gov.br/'
require('dotenv').config();

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage();
 
  await page.goto(url);
  await page.waitForSelector(".j_username")
  await page.type('.j_username', process.env.CPF  ,{delay: 100} );

  await page.waitForSelector(".j_password");
  await page.type('.j_password', process.env.SENHA  ,{delay: 100} );

  const el = await page.$(".btn-tema")

  await page.evaluate(el => el.click(), el);





})();

//https://pastebin.com/za2djxzP