import adddata from "../pageobjects/adddata.js";
import fs from "fs"
let d=fs.readFileSync("./test/testdata/adddata.json")
let c=JSON.parse(d)

describe("",()=>{
    c.forEach(element => {
        let u=element.usn
        let p=element.pwd

        it("",async()=>{
            await browser.url("https://practicetestautomation.com/practice-test-login/")
            await adddata.login(u,p)
            await browser.pause(4000)
            
        })
      
        



    });
})