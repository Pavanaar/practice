describe('',async()=>{
    it('',async()=>{
      await browser.url('https://www.youtube.com/')
      console.log(await browser.getTitle());
      await expect(browser).toHaveTitleContaining("Yooou")
       
    })
})