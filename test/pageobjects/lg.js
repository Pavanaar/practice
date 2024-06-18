class launch{
    get search()
    {
        return $("//span[@class='DocSearch-Button-Placeholder']")
    }
    get srh()
    {
        return $("//input[@class='DocSearch-Input']")
    }
    get abc()
    {
        return $("//input[@class='DocSearch-Input']")
    }
    async wdio(){
        await this.search.click()
        await this.srh.setValue("assertion")
    }

}
export default new launch()