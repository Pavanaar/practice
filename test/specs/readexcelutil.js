import fetchingdata from "../genericUlility/fetchingdata.js";
describe("excel utility",async()=>{
    it("read data",async()=>{
        console.log(await fetchingdata.readdatautil("./test/testdata/exceldata.xlsx","Sheet1",1,1));

       let celldata= await fetchingdata.readdatautil("./test/testdata/exceldata.xlsx","Sheet1",1,1)
       console.log(celldata);
    })
})