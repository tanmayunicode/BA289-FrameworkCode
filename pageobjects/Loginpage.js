class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.ip_email_address = page.locator("input[name='email_address']");
        this.ip_password = page.locator("input[name='password']");
        this.btn_signin = page.locator("#tdb1");
        this.lnk_passwordforgotten = page.locator("//a[text()='Password forgotten? Click here.']");
        this.lnk_continue = page.locator("#tdb2");
        
    }

    async click_Login(email,pwd)
    {
        await this.ip_email_address.fill(email);
        await this.ip_password.fill(pwd);
        await this.btn_signin.click();
    }

    async click_continue()
    {
        await this.lnk_continue.click();
    }
    async click_passwordForgotten()
    {
        await this.lnk_passwordforgotten.click();
    }
}

module.exports = {LoginPage};