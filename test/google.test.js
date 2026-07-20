const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const localDriverPath = path.join(__dirname, '..', 'drivers', 'chromedriver.exe');

describe('Busca no Google', function () {
  let driver;

  before(async function () {
    const builder = new Builder().forBrowser('chrome');

    if (fs.existsSync(localDriverPath)) {
      builder.setChromeService(new chrome.ServiceBuilder(localDriverPath));
    }

    driver = await builder.build();
  });

  after(async function () {
    await driver.quit();
  });

  it('deve encontrar resultados ao pesquisar "Selenium"', async function () {
    await driver.get('https://www.google.com');

    const searchBox = await driver.wait(until.elementLocated(By.name('q')), 10000);
    await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.wait(until.titleContains('Selenium'), 10000);

    const title = await driver.getTitle();
    assert.ok(title.includes('Selenium'));
  });
});
