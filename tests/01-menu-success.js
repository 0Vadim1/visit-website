const {
  By,
  createDriver,
  openHomePage,
  waitForTitle,
  finishTest,
  failTest,
} = require('./helpers');

async function runTest() {
  let driver;

  try {
    console.log('TEST 01: Успішний перехід до секції меню');

    driver = await createDriver();

    await openHomePage(driver);
    await waitForTitle(driver);

    console.log('STEP: Шукаю кнопку "Переглянути меню"');
    const menuButton = await driver.findElement(By.css('a[href="#menu"]'));
    await driver.sleep(1000);

    console.log('STEP: Натискаю кнопку "Переглянути меню"');
    await menuButton.click();
    await driver.sleep(2500);

    console.log('STEP: Перевіряю, що секція меню існує');
    const menuSection = await driver.findElement(By.id('menu'));
    const displayed = await menuSection.isDisplayed();

    if (!displayed) {
      throw new Error('Секція меню не відображається');
    }

    await finishTest(driver, 'SUCCESS: Перехід до меню працює');
  } catch (error) {
    await failTest(driver, error);
  }
}

runTest();