const { Builder, By, until } = require('selenium-webdriver');

const BASE_URL = 'http://localhost:3000';

async function createDriver() {
  const driver = await new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize();
  return driver;
}

async function openHomePage(driver) {
  console.log('STEP: Відкриваю головну сторінку');
  await driver.get(BASE_URL);
  await driver.sleep(2000);
}

async function waitForTitle(driver) {
  console.log('STEP: Очікую правильний title');
  await driver.wait(until.titleContains('LoveSushi'), 5000);
  const title = await driver.getTitle();
  console.log(`TITLE: ${title}`);
  await driver.sleep(1000);
}

async function findSearchInput(driver) {
  return driver.findElement(By.css('input[placeholder="Пошук..."]'));
}

async function openAuthModal(driver) {
  console.log('STEP: Відкриваю модальне вікно авторизації');

  const buttons = await driver.findElements(By.xpath("//button[contains(., 'Авторизуватися')]"));

  if (buttons.length === 0) {
    throw new Error('Кнопка "Авторизуватися" не знайдена');
  }

  await buttons[0].click();
  await driver.sleep(2000);
}

async function switchToRegisterMode(driver) {
  console.log('STEP: Перемикаюся на режим реєстрації');

  const registerSwitch = await driver.findElement(
    By.xpath("//button[contains(., 'Реєстрація')]")
  );

  await registerSwitch.click();
  await driver.sleep(1500);
}

async function finishTest(driver, successMessage) {
  console.log(successMessage);
  await driver.sleep(5000);
  await driver.quit();
}

async function failTest(driver, error) {
  console.error('TEST FAILED');
  console.error(error);

  if (driver) {
    await driver.sleep(5000);
    await driver.quit();
  }
}

module.exports = {
  By,
  until,
  createDriver,
  openHomePage,
  waitForTitle,
  findSearchInput,
  openAuthModal,
  switchToRegisterMode,
  finishTest,
  failTest,
};