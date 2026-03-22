const {
  By,
  until,
  createDriver,
  openHomePage,
  waitForTitle,
  openAuthModal,
  finishTest,
  failTest,
} = require('./helpers');

async function runTest() {
  let driver;

  try {
    console.log('TEST 02: Успішне відкриття модального вікна авторизації');

    driver = await createDriver();

    await openHomePage(driver);
    await waitForTitle(driver);
    await openAuthModal(driver);

    console.log('STEP: Перевіряю заголовок модального вікна');
    await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(),'Вхід в акаунт')]")),
      5000
    );

    await driver.sleep(1500);

    await finishTest(driver, 'SUCCESS: Модальне вікно авторизації відкривається');
  } catch (error) {
    await failTest(driver, error);
  }
}

runTest();