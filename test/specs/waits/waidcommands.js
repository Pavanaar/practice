describe('waits',async()=>{
    it('pause command',async()=>{
        await browser.url('https://www.youtube.com/')
        
        //await browser.$("//div[@id='search-input']").click()
        await browser.pause(2000)
        // await browser.$("//div[@id='search-input']").setValue("waits")
        // await browser.pause(2000)
    })
    // it('wait conditions',async()=>{
    //     await browser.url('https://webdriver.io/docs/api/expect-webdriverio/#tohavetitle')
        
    //     await browser.$("//span[@class='DocSearch-Button-Placeholder']").waitForDisplayed()
    //     await browser.$("//span[@class='DocSearch-Button-Placeholder']").click()
        
    //     await browser.$("//input[@class='DocSearch-Input']").setValue("waits")
    //     await browser.pause(2000)
    // })

})