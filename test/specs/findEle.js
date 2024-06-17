describe('',()=>{
    it('',async()=>{
        await browser.url('https://www.flipkart.com/j9e/m38/hzg/~cs-71f9p4as68/pr?sid=j9e,m38,hzg&collection-tab-name=All+Refrigerators1')
        let b=await $(".wsejfv")
        await expect(b).toBeClickable()
        
        await browser.pause(3000)
        const a=await $$("//div[@class='fxf7w6 rgHxCQ']")
        //console.log(a);
        // a.map(text => console.log(text.getText()))
       
        

    })
})