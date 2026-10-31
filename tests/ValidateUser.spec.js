import { expect, test } from '@playwright/test'
import { HomePage } from '../pageobjects/Homepage';
import { LoginPage } from '../pageobjects/LoginPage';
import { WelComePage } from '../pageobjects/WelcomePage';
import { LogOffPage } from '../pageobjects/Logoffpage';
import { getExcelData } from '../util/excelutil';

const data = getExcelData("Cred");

test.describe('TC-Validate User', () => {
    data.forEach(user => {
        test(`Login User ${user.Email}`, async ({ page }) => {
            await page.goto(process.env.BASE_URL || 'http://localhost/uth/gadgetsgallery/catalog/');
            let homepage = new HomePage(page);
            await homepage.click_logyourselfin();
            await page.waitForTimeout(2000);
            let loginpage = new LoginPage(page);
            await loginpage.click_Login(user.Email, user.Password);
            await page.waitForTimeout(2000);

            expect(page.getByText("Log Off")).toBeVisible();

            let welcomepage = new WelComePage(page);
            welcomepage.click_logOff();
            await page.waitForTimeout(2000);
            let logoffpage = new LogOffPage(page);
            logoffpage.click_continue();
            await page.waitForTimeout(2000);
        });
    });
});
