import fetchingdata from "../genericUlility/fetchingdata.js";
describe("excel utility",async()=>{
    it("write data",async()=>{
        await fetchingdata.writedatautil("./test/testdata/exceldata.xlsx","Sheet3",1,1,"goodbuy")
        // await fetchingdata.writeData("./test/testdata/exceldata.xlsx","Sheet2",1,1,"Swaraj")
    })
})