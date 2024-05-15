const {test, expect} = require('@playwright/test');
const path = require('path');

// function to get current date in YYMMDD format
function getCurrentDateTime() {
    const date = new Date();
    const year = date.getFullYear().toString(); // get all digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-based, pad single digit months with 0
    const day = date.getDate().toString().padStart(2, '0'); // pad single digit days with 0
    const hours = date.getHours().toString().padStart(2, '0'); // pad single digit hours with 0
    const minutes = date.getMinutes().toString().padStart(2, '0'); // pad single digit minutes with 0
    const seconds = date.getSeconds().toString().padStart(2, '0'); // pad single digit seconds with 0
    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  };

  // hook to capture screenshot on failure
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshotPath = path.join(__dirname, 'screenshots', `${testInfo.title}_${getCurrentDateTime()}_${testInfo.project.name}.png`);
        await page.screenshot({ path: screenshotPath });
        console.log(`Screenshot saved: ${screenshotPath}`);
    }
  });
 
test('onFailureMakeSS', async ({ page }) => {
    // navigate to a web page
    await page.goto('https://example.com');
      
    // intentional failure for demonstration purposes
    await expect(page).toHaveTitle('Non-Existent Title');
});
  
test('pass', async ({ page }) => {
    // navigate to a web page
    await page.goto('https://example.com');

    // this test should pass
    await expect(page).toHaveTitle('Example Domain');
});