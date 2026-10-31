class LogOffPage
{
    constructor(page)
    {
        this.page=page;
        this.lnk_continue=page.locator("#tdb1");
    }

    async click_continue()
    {
        await this.lnk_continue.click();
    }
}

module.exports = {LogOffPage};