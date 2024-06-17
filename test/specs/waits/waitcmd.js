describe('',async()=>{
    it('',async()=>{
        browser.url('https://www.youtube.com/')
        browser.pause(10000)
        await expect(browser).toHaveUrl('https://www.youtube.com/')
        await browser.$('//input[@id="search"]').setValue('movies')
        await browser.$("//div[@id='scroll-container']//yt-formatted-string[contains(.,'Unwatched')]").click()
        let b=await browser.getUrl()
        console.log(browser.getUrl());
    })
})