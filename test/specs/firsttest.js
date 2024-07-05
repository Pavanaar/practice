
import { expect } from "chai"
describe("flipkart",()=>{
    it("launch a url",async()=>{
       await  browser.url("https://webdriver.io/docs/configuration")
        let url=await browser.getUrl()
        // let a="asdff"
        // expect(true).have.been.a("boolean")

         expect(url).to.be.equal("https://webdriver.io/docs/configuration")
        
    })
})