class HomePage
{
    constructor(page)
    {
        this.page=page;
        this.lnk_logyourselfin = page.locator("//*[text()='log yourself in']");
        this.createAnAccount = page.locator("//*[text()='create an account']");
    }

    async click_logyourselfin()
    {
        await this.lnk_logyourselfin.click();
    }

    async click_createAnAccount()
    {
        await this.createAnAccount.click();
    }
}

module.exports = {HomePage};